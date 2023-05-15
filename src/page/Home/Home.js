import React from 'react'
import Nav from '../../Share/Nav/Nav'
import "./home.css"


function Home() {
  return (
    <div className='main-body' >
      <div className='body '>
        <div className='body-container'>
          <div>
            <img className='hero-img' src="https://i.ibb.co/KGVH4Hw/rajiul-islam-removebg-preview.png" alt="" />
          </div>
          <div>
            <p style={{ fontSize: "16px" }}>HI THERE !</p>
            <h1>I AM <span style={{ color: "#ca8d08" }}>WEB DEVELOPER</span></h1>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <div>
              <button className='button  fs-5'><i className="mx-2 bi bi-person"></i>MORE ABOUT ME</button><button className='button fs-5 mx-2'><i className="mx-2 bi bi-briefcase"></i>PORTFOLIO</button>
            </div>
          </div>
        </div>
      
      </div>
      
     
      
      <div className='position-absolute' style={{ top: "30px", color: "white", left: "30px" }}>
          <Nav />
        </div>
    </div>
  )
}

export default Home