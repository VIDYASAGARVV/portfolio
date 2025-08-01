import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  const projectData = {
     1: {
      title: "Reactjs Frontend",
      description: "Detailed info about the Reactjs Frontend Design.",
      links: [
        { label: "Edu Center", url: "https://trainingcenters.netlify.app/" },
      
        { label: "Reactjs-doctor_app", url: "https://doctors-online.netlify.app/" },
      ],
    },
    2: {
      title: "Dynamic Websites",
      description: "Detailed info about the Dynamic Websites project(PHP).",
      links: [
        { label: "Demo 1", url: "https://prdvandco.com/" },
        { label: "Demo 2", url: "https://reenterprise.co.in/" },
        {
          label: "Demo 3",
          url: "https://blue-stork-220806.hostingersite.com/",
        },
      ],
    },
    3: {
      title: "CRM Software",
      description: "Detailed info about the CRM Software project.",
      links: [
        { label: "Demo 1", url: "https://webnsoftwaretest1.online/index.php" },
        // { label: "GitHub Repo", url: "https://github.com/username/project2" },
      ],
    },
    4: {
      title: "NXTwave Internship",
      description:
        "Detailed info about the Static,Responsive,Dynamic,React.js.",
      links: [{ label: "Demo 1", url: "https://vidyasagarproj.netlify.app/" }],
    },
  };

  const project = projectData[id];

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="container py-5">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {project.links &&
        project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="btn btn-outline-primary m-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
    </div>
  );
}

export default ProjectDetail;
