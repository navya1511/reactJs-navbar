import React from "react";
import {FaBars , FaTwitter} from 'react-icons/fa'
import {links , social } from './data'
import logo from './coding.jpg'


export default function NavBar(){
    const [showLinks , setShowLinks]=React.useState(false);
    const linksContainerRef=React.useRef(null);
    const linksRef=React.useRef(null);
    function toggleLinks(){
        setShowLinks(!showLinks);
    }
    React.useEffect(()=>{
        const linkHeights= linksRef.current.getBoundingClientRect().height;
        console.log(linkHeights);
        if(showLinks){
            linksContainerRef.current.style.height=`${linkHeights}px`;
        }
        else{
            linksContainerRef.current.style.height="0";
        }
    },[showLinks])
        return(
        <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
          </button>
          </div>
        
        <div className='links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
               {links.map((link)=>{
                   const {id , url , text}=link
                   return(
                       <li key={id}>
                        <a href={url}>{text}</a>
                        </li>
                   )

               })}
                
            </ul>
            
        </div>
        <ul className="social-icons">
            {social.map((item)=>{
                const {id , url , icon}=item
                return(
                    <li key={id}>
                     <a href={url}>{icon}</a>
                    </li>
                )
            })}
        </ul>
      </div>
    </nav>
    )
}