import React from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  const projectData = {
    1: {
      title: "Reactjs Frontend",
      description: "Detailed info about the Reactjs Frontend Design.",
      links: [
      
        { label: "Invoice Management", url: "https://invoice-react12.netlify.app/" },
        { label: "Solar Website", url: "https://whitecapsolars.netlify.app/" },
        { label: "E-commerce", url: "https://ecomm-reactfront.netlify.app/" },
          { label: "Edu Center", url: "https://trainingcenters.netlify.app/" },
        { label: "Doctor App", url: "https://doctors-online.netlify.app/" },
      ],
    },
     5: {
      title: "Nextjs Frontend",
      description: "Detailed info about the Nextjs Frontend Design.",
      links: [
      
        { label: "Portfolio", url: "https://nextjsprofile.netlify.app/" },
       
      ],
    },
    2: {
      title: "Dynamic Websites",
      description: "Detailed info about the Dynamic Websites project (PHP).",
      links: [
        { label: "Demo 1", url: "https://prdvandco.com/" },
        { label: "Demo 2", url: "https://reenterprise.co.in/" },
        { label: "Demo 3", url: "https://blue-stork-220806.hostingersite.com/" },
      ],
    },
    3: {
      title: "CRM Software",
      description: "Detailed info about the CRM Software project.",
      links: [{ label: "Demo 1", url: "https://webnsoftwaretest1.online/index.php" }],
    },
    4: {
      title: "NXTwave Internship",
      description: "Detailed info about Static, Responsive, Dynamic, React.js.",
      links: [{ label: "Demo 1", url: "https://vidyasagarproj.netlify.app/" }],
    },
  };

  const project = projectData[id];

  if (!project) return <h2 className="text-center py-5">❌ Project not found</h2>;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back to Projects</Link>

      <h2 className="fw-bold mb-3">{project.title}</h2>
      <p className="text-muted mb-4">{project.description}</p>

      <div>
        {project.links &&
          project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="btn btn-primary m-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
