import React from "react";
import githubLogo from "./images/download.jpeg"; 
import linkedinLogo from "./images/images.png"; 
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
            <p><img src={email} alt="Email" className="logo"/> arjunsinghbazal@gmail.com</p>
            <p><img src={phone} alt="Phone" className="logo"/> +917006973703</p>
            <p><img src={location} alt="Location" className="logo"/> Katra, Jammu and Kashmir</p>
          </div>
        </div>
      </header>
<div className="body">
    <div className="leftbody">
    <div className="skill box">
        <p className="bolder ">Skills</p>
        <div className="skills"><p className=" bold pad">ReactJS</p><p className=" bold pad">HTML</p><p className=" bold pad">CSS</p>
        <p className=" bold pad">JavaScript</p><p className=" bold pad">
        Java</p><p className=" bold pad">MUI</p><p className=" bold pad">BootStrap</p><p className=" bold pad">Git</p><p className=" bold pad">Github</p>
        <p className="bold pad">WebScrap.</p>
        </div>
        </div>
        <div className="intership box">
            <p className="bolder">Internships</p>
            <div><p className="bold">Frontend Developer</p>
            <p>Acciojobs, November 2022-2023</p>
            <ul>
            <li>Completed Software Development internship with proficiency in React.js,
             and HTML,CSS and Javascript</li>
<li>Successfully completed multiple projects that required expertise in various technologies.</li>
<li>Troubleshot issues quickly to deliver high-quality results.</li>
            </ul></div>
        </div>
        <div className="education box">
<p className="bolder">Eductaion</p>
<div className="section edu_margin">
<p className="bold">B.TECH in Computer Science Engineering  
</p>
<p>Pacific Institute of Technology • Udaipur, Rajasthan
</p>
<p className="blue">11/2020 (6.9 CGPA)</p>
<p>Successfully completed a rigorous 4-year program in CSE from Pacific Institute of Technology.</p>
</div>
<div className="section edu_margin">
<p className="bold">12th 
</p>
<p>Govt. Higher Secondary School Panthal, Katra , J&K
</p>
<p className="blue">06/2016 (66%)</p>
<p>Completed 12th in Non-Medical Science</p>
</div>
<div className="section edu_margin">
<p className="bold">10th 
</p>
<p>Shining Star High School Katra , J&K
</p>
<p className="blue">06/2014 (70%)</p>

</div>

        </div>  <div className="footer box">
    <div className="bolder">
    Extra Curricular Activities
    </div>
    <div>
<ul><li>Solved 500+ Java & JavaScript questions across
various platforms.
</li>
    <li>Participated in IIT Bombay X workshop and got a C programming completion certificate.
</li>
<li>Participated in IIT Roorkee workshop.
</li>
<li>Participated in intercollege Cricket Tournament</li>
<li>Participated in the cultural fest "parshantam" in college campus.
</li>
</ul>
    </div>
</div>
       
    </div>
    <div className="rigthbody">
        <div className="project box">
            <p className="bolder">Projects</p>
        <ul>   <li className="section">
                <p className="bold">
                    CryptoTracker
                </p>
                <p>CryptoTracker is the tracker you always needed.Compare different crypto currencies,
                look at their graphs prices.Search from the top 100 Crypto currencies
                 in real time and add then to
                 your watchlist aswell</p>
<p><strong>Technologies Used :-</strong> React JS, Material ui,
 Chart Js, Axios, React Router, Coingecko API, Framer motion , Toastify</p>
<div className="links">
<a href="https://crypto-steel.vercel.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
<a href="https://github.com/arjunsinghbazal/crypto" target="_blank" rel="noopener noreferrer">Repo Link</a></div>
            </li>
            <li className="section">
                <p className="bold">
                    Roshnee Eyewear Store
                </p>
                <p>Eyewear Ecommerce website where we can select best Eyewear and order that from store</p>
<p><strong>Tech Stack :-</strong> JSX,Reactjs</p>
<div className="links">
<a href="https://roshnee.vercel.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
<a href="https://github.com/arjunsinghbazal/Roshnee" target="_blank" rel="noopener noreferrer">Repo Link</a></div>
            </li>
            <li className="section">
                <p className="bold">
                    Live Green
                </p>
                <p>Indoor and Outdoor plants for Your place</p>
<p><strong>Tech Stack :-</strong>Reactjs,Toastify</p>
<div className="links">
<a href="https://roshnee.vercel.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
<a href="https://github.com/arjunsinghbazal/Roshnee" target="_blank" rel="noopener noreferrer">Repo Link</a></div>
            </li>
            <li className="section">
            
                <p className="bold">
                    Meshop. Shopping
                </p>
                <p>Fetching the API and get data from there after that user can search ,and see the item
                details in webpage and add to cart and also use local storage for validation and
accessing data from local storage</p>
<p><strong>Tech Stack :- </strong>HTML,CSS, Javascript,RestApi</p>
<div className="links">
<a href="https://arjunsinghbazal.github.io/meshop/" target="_blank" rel="noopener noreferrer">Project Link</a>
<a href="https://github.com/arjunsinghbazal/meshop" target="_blank" rel="noopener noreferrer">Repo Link</a></div>
            </li>
            <li className="section">
                <p className="bold">
                    DryFry
                </p>
                <p>Use local storage for 
accessing data from local storage. Fetching the API and get data from there after that user can search ,and see the item
                details in webpage and add to cart</p>
<p><strong>Tech Stack :- </strong>RestApi,JSX,Reactjs</p>
<div className="links">
<a href="https://dry-fry-kq3m-arjunsinghbazal.vercel.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
<a href="https://github.com/arjunsinghbazal/DryFry" target="_blank" rel="noopener noreferrer">Repo Link</a></div>
            </li></ul>
        </div>
    </div>
</div>
{/* <li>Demonstrated strong problem-solving skills and knowledge of data structures to design and implement efficient
solutions for complex programming challenges.</li> */}
    </div>
  );
  
};

export default Main;

