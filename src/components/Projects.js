import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // 👈 Create this for custom styles

function Projects() {
  const [activeCard, setActiveCard] = useState(null); // store active card index or id

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link
              to="/projects/1"
              className="text-decoration-none text-dark"
              onClick={() => handleCardClick(1)}
            >
              <div className={`card h-100 ${activeCard === 1 ? 'active-card' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">
                    Reactjs Frontend
                    <img
                      src="https://www.clipartmax.com/png/middle/8-84311_arrow-copy-and-paste.png"
                      alt="arrow"
                      style={{ height: '20px' }}
                      className="round"
                    />
                  </h5>
                  <p className="card-text">Description of project one.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link
              to="/projects/2"
              className="text-decoration-none text-dark"
              onClick={() => handleCardClick(2)}
            >
              <div className={`card h-100 ${activeCard === 2 ? 'active-card' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">
                    Dynamic Websites{' '}
                    <img
                      src="https://www.clipartmax.com/png/middle/8-84311_arrow-copy-and-paste.png"
                      alt="arrow"
                      style={{ height: '20px' }}
                      className="round"
                    />
                  </h5>
                  <p className="card-text">Description of project one.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 mb-3">
            <Link
              to="/projects/3"
              className="text-decoration-none text-dark"
              onClick={() => handleCardClick(3)}
            >
              <div className={`card h-100 ${activeCard === 3 ? 'active-card' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">CRM Software</h5>
                  <p className="card-text">Description of project two.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link
              to="/projects/4"
              className="text-decoration-none text-dark"
              onClick={() => handleCardClick(4)}
            >
              <div className={`card h-100 ${activeCard === 4 ? 'active-card' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">NXT Wave Internship</h5>
                  <p className="card-text">Description of project three.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-50'></div>
    </section>
  );
}

export default Projects;
