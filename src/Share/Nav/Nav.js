import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
function Nav() {
  const navMenu = [
    { id: 1, link: "/", title: "Home", icon: <i className="bi bi-house-door"></i>, ms0: "ms-0", ms4: "ms-1" },
    { id: 2, link: "/about", title: "About", icon: <i className="bi bi-file-person"></i>, ms0: "ms-0", ms4: "ms-2" },
    { id: 3, link: "/portfolio", title: "Portfolio", icon: <i className="bi bi-bag-plus"></i>, ms0: "ms-0", ms4: "ms-3" },
    { id: 4, link: "/contact", title: "Contact", icon: <i className="bi bi-person-lines-fill"></i>, ms0: "ms-0", ms4: "ms-4" },
    // { id: 5, link: "/blog", title: "Blog", icon: <i className="bi bi-chat-right-quote"></i>, ms0: "ms-0", ms4: "ms-5" },
  ];
  const [color, setColor] = useState("Home")
  const [menuControl, setMenuControl] = useState(true)

  const handleClick = (title) => {
    setColor(title)
    setMenuControl(!menuControl)

  }
  const showAndHide = () => {
    setMenuControl(!menuControl)
    console.log(menuControl);

  }


  return (
    <div className='bar-container'>
      <div onClick={showAndHide} className="bar-body">
        <div className='bar-container'>
          <div className={`${menuControl ? 'bar' : "bar1 bar"}`}></div>
          <div className={`${menuControl ? 'bar' : "bar2 bar"}`}></div>
          <div className={`${menuControl ? 'bar' : "bar3 bar"}`}></div>
        </div>
      </div>
      <div className='position-relative ' style={{ height: "250px", overflow: "hidden", width: "200px" }}>
        <ul className={menuControl ? 'bar-unOrderList' : "bar-unOrderList-height"} >
          {navMenu.map((menu, ind) => <li onClick={() => handleClick(menu.title)} key={ind}>
            <Link  className={`${color === menu.title ? "activeColor" : "inActiveColor"}`}  to={menu.link}  >{menu.icon}
              <span className={`${menuControl ? menu.ms4 : menu.ms0}`}>
                {menu.title}
              </span>
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Nav