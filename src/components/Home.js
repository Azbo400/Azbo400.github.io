import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import UserNavbar from './Navbar';
import ProjectBlock from './ProjectBlock';
import scrollToElement from 'scroll-to-element';
import Blog from './Blog';
import SocialMediaIcons from './SocialMediaIcons';
import Contact from './Contact';
import VerticalSocialMediaIcons from './VerticalSocialMediaIcons';
import MediaQuery from 'react-responsive';
import Announcement from './Announcement';

class Home extends Component {
  render() { 
    return (  
      <div>
        <Announcement />
        <UserNavbar />
        <div className="landing-page">
          <div className="landing-page-text">
            <p><strong>Hello,</strong> my name is <em className="highlight"> Ryan Arnouk</em> and I'm an aspiring software developer.</p>  
            <SocialMediaIcons style={{marginRight: '10%'}}/>
          </div>
          <div style={{position: 'absolute', left: '50%', bottom: 14}}>
            <div style={{color: 'white', position: 'relative', left: '-50%', textAlign: 'center', cursor: 'pointer'}} onClick={() => scrollToElement('.about', {
                duration: 700
              })}>
              <p style={{fontSize: 22, margin: 0}}>Read More</p>
              <FontAwesome name='caret-down' size='2x' style={{left: '50%'}}/> 
            </div>
          </div> 
        </div>
        <div className="about">
          <h3 style={{fontSize: 18, color: 'grey', margin: 0}}>ABOUT ME</h3>
          <h1 style={{marginBottom: 13, fontSize: 25}}>Hi, I'm Ryan.</h1>
          <p style={{fontSize: 18}}>I am a high school student who is passionate about computer programming. Specializing in web development and JavaScript, I have been developing applications and websites for about 5 years. While not working on web development, I enjoy mobile app development with React Native, programming with Python, and machine learning.   
          </p>
          <hr />
          <ul style={{listStyleType: 'none', width: '40%  ', padding: 0}}>
            <li>Passionate Learner</li>
            <hr />
            <li>Interest in Computers and Hardware</li>
            <hr />
            <li>Always Working to Improve</li>
            <hr />
          </ul>
        </div>
        <div className="projects">
          <div className="inside-project">
            <h3 style={{fontSize: 18, color: 'grey', margin: 0}}>PROJECTS</h3>
            <h1 style={{marginBottom: 13, fontSize: 25, color: 'white'}}>What I am currently up too.</h1>
            <div className='square-container'>
              <ProjectBlock source='/img/mywebsite.png' info='I developed this personal website using React.js. Previous iterations of my personal web page have been made with Gatsby.' url='https://github.com/ryanarnouk/ryanarnouk.github.io'/>
              <ProjectBlock source='/img/codepen.png' info='I have completed many front and back-end freeCodeCamp projects on my GitHub and on my Codepen.'
               url='https://codepen.io/azbo400/pens/popular/'/>
              <ProjectBlock source='/img/react-redux-authentication.png' info='React Redux Authentication Biolerplate is a biolerplate application I developed that allows users to create accounts, login, logout, etc using Redux and JSON web tokens.' url='https://github.com/ryanarnouk/react-redux-authentication-boilerplate'/>
              <ProjectBlock source='/img/discover-machine-learning.png' info='Discover Machine Learning is an web app introducing machine learning to students and kids lacking a computer science background. The idea is to introduce the ever growing world of machine learning to kids.' url='http://discover-machinelearning.com'/>
              <ProjectBlock source='/img/blogapp.png'  info='My blog app is where I occasionally write articles about my programming life, tutorials, and what I am currently up too.' url='http://ryanarnouk.github.io/Blog'/>
              <ProjectBlock source='/img/github.png' info='You can check out the rest of my projects on my GitHub page.' url='https://github.com/ryanarnouk/'/>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3 style={{fontSize: 18, color: 'grey', margin: 0}}>SKILLS</h3>
          <h1 style={{marginBottom: 13, fontSize: 25}}>What I specialize in.</h1>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node JS</li>
            <li>Python</li>
            <li>WordPress</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="blog">
          <div className="blog-text">
            <h3 style={{fontSize: 18, color: 'grey', margin: 0}}>BLOG</h3>
            <h1 style={{marginBottom: 13, fontSize: 25}}>What I am Currently Writing About.</h1>
            <Blog />
            <p>Read more of my articles on my blog page <a href="http://ryanarnouk.github.io/Blog">here</a></p>
          </div>
        </div>
        <div className="contact">
          <div className="contact-text">
            <h3 style={{fontSize: 18, color: 'grey', margin: 0}}>CONTACT</h3>
            <h1 style={{marginBottom: 13, fontSize: 25}}>Get in touch with me.</h1>
            <div style={{display: 'flex'}}>
              <Contact />
              <MediaQuery minWidth={868}>
                <div className="vl"></div>
                <VerticalSocialMediaIcons />
              </MediaQuery>
            </div>
          </div>
        </div>
        <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
         <div>
          <h3 style={{fontSize: 24, color: 'white', marginBottom: 15}}>Stay in touch with me.</h3>
          <SocialMediaIcons />
           <p style={{color: 'white', marginTop: 20}}>Developed by Ryan Arnouk 2019</p>
        </div>
        </footer>
      </div>
    );
  }
}
 
export default Home;