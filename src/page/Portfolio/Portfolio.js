import React from 'react'
import Nav from '../../Share/Nav/Nav'
import "./portfolio.css"
function Portfolio() {
    const portfolio = [
        {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-1.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-9.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-2.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-3.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-4.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-5.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-6.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-7.jpg",
            title: "Welcome"
        }, {
            id: 1,
            img: "https://istanbul-react.vercel.app/img/projects/project-8.jpg",
            title: "Welcome"
        },
    ]
    return (
        <div style={{ backgroundColor: "#222222",height:"100vh" }} >
            <div className='portfolio pt-5'>
                <h1 className='text-warning text-center'><span className='text-white'>MY</span> PORTFOLIO</h1>
                <p className='text-white text-center my-5'>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.</p>

                <div className='portfolio-container p-4'>

                    {portfolio.map((post, ind) => {
                        return <div key={ind} className=' portfolio-container-1'>
                            <div className='text-white portfolio-post'>
                                <img src={post.img} alt="" />
                                <div className='post-title'>
                                    <span className='fs-2  '>{post.title}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
            <div className='position-absolute' style={{ top: "30px", color: "white", left: "30px" }}>
          <Nav />
        </div>
        </div>
    )
}

export default Portfolio