import React from "react";
import "./about.css";

const About=()=> {
  return (
    <div>


      <section className="about-content">

        <div>
          <p className="label">WHAT IS REACT?</p>

          <h2>
            A simple way to build
            <span> modern websites.</span>
          </h2>
        </div>

        <div>
          <p>
            React is a JavaScript library used to build modern and
            interactive websites. It helps developers create reusable
            components, manage user interfaces easily, and build fast
            web applications.
          </p>

          <p>
            React makes it easier to create websites by dividing the
            user interface into small and reusable components.
          </p>
        </div>

      </section>

      <section className="features">

        <p className="label">REACT BASICS</p>

        <h2>
          What you can <span>learn.</span>
        </h2>

        <div className="feature-list">

          <div>
            <h3>Components</h3>
            <p>Build reusable parts of a website.</p>
          </div>

          <div>
            <h3>JSX</h3>
            <p>Write HTML-like code inside JavaScript.</p>
          </div>

          <div>
            <h3>Props</h3>
            <p>Pass data between components.</p>
          </div>

          <div>
            <h3>State</h3>
            <p>Manage changing data in your application.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;