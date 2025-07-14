import React from 'react';
import './Home.css'; // Make sure the file exists and has correct styles

function Home() {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden parallax-section"
      style={{height:"500px"}}
    >
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white z-1">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio vv</h1>
        <p className="lead">
          I’m a Web Developer skilled in React, Node.js, Bootstrap, PHP and more.
        </p>
      </div>
    </section>
  );
}

export default Home;
