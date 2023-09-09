import React from 'react';
import "./section.css";

const Section = (props) => {
    return (
        <>
            <div className="Section-container">
                <div className="Section-cards-container">
                    <h3 className='sub-heading'>{props.subHeading}
                    <span className='notify'> {props.state === undefined || null ? "":props.state }</span></h3>
                    
                    <div className="cards">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section