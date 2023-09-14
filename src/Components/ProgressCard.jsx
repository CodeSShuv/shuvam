import React from 'react'
import "./ProgressCard.css"
const ProgressCard = (props) => {
  return (
    <>
        <div className="progress-card card-container">
            <div className="pr-card-title">{props.skill? props.skill.toUpperCase(): ""}</div>
            <div className="card-image p-image-container" id='pr-card'>
                <img src={props.image} alt={`${props.skill} logo`} />
            </div>
            <div className={props.Progress? "progressbar":"progressbar hidden"}>
                <span className='progressbar-thumb'style={{width:props.Progress?+ props.Progress+"%":0 }}></span>
            </div>

        </div>
    </>
  )
}

export default ProgressCard