import React from 'react';
import './about.css'; // Make sure to create an accompanying CSS file

function AboutUs() {
  return (
    <div className="about-container">
      <header className="header">
        <div className="logo">SKILLOP</div>
        <nav>
          <button className="btn-signup">Sign up</button>
          <button className="btn-login">Log in</button>
        </nav>
      </header>
      <section className="about-section">
        <h1>About Us</h1>
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <h3>Fostering Student Empowerment</h3>
          <p>
            At Skillop, we believe in the transformative power of education
            and mentorship. Our mission is to empower college students
            by connecting them with experienced mentors and providing
            them with innovative tools to enhance their academic and
            professional journey.
          </p>
        </div>
        <div className="image-container">
          {/* Here you would include the image. Assuming you have an image named 'about-image.png' in your public folder */}
          <img src="/about-image.png" alt="Student empowerment" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;