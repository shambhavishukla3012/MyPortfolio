import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    {
      id: 1,
            title: "Route Optimizer",
      description:
        "A Flask-based web application that helps users plan and visualize efficient travel routes with interactive mapping capabilities. Enter list of locations and it will return the optimized path and best way to go to each location to minimize drive time.",
      image:
        "src/images/ro.jpeg",
      technologies: [
        "Python",
        "Flask",
        "APIs",
        "PostgreSQL",
      ],
      githubLink: "https://github.com/shambhavishukla3012/route-opitmizer",},

    {
      id: 2,
      title: "Wellness Tracking System",
      description:
        "Developed a wellness app with personalized plans integrating search functionality, Google Auth 2FA, and a chat feature. Enhanced scalability with Docker, achieving a 35% reduction in configuration time and faster deployment.",
      image:
        "src/images/wts.jpeg",
      technologies: [
        "PostgreSQL",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React",
        "Django",
        "Git",
        "Docker",
        "JIRA",
      ],
      githubLink: "https://github.com/shambhavishukla3012/WellnessTrackingSystem/tree/main/base",
      // demoLink: "#",
    },
    {
      id: 3,
      title: "Netflix Database Application",
      description:
        "Engineered a data-driven app to explore 10,000+ Netflix entries, incorporating data cleaning and leveraging PostgreSQL. Streamlined data processing and app performance by 30% through efficient CRUD API implementation.",
      image:
      "images/flixiq.jpeg",
      technologies: ["PostgreSQL", "HTML5", "CSS3", "Bootstrap", "Flask", "Git"],
      githubLink: "https://github.com/shambhavishukla3012/FlixIQ",
      // demoLink: "#",
    },
    {
      id: 4,
      title: "H&M Fashion Recommendation",
      description:
        "Conducted EDA on 31M records, uncovering key product trends, and optimizing product recommendations. Optimized data processing with Parquet, reducing disk space by 50% and boosting data loading speed for efficient analysis.",
      image:
        "src/images/hfr.jpeg",
      technologies: [
        "Python",
        "Data Mining",
        "Data Visualization",
        "Data Analysis",
        "Parquet",
      ],
      githubLink: "https://github.com/shambhavishukla3012/personalized-fashion-recommendation",
      // demoLink: "#",
    },
        {
      id: 5,    
        title: "CarbonScope",
      description:
        "Configured AWS infrastructure for real-time carbon emissions tracking across 50+ US airports. Automated OpenSky API data ingestion via Lambda and EventBridge, storing in S3.",
      image:
        "src/images/cs.png",
      technologies: ["AWS Lambda", "S3", "EC2", "EventBridge"],
      githubLink: "#",
      // demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container className="projects-container">
        <div className="section-title text-center">
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </p>
        </div>

        {/* Horizontally scrollable projects */}
        <div className="projects-scroll-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <Card className="project-card">
                <div className="project-image-container">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {/* <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                      </a> */}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faGithub} /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <Button
            variant="outline-primary"
            href="https://github.com/shambhavishukla3012"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <FontAwesomeIcon icon={faGithub} className="me-2" />
            View More on GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;