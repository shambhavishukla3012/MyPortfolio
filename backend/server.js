import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import sgMail from '@sendgrid/mail';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';

dotenv.config();

if (!process.env.SENDGRID_API_KEY || !process.env.ADMIN_EMAIL) {
  throw new Error('Missing required environment variables');
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://my-portfolio-f933-db94fb9pb-shuklshaiuedus-projects.vercel.app/send-email']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Rate limiter to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/send-email', limiter);

const upload = multer();

// Route to handle email sending
app.post('/send-email', upload.single('attachment'), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body; // Include phone in destructuring
    const attachment = req.file;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).send('All required fields must be filled.');
    }

    // Validate attachment MIME type
    if (attachment && !['image/png', 'image/jpeg', 'application/pdf'].includes(attachment.mimetype)) {
      return res.status(400).send('Only PNG, JPEG, or PDF files are allowed.');
    }

    // Email to admin
    const adminEmail = {
      to: process.env.ADMIN_EMAIL, // Replace with your admin email
      from: process.env.ADMIN_EMAIL, // Replace with your verified SendGrid sender email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'} // Include phone if available
Message: ${message}`,
      attachments: attachment
        ? [
            {
              filename: attachment.originalname,
              content: attachment.buffer.toString('base64'), // Convert buffer to Base64
              type: attachment.mimetype, // MIME type of the file
              disposition: 'attachment', // Marks it as an attachment
            },
          ]
        : [],
    };
    // Acknowledgment email to the user
    const userEmail = {
      to: email,
      from: process.env.ADMIN_EMAIL, // Replace with your verified SendGrid sender email
      subject: 'Thank you for contacting me!',
      text: `Hi ${firstName},\n\nThank you for reaching out! I have received your message and will connect back shortly.\n\nBest regards,\nYour Name`,
    };

    // Send emails
    await sgMail.send(adminEmail);
    await sgMail.send(userEmail);

    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error.message);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export default app;