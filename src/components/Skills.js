import React from 'react';

function Skills() {
  const skills = ['HTML','CSS','JavaScript','React.js','Next.js(basic)','Tailwind Css(basic)', 'SEO page(basic)', 'Bootstrap 5', 'Node.js(basic)','PHP','Laravel12', 'MongoDB', 'Git', 'REST APIs','Social Media Management'];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <div className="d-flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border rounded btn btn-primary "
              style={{ minWidth: '120px', textAlign: 'center' }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
