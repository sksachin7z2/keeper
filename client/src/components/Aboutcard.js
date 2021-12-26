import React from 'react'
import aboutme from './aboutme.jpg'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import github from './github.png'
import textutis from './textutils.JPG'
import iNotebook from './iNotebook.JPG'
import newsmonkey from './newsmonkey.JPG'
import Typewriter from 'typewriter-effect';
function Aboutcard() {
    return (
       <>
       <div data-aos="fade-right" className='p-3' >
       <div className="card mb-3 my-3"  style={{ maxWidth:"72vw",backgroundColor:"black"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={aboutme} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div style={{display:"flex",justifyContent:"center",color:"#ff004d",fontSize:"1.2rem",fontFamily:"courier",fontWeight:"bolder"}} className="card-body">
       
        <Typewriter
  options={{
    strings: ['Hello, My name is Sachin!', 'I am  new to development!','Learning new things everyday!'],
    autoStart: true,
    delay:70,
    loop: true,
  }}
/>

      </div>
      <div style={{color:"white",fontSize:"1rem",padding:"1rem",textAlign:"center"}} className="container">
          My name is Sachin Kumar Sharma.I am currently pursuing B.tech in Electronics and Communication Engineering from NIT Silchar. I am a passionate learner, technology enthusiast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti architecto ipsa ratione numquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate aspernatur sequi nemo eveniet repellendus maxime modi ea laborum repudiandae. Velit voluptas dolore quasi excepturi quisquam odio quis consectetur iste!
          </div>
          <div className='container text-center p-2'>
        <a href="https://www.facebook.com/profile.php?id=100035913851615" target="_blank" rel="noopener noreferrer"><img className='links' src={facebook} alt="facebook" width="20rem"/></a>&emsp;

       <a style={{color:"transparent"}} href="https://www.linkedin.com/in/sachin-sharma-92a78120a/" target="_blank" rel="noopener noreferrer"> <img className='links'src={linkedin} alt="linkedin" width="20rem"/></a>&emsp;

        <a href="https://github.com/sksachin7z2" target="_blank" rel="noopener noreferrer"><img className='links'src={github} alt="github" width="20rem"/></a>&emsp;
        </div>
        
    </div>
  </div>
</div>
</div>
<h2 style={{textAlign:"center",color:"#16b08d",fontFamily:"monospace",fontWeight:"bolder"}}>My Projects</h2>
<div data-aos="fade-left" className="card mb-3 my-3" style={{maxWidth:"72vw",backgroundColor:"black"}}>
  <img src={textutis}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title darkmode">Textutils&emsp;<a href="https://mytextutils-enhance.netlify.app/" target="_blank" rel="noopener noreferrer"><i style={{color:"aquamarine"}} className="fa fa-external-link " ></i></a></h5>
    <p className="card-text darkmode">Textutils is a simple text editor enabled with email extractor made with javascript</p>
   
  </div>
</div>
<div data-aos="fade-right" className="card mb-3 my-3" style={{maxWidth:"72vw",backgroundColor:"black"}}>
  <img src={iNotebook}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title darkmode">iNotebook&emsp;<a href="https://inotebook-prac.netlify.app/" target="_blank" rel="noopener noreferrer"><i style={{color:"aquamarine"}} className="fa fa-external-link " ></i></a></h5>
    <p className="card-text darkmode">iNotebook is a api enabled note saving utility where user can store their notes.It is build with MERN stack</p>
   
  </div>
</div>
<div data-aos="fade-left" className="card mb-3 my-3" style={{maxWidth:"72vw",backgroundColor:"black"}}>
  <img src={newsmonkey}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title darkmode">NewsMonkey &emsp;</h5>
    <p className="card-text darkmode text-center">Newsmonkey is a news fetching utility build with news api to get the latest news on category like science, bussiness, sports, health etc</p>
    
  </div>
</div>
     </>
    )
}

export default Aboutcard
