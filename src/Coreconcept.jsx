import React from "react";
import "./coreconcept.css";

const CoreConcept=()=> {
  return (
    <div>
      <section className="concepts">
        <p className="label">REACT FUNDAMENTALS</p>

        <h2>
          Important concepts to <span>learn.</span>
        </h2>

        <div className="concept-list">
          <div className="concept-card">
            <h3>01</h3>
            <h4>Components</h4>
            <p>Learn how to create reusable parts of a React application.</p>
          </div>

          <div className="concept-card">
            <h3>02</h3>
            <h4>JSX</h4>
            <p>Learn how to write HTML-like code inside JavaScript.</p>
          </div>

          <div className="concept-card">
            <h3>03</h3>
            <h4>Props</h4>
            <p>Learn how to pass data from one component to another.</p>
          </div>

          <div className="concept-card">
            <h3>04</h3>
            <h4>State</h4>
            <p>Learn how to manage changing data in your application.</p>
          </div>

          <div className="concept-card">
            <h3>05</h3>
            <h4>Events</h4>
            <p>Learn how to handle user actions like clicks and forms.</p>
          </div>

          <div className="concept-card">
            <h3>06</h3>
            <h4>Hooks</h4>
            <p>Learn how to use features like useState and useEffect.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreConcept;
