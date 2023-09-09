import React from 'react'
import "./ProgressCard.css"
const ProgressCard = (props) => {
  return (
    <>
        <div className="progress-card card-container">
            <div className="pr-card-title">{props.skill.toUpperCase()}</div>
            <div className="card-image p-image-container" id='pr-card'>
                <img src={props.image} alt={`${props.skill} logo`} />
            </div>
            <div className="progressbar">
                <span className='progressbar-thumb'style={{width:props.Progress +"%" }}></span>
            </div>

        </div>
    </>
  )
}

export default ProgressCard