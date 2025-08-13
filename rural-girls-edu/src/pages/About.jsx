import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <h1>About Rural Girls Education</h1>
          <p className="about-description">
            We are dedicated to empowering rural girls through accessible, quality education and technology.
          </p>
          
          <div className="about-sections">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                To provide every rural girl with access to quality education, regardless of geographical barriers. 
                We believe that education is the key to unlocking potential and creating opportunities for a better future.
              </p>
            </div>
            
            <div className="about-section">
              <h2>Our Vision</h2>
              <p>
                A world where every rural girl has the tools, resources, and support she needs to pursue her dreams 
                and build a bright future for herself and her community.
              </p>
            </div>
            
            <div className="about-section">
              <h2>What We Do</h2>
              <p>
                We provide online learning platforms, digital literacy training, and community support programs 
                designed specifically for rural girls. Our courses cover essential subjects like mathematics, 
                science, language skills, and digital technology.
              </p>
            </div>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <h3>2000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Courses Available</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 