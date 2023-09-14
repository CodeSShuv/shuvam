import React from 'react';
import "./Offcanvas.css";

const Offcanvas = (props) => {
    
  return (
    <>
        <div className={`off-canvas ${props.state}`}>
            <nav className='off-canvas-nav'>
                
                <ul className='nav-social-links'>
                <li>
                        <a href="#home">
                            <i class="fa fa-2x fa-home" aria-hidden="true"></i> <span>Home</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <i class="fa-solid fa-briefcase"/><span>Projects</span>
                        </a>
                    </li>
                  
                    <li>
                    <a href="#section">
                            <i class="fa fa-2x fa-code" aria-hidden="true"></i> <span>Skills</span> 
                        </a>
                    </li>
                </ul>
                
                <ul  className='nav-social-links'>
                    <div>Social Links</div>
                    <li>
                        <a href="https://github.com/CodeSShuv" target='_blank' rel='noreferrer'>
                            <i class="fa fa-2x fa-github" aria-hidden="true"></i> <span>Github</span> 
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i class="fa fa-2x fa-instagram" aria-hidden="true"></i> <span>Instagram</span> 
                        </a>
                    </li>
                    <li>
                        <a href="mailto:contactshuvam1@gmail.com">
                            <i class="fa fa-2x fa-envelope"></i><span>contactshuvam1@gmail.com</span>
                        </a>
                    </li>
                </ul>
            
            </nav>
        </div>
    </>
  )
}

export default Offcanvas