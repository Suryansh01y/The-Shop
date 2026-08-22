import { useState } from "react";
import React from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-page">
      <div className="section-heading simple-heading">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h1>Get in touch</h1>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" placeholder="Enter your name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Enter your email" required />
        </label>

        <label>
          Message
          <textarea
            placeholder="Write your message..."
            rows="6"
            required
          />
        </label>

        <button className="primary-btn" type="submit">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Message submitted successfully (demo).
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;