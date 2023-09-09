import React from 'react';
import "./Skills.css";
import ProgressCard from './ProgressCard';
import Section from './Section';

const Skills = () => {
    return (
        <>
            <div className="skills_content" id='section'>
                <div className="heading">Skills</div>
                <div className="all-skills-info-container">
                    <Section subHeading ={"Programming Languages"}>
                        <ProgressCard image = './Skills image/python-logo.png'skill = "python" Progress = "85"/>
                        <ProgressCard image="./Skills image/javascript-icon.jpg" skill="javascript" Progress="85" />
                    </Section>
                    <Section subHeading={"Front-End"} state={" "}>

                        <ProgressCard image="./Skills image/HTML-CSS.jpg" skill="HTML, CSS" Progress="90" />
                        
                        <ProgressCard image="./Skills image/reactjs.png" skill="REACTJS" Progress="78" />
                    </Section>
                    <Section subHeading={"Back-End"} state = {"Currently Learning"}>

                        <ProgressCard image="./Skills image/njs.png" skill="NODEJS" Progress="60" />
                        <ProgressCard image="./Skills image/Express.png" skill="EXPRESSJS" Progress="15" />
                    </Section>
                    <Section subHeading={"Database"} state={"Currently Learning"}>

                        <ProgressCard image="./Skills image/Mdb.jpg" skill="Mongodb" Progress="15" />
                    </Section>

                </div >
            </div >

        </>
    )
}

export default Skills