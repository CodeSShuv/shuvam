import React , {useContext} from 'react';
import './navabar.css';
import { CanvasContext } from '../App';


const Navbar = (props) => {
  const canvas = useContext(CanvasContext);
  return (
    <nav className="nav-bar">
      <div className="hamburger-menu">
        <button className='nav-button b-hover' onClick={props.method}>
          <div className={`top-bottom-menu-design b-hover ${canvas?"oncanvas":null}-top`}></div>
          <div className={`middle-menu-design b-hover ${canvas?"oncanvas":null}-middle`}></div>
          <div className={`top-bottom-menu-design b-hover ${canvas?"oncanvas":null}`}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar