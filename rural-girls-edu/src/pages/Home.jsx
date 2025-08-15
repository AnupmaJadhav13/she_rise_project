import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Computer Skills",
      description: "Learn fundamental computer operations, typing, and basic software usage.",
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Digital Literacy",
      description: "Master internet safety, online communication, and digital tools.",
      duration: "6 weeks",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Coding Fundamentals",
      description: "Introduction to programming concepts and basic coding skills.",
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Learn to create websites using HTML, CSS, and JavaScript.",
      duration: "12 weeks",
      level: "Intermediate"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Empowering Rural Girls Through Education</h1>
          <p>
            We believe every girl deserves access to quality education and digital skills. 
            Join us in bridging the digital divide and creating opportunities for rural communities.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2>Our Courses</h2>
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span className="duration">{course.duration}</span>
                  <span className="level">{course.level}</span>
                </div>
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Rural Girls Education</h2>
          <div className="about-content">
            <div className="about-description">
              <p>
                We are dedicated to empowering rural girls through education and digital literacy. 
                Our mission is to bridge the digital divide and create equal opportunities for girls 
                in rural communities to access quality education and develop essential skills for the future.
              </p>
            </div>
            
            <div className="about-grid">
              <div className="about-card">
                <h3>Our Mission</h3>
                <p>
                  To provide accessible, quality education and digital skills training to rural girls, 
                  enabling them to become confident, independent, and successful individuals who can 
                  contribute meaningfully to their communities and society.
                </p>
              </div>
              
              <div className="about-card">
                <h3>Our Vision</h3>
                <p>
                  A world where every rural girl has equal access to education and opportunities, 
                  regardless of their geographical location or economic background, creating a more 
                  inclusive and equitable society.
                </p>
              </div>
              
              <div className="about-card">
                <h3>What We Do</h3>
                <ul>
                  <li>Provide computer and digital literacy training</li>
                  <li>Offer coding and programming courses</li>
                  <li>Conduct life skills and leadership workshops</li>
                  <li>Support girls in pursuing higher education</li>
                  <li>Create mentorship and networking opportunities</li>
                </ul>
              </div>
            </div>
            
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Girls Empowered</p>
              </div>
              <div className="stat-item">
                <h3>15</h3>
                <p>Rural Communities</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Volunteer Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Rural Girls Edu</h3>
              <p>Empowering rural girls through education and digital literacy.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>Email: info@ruralgirlsedu.org</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: Rural Education Center</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Rural Girls Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 