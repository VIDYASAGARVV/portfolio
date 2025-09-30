import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e) => {
      const symbols = document.querySelectorAll(".symbols span");
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      symbols.forEach((symbol, index) => {
        const speed = (index + 1) * 0.5;
        symbol.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    // Scroll reveal effect
    const handleScroll = () => {
      const content = document.querySelector(".home-content");
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight / 1.5) {
        content.classList.add("show");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Floating coding symbols */}
      <div className="symbols">
        <span>{`</>`}</span>
        <span>{`{}`}</span>
        <span>{`;`}</span>
        <span>{`<div>`}</span>
        <span>{`</body>`}</span>
      </div>

      {/* Overlay content */}
      <div className="home-content">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">
          I’m a Web Developer skilled in React, Node.js, Bootstrap, PHP and more.
        </p>
      </div>
    </section>
  );
}

export default Home;
