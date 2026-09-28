import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="label">BUILD MODERN WEB INTERFACES</p>
          <h1>
            Create Modern
            <span> Web Experiences</span> with React
          </h1>

          <p className="hero-text">
            React is a JavaScript library for building interactive and dynamic
            user interfaces. It helps developers create modern web applications
            using reusable components.
          </p>

          <div className="buttons">
            <a href="#learn" className="primary-button">
              Start Learning
            </a>

            <a href="#projects" className="text-button">
              Explore React →
            </a>
          </div>
        </div>

        <div className="hero-box">
          <div className="code-top">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <strong>ReactFlow</strong>
          </div>

          <div className="code-content">
            <p>
              <span>const</span> App = () =&gt; {"{"}
            </p>

            <p className="indent">
              <span>return</span> (
            </p>

            <p className="indent2">&lt;h1&gt;Build with React&lt;/h1&gt;</p>

            <p className="indent">)</p>

            <p>{"}"}</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-heading">
          <p className="label">ABOUT REACT</p>

          <h2>
            A simple and powerful way to
            <span> build modern web interfaces.</span>
          </h2>
        </div>

        <div className="about-text">
          <p>
            React is a JavaScript library used to create interactive and dynamic
            user interfaces for websites and web applications. It is widely used
            for building modern Single Page Applications that provide smooth and
            responsive user experiences.
          </p>

          <p>
            Instead of building an entire interface as one large piece, React
            allows developers to divide the UI into small, reusable components.
            Each component can manage its own structure and behavior, making
            applications easier to build and maintain.
          </p>
        </div>
      </section>

      <section className="why-react">
        <div className="section-title">
          <p className="label">WHY REACT?</p>

          <h2>
            Why <span>Use React?</span>
          </h2>
        </div>

        <div className="why-grid">
          <div className="why-item">
            <p className="number">01</p>

            <h3>Reusable Components</h3>

            <p>
              Build reusable parts of an interface that make applications easier
              to develop and maintain.
            </p>
          </div>

          <div className="why-item">
            <p className="number">02</p>

            <h3>Interactive Interfaces</h3>

            <p>
              Create dynamic interfaces that respond smoothly to user actions
              and changing data.
            </p>
          </div>

          <div className="why-item">
            <p className="number">03</p>

            <h3>Single Page Applications</h3>

            <p>
              Build web applications that update content without requiring a
              full page reload.
            </p>
          </div>

          <div className="why-item">
            <p className="number">04</p>

            <h3>Flexible & Scalable</h3>

            <p>
              Create everything from simple websites to dashboards, e-commerce
              platforms, and complex web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="learn" id="learn">
        <div className="section-title">
          <p className="label">HOW REACT WORKS</p>

          <h2>
            Understand how React
            <span> builds interfaces.</span>
          </h2>
        </div>

        <div className="learn-list">
          <div className="learn-item">
            <span>01</span>

            <div>
              <h3>Components</h3>

              <p>
                React divides a user interface into small, reusable components.
              </p>
            </div>
          </div>

          <div className="learn-item">
            <span>02</span>

            <div>
              <h3>JSX</h3>

              <p>
                JSX allows you to write HTML-like structures inside JavaScript.
              </p>
            </div>
          </div>

          <div className="learn-item">
            <span>03</span>

            <div>
              <h3>Props</h3>

              <p>
                Props allow components to receive and share data with each
                other.
              </p>
            </div>
          </div>

          <div className="learn-item">
            <span>04</span>

            <div>
              <h3>State</h3>

              <p>
                State stores changing data and helps React update the interface.
              </p>
            </div>
          </div>

          <div className="learn-item">
            <span>05</span>

            <div>
              <h3>Events</h3>

              <p>
                React responds to actions such as clicks, typing, and form
                inputs.
              </p>
            </div>
          </div>

          <div className="learn-item">
            <span>06</span>

            <div>
              <h3>UI Updates</h3>

              <p>
                React updates the necessary parts of the interface when data
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="skills-content">
          <p className="label">WHAT CAN YOU BUILD?</p>

          <h2>
            Create modern
            <span> web applications with React.</span>
          </h2>

          <p>
            React can be used to build a wide range of interactive web
            experiences, from simple websites to complex applications with
            dynamic content and user interactions.
          </p>
        </div>

        <div className="skill-list">
          <div>
            <span>✓</span>
            Single Page Applications
          </div>

          <div>
            <span>✓</span>
            Interactive Websites
          </div>

          <div>
            <span>✓</span>
            E-Commerce Platforms
          </div>

          <div>
            <span>✓</span>
            Dashboards & Admin Panels
          </div>

          <div>
            <span>✓</span>
            Social & Community Apps
          </div>

          <div>
            <span>✓</span>
            Business Web Applications
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-title">
          <p className="label">WHERE REACT IS USED</p>

          <h2>
            Explore what you can
            <span> build with React.</span>
          </h2>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <span className="project-number">01</span>

            <h3>Websites</h3>

            <p>
              Create modern and interactive websites with reusable components
              and dynamic content.
            </p>

            <a href="#learn">Explore →</a>
          </div>

          <div className="project-card">
            <span className="project-number">02</span>

            <h3>Dashboards</h3>

            <p>
              Build data-driven dashboards with interactive charts, tables,
              filters, and dynamic updates.
            </p>

            <a href="#learn">Explore →</a>
          </div>

          <div className="project-card">
            <span className="project-number">03</span>

            <h3>E-Commerce</h3>

            <p>
              Develop shopping interfaces with products, categories, carts, and
              interactive user experiences.
            </p>

            <a href="#learn">Explore →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
