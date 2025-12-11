import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const layers = document.querySelectorAll(".parallax-img");

      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;

        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const reveal = () => {
      const content = document.querySelector(".home-content");
      if (window.scrollY < window.innerHeight / 1.3) {
        content.classList.add("show");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section className="hero">
      {/* BACKGROUND GLOW */}
      <div className="bg-glow"></div>

      {/* PARALLAX IMAGES */}
      <div className="floating-images">
        <img src="https://th.bing.com/th/id/OIP.DD3Hd27Mq75JFUs_gehSCQHaE8?w=295&h=196&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" className="parallax-img" alt="code.jpg" data-speed="0.02" />
        <img src="https://reactnative.dev/img/logo-og.png" className="parallax-img" data-speed="0.04" alt="react.jpg" />
        <img src="https://www.kindpng.com/picc/m/171-1718210_html-dialog-element-taking-full-advantage-of-javascript.png" alt="js.jpg" className="parallax-img" data-speed="0.06" />
        <img src="https://th.bing.com/th/id/OIP.nXGgKyuQE8qSzdoOlmfNugAAAA?w=251&h=159&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"alt="php.jpg" className="parallax-img" data-speed="0.03" />
      </div>

      {/* CONTENT */}
      <div className="home-content">
        <h1>Creative Web Developer</h1>
        <p>I build modern websites using (Html,css,javascript), React, PHP, Tailwind, Nodejs, and more.</p>
      </div>
    </section>
  );
}
