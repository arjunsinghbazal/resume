import React from "react";
import githubLogo from "./images/download.jpeg"; // Replace with the actual path to your GitHub logo image
import linkedinLogo from "./images/images.png"; // Replace with the actual path to your LinkedIn logo image
import phone from "./images/phone.png";
import location from "./images/location.png";
import email from "./images/email.png";


const Main = () => {
  return (
    <div className="container">
      <header>
        <div className="header-left">
          <h1>Arjun Singh</h1>
          <div className="logo-links">
            <a  href="https://github.com/arjunsinghbazal" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" className="logo" /> Github
            </a>
            <a className="a" href="https://www.linkedin.com/in/arjunsinghbazal/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="contact-info">
            <p><img src={email} alt="Email" className="logo"/> arjunsinghbazal@email.com</p>
            <p><img src={phone} alt="Phone" className="logo"/> +917006973703</p>
            <p><img src={location} alt="Location" className="logo"/> Katra, Jammu and Kashmir</p>
          </div>
        </div>
      </header>
<div className="body">
    <div className="leftbody">  <div className="project box">
            <p className="bolder">Projects</p>
            <div className="section">
                <p className="bold">
                    Meshop. Shopping
                </p>
                <p>Fetching the API and get data from there after that user can search ,and see the item
                details in webpage and add to cart and also use local storage for validation and
accessing data from local storage</p>
<p>Tech Stack :- HTML,CSS, Javascript,RestApi</p>
<p>Role: Software Developer</p>
<a href="https://arjunsinghbazal.github.io/meshop/" target="_blank" rel="noopener noreferrer">Go to My Website</a>
            </div>
            <div className="section">
                <p className="bold">
                    DryFry
                </p>
                <p>Use local storage for 
accessing data from local storage. Fetching the API and get data from there after that user can search ,and see the item
                details in webpage and add to cart</p>
<p>Tech Stack :- RestApi,JSX,Reactjs</p>
<p>Role: Software Developer</p>
<a href="https://dry-fry-kq3m-arjunsinghbazal.vercel.app/" target="_blank" rel="noopener noreferrer">Go to Website</a>
            </div>
            <div className="section">
                <p className="bold">
                    Roshnee Eyewear Store
                </p>
                <p>Eyewear Ecommerce website where we can select best Eyewear and order that from store</p>
<p>Tech Stack :- JSX,Reactjs</p>
<p>Role: Web Developer</p>
<a href="https://roshnee.vercel.app/" target="_blank" rel="noopener noreferrer">Go to Website</a>
            </div>
        </div>
    <div className="skill box">
        <p className="bolder ">Skills</p>
        <div><p className=" bold pad">HTML</p><p className=" bold pad">CSS</p><p className=" bold pad">Javascript</p>
        <p className=" bold pad">
        Reactjs</p><p className=" bold pad">Java</p><p className=" bold pad">Git/GitHub</p><p className="bold">WebScraping</p></div>
        </div>
        <div className="intership box">
            <p className="bolder">Internships</p>
            <div><p className="bold">Frontend Developer</p>
            <p>Acciojobs, November 2022-2023</p>
            <ul>
            <li>Completed Software Development internship with proficiency in React.js, and HTML,CSS and Javascript</li>
<li>Demonstrated strong problem-solving skills and knowledge of data structures to design and implement efficient
solutions for complex programming challenges.</li><li>Successfully completed multiple projects that required expertise in various technologies.</li>
<li>Troubleshot issues quickly to deliver high-quality results.</li>
            </ul></div>
        </div>
        <div className="education box">
<p className="bolder">Eductaion</p>
<div className="section">
<p className="bold">B.TECH in Computer Science Engineering
</p>
<p>Pacific Institute of Technology • Udaipur, Rajasthan
</p>
<p>11/2020</p>
<p>Successfully completed a rigorous 4-year program in CSE from Pacific Institute of Technology.</p>
</div>
<div className="section">
<p className="bold">12th
</p>
<p>Govt. Higher Secondary School Panthal, Katra , J&K
</p>
<p>2016</p>
<p>Completed 12th in Non-Medical Science</p>
</div>
<div className="section">
<p className="bold">10th
</p>
<p>Shining Star High School Katra , J&K
</p>
<p>06/2014</p>
</div>
        </div>
    </div>
</div>
<div className="footer box">
    <div className="bolder">
    Extra Curricular Activities
    </div>
    <div>
<ul>
    <li>Participated in IIT Bombay X workshop and got a C programming completion certificate.
</li>
<li>Participated in IIT Roorkee workshop.
</li>
<li>Participated in intercollege Football Tournament.</li>
<li>Participated in the cultural fest "parshantam" in college campus.
</li>
</ul>
    </div>
</div>
    </div>
  );
};

export default Main;

