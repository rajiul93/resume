import React from 'react'
import Nav from '../../Share/Nav/Nav'
import "./Contact.css"
function Contact() {
    return (
        <div style={{backgroundColor:"#222222",height:"100vh"}}>
            <div className='contact pb-5'>
                <div>
                    <h1 className='contact-title'>GET <span className='text-warning'>IN TOUCH</span></h1>
                    <p className='text-center text-white'>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>
                    <div className='contact-container'>
                        <div className='content-container-1 mt-5'>
                            <ul className='text-white fs-5'>
                                <li>
                                    <label className='text-warning' htmlFor="">Phone</label>
                                    <span>+88 01986570093</span>
                                </li>
                                <li>
                                    <label className='text-warning' htmlFor="">Email</label>
                                    <span>rajiulrayhan@gmail.com</span></li>
                                <li>
                                    <label className='text-warning' htmlFor="">facebook</label>
                                    <span><a className='text-white text-decoration-none' href="https://www.facebook.com/mohammad.rajiulislam/"> Facebook</a></span></li>

                                <li>
                                    <label className='text-warning' htmlFor="">gitHub</label>
                                    <span><a className='text-white text-decoration-none' href="https://github.com/rajiul93"> gitHub</a></span></li>
                            </ul>
                        </div>
                        <div className='content-container-2 mt-5'>
                            <p className='fs-5'>
                                If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
                            </p>
                            <form >
                                <div className='from-container'>
                                    <input type="text" placeholder='Your Name' />
                                    <input type="text" placeholder='Your Email' />
                                </div>
                                <div className='from-container-2'>
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Opinion'></textarea>
                                </div>
                                <input className='bg-warning mt-4' type="submit" />
                            </form>
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

export default Contact
