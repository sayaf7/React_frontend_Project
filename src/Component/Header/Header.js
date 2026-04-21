import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';


function Header() {
  let navitems=[{id:1,
    name:"About",
    value:'/about'
  },
  {
    id:2,
    name:"Work",
    value:'/work',
  },
  {
    id:3,
    name:"Contact",
    value:'/contact'
  }];

  return (
    <div className="head-nav">
            <div className="logo"><h2>Logo</h2></div>
            <div className="menu">
              {
               navitems.map((i) =>(
               <NavLink to={i.value} className={"about"}> <h4>{i.name}</h4> </NavLink>


               ))
              }

                {/* <h4>About</h4>
                <h4>Work</h4>
                <h4>Contact</h4> */}
            </div>
        </div>
  );
}

export default Header;

