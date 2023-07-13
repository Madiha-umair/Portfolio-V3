import React, { useState, useEffect } from "react";
import aboutImage from '../assets/images/about.jpg';
import projectsImage from '../assets/images/projects.jpg';
import qualificationImage from '../assets/images/qualification.jpg';
import skillsImage from '../assets/images/skills.jpg';
import experienceImage from '../assets/images/experience.png';
import blogImage from '../assets/images/blog.jpg';
import messageImage from '../assets/images/message.jpg';
import logoImage from '../assets/images/logo.png';
import menuImage from '../assets/images/menu.png';
import menuTabletImage from '../assets/images/menu-tablet.png';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 530);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/"><img src={logoImage} alt="madiha signature" width="80" height="40" /></a>
      </h2>
      <h2 id="site-name-for-mobile">
        <a href="/">MU</a>
      </h2>
      {/* Display the desktop menu for larger screens */}
      <nav className="desktop-menu">
        <ul>
          <li>
            <a href="#about">
              <div id="aboutimg">
                <img src={aboutImage} alt="profile icon" width="30" height="30" />
                <div id="navbar-elements">About</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#projects">
            <div id="projectimg">
            <img src={projectsImage} alt="project icon" width= "30" height="30" />
            <div id="navbar-elements">Projects</div>
            </div>
            </a>
          </li>
          <li>
            <a href="#education">
            <div id="educationimg">
            <img src={qualificationImage} alt="education icon" width= "40" height="30" />
            <div id="navbar-elements">Education</div>
            </div>
            </a>
          </li>
          <li>
            <a href="#skills">
            <div id="skillimg">
            <img src={skillsImage} alt="skills icon" width= "30" height="30" />
            <div id="navbar-elements">Skills</div>
            </div>
            </a>
          </li>
          <li>
            <a href="#experience">
            <div id="experienceimg">
            <img src={experienceImage} alt="experience icon" width= "30" height="30" />
            <div id="navbar-elements">Experience</div>
            </div>
            </a>
          </li>
          <li>
            <a href="#blogs">
            <div id="blogimg">
            <img src={blogImage} alt="blog icon" width= "30" height="30" />
            <div id="navbar-elements">Blogs</div>
            </div>
            </a>
          </li>
          <li>
            <a href="#contactme">
            <div id="messageimg">
            <img src={messageImage} alt="skills icon" width= "30" height="30" />
            <div id="navbar-elements">Contact</div>
            </div>
            </a>
          </li>
        </ul>
      </nav>
      {/* Display the toggle button and mobile menu for smaller screens */}
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        {/* Display menu image based on screen size */}
        {isMobileMenu ? (
          <img src={menuImage} alt="menu symbol" width="40" height="40" />
        ) : (
          <img src={menuTabletImage} alt="menu symbol" width="40" height="40" />
        )}
      </div>
      {showMenu && (
        <nav className="mobile-menu">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Qualification</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contactme">Contact me</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
