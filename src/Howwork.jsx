import React from 'react'
import "./howwork.css";
const Howwork = () => {
  return (
    <div>

      <section className="works">

        <p className="label">REACT PROCESS</p>

        <h2>
          How React <span>builds a website.</span>
        </h2>

        <div className="works-list">

          <div className="works-card">
            <h3>01</h3>
            <h4>Components</h4>
            <p>
              React divides a website into small reusable components.
            </p>
          </div>

          <div className="works-card">
            <h3>02</h3>
            <h4>JSX</h4>
            <p>
              JSX allows you to write HTML-like elements inside JavaScript.
            </p>
          </div>

          <div className="works-card">
            <h3>03</h3>
            <h4>Props</h4>
            <p>
              Props are used to pass data from one component to another.
            </p>
          </div>

          <div className="works-card">
            <h3>04</h3>
            <h4>State</h4>
            <p>
              State stores data that can change while the application runs.
            </p>
          </div>

          <div className="works-card">
            <h3>05</h3>
            <h4>Events</h4>
            <p>
              Events allow React to respond to actions such as clicks.
            </p>
          </div>

          <div className="works-card">
            <h3>06</h3>
            <h4>UI Updates</h4>
            <p>
              React updates the user interface when the application data changes.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Howwork
