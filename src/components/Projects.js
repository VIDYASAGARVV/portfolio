import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  const projectList = [
    { id: 1, title: "Reactjs Frontend(Ai)", desc: "Modern frontend apps with React.js" },
        { id: 5, title: "Nextjs Frontend(Ai)", desc: "Modern frontend apps with Next.js" },

    { id: 3, title: "CRM Software (individual)", desc: "Business management software" },
        { id: 2, title: "Dynamic Websites (individual)", desc: "Full-stack dynamic PHP websites" },

    { id: 4, title: "NXTwave Internship", desc: "Learning & building projects" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">

        <h2 className="mb-5 text-center fw-bold">🚀 My Projects</h2>
        <div className="row g-4">
          {projectList.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-3">
              <Link
                to={`/projects/${project.id}`}
                className="text-decoration-none text-dark"
                onClick={() => handleCardClick(project.id)}
              >
                <div
                  className={`card project-card h-100 text-center p-3 ${
                    activeCard === project.id ? "active-card" : ""
                  }`}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

      </div>
      </div>
      <div className='h-50'></div>
    </section>
  );
}

export default Projects;
