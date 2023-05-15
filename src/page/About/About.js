import React from 'react'
import Nav from '../../Share/Nav/Nav'
import "./about.css"

function About() {
    return (
        <div className='about'>
            <div className='about-title'>
                <div className='mx-auto'>
                    <h1 className='text-white text-center' style={{ fontWeight: "900" }}>ABOUT <span style={{ color: "#ca8d08" }}>ME</span></h1>
                    <p className='text-white text-center'>---I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.--- </p>
                </div>
            </div>

            <div className='about-personal-info'>
                <div className=''>
                    <div className='info-image'>
                        <img className='img-fluid' style={{ width: "100%", transform: "translate(-20px, -20px)" }} src="https://i.ibb.co/n7z2c7k/50924375-2181064765480912-7789431655294304256-n.jpg" alt="" />
                    </div>
                </div>


                <div className='info-profile'>
                    <div className='info-profile-details'>
                        <div className=' '><p>First Name</p> <p> MD Rajiul</p></div>
                        <div className=' '><p>Last Name </p> <p>Rayhan</p></div>
                        <div className=' '><p>Birthdate</p> <p>14 aug 1995</p></div>
                        <div className=' '><p>Nationality</p> <p>Bangladeshey</p></div>
                        <div className=' '><p>Experience</p> <p>3 years</p></div>
                        <div className=' '><p>Address</p> <p>Khulna</p></div>
                        <div>
                            <button className='button mt-3 fs-5'>DOWNLOAD MY CV <i className="bi bi-arrow-down-circle-fill "></i></button>
                        </div>
                    </div>

                    <div className='info-profile-details'>
                        <div className=' '><p>Freelance</p> <p>Available</p></div>
                        <div className=' '><p>Langages</p> <p>English</p></div>
                        <div className=' '><p>Phone</p> <p>+88 01986570093</p></div>
                        <div className=' '><p>Email</p> <p>you@you.com</p></div>
                        <div className=' '><p>Skype</p> <p>daria.taylor</p></div>
                        <div className=' '><p>Dribbble</p> <p>taylor.dribbble</p></div>
                    </div>
                </div>


            </div>
            <div className='w-100 bg-secondary mt-5 mb-5' style={{ height: ".1px" }}></div>

            <div className="div">
                <div className='personal_container'>
                    <div className="education-container">
                        <h2 className='text-light text-center '>Education</h2>
                        <div className="education">
                            <span><i className="text-white fs-4 bi bi-1-circle"></i></span>
                            <div className='education-1 mt-4'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>Programming</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>As a Front End Web Developer, I specialize in using HTML, CSS, Bootstrap, JavaScript, and React to create visually appealing and user-friendly websites. I collaborate with designers and back-end developers to bring projects to life and ensure a seamless user experience.
                                    2020-2023</p>
                            </div>
                        </div>
                        <div className="education mt-4">
                            <span><i className="text-white fs-4 bi bi-2-circle"></i> </span>
                            <div className='education-1'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>BSc</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>
                                    World University of Bangladesh
                                    ( Electrical and Electronic Engineering )
                                    2017 to 2021
                                </p>
                            </div>
                        </div>
                        <div className="education mt-4">
                            <span><i className="text-white fs-4 bi bi-3-circle"></i></span>
                            <div className='education-1'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>Diploma</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>
                                    Mangrove Institute of science & Technology.
                                    (Electrical)
                                    2013-2017
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="education-container">
                        <h2 className='text-light text-center '>Skill</h2>
                        <div className="education">
                            <span><i className="text-white fs-4 bi bi-1-circle"></i></span>
                            <div className='education-1 mt-4'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>HTML</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</p>
                            </div>
                        </div>
                        <div className="education mt-4">
                            <span><i className="text-white fs-4 bi bi-2-circle"></i> </span>
                            <div className='education-1'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>Css & Bootstrap</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version of Bootstrap.</p>
                            </div>
                        </div>
                        <div className="education mt-4">
                            <span><i className="text-white fs-4 bi bi-3-circle"></i></span>
                            <div className='education-1'>
                                <h6 className='fs-5 text-warning mt-0 mb-0 ms-3'>Javascript & React</h6>
                                <p className='fs-5 text-white mt-0 mb-0 ms-3'>
                                    Javascript == JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.
                                    React == The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills"></div>
            <div className='position-absolute' style={{ top: "30px", color: "white", left: "30px" }}>
          <Nav />
        </div>
        </div>
    )
}

export default About
