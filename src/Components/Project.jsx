import React from 'react'
import "./Project.css"
import Section from './Section';
import ProgressCard from './ProgressCard';

const Project = () => {
  return (
    <>

      <div className="project_content" id='project'>
        <div className="heading">Projects</div>
        <div className="all-project-info-container">
          <Section subHeading = {"HTML, CSS, JS"}>
            <a href="codesshuv.github.io/form-validation">

              <ProgressCard image = './project image/form validation.png' skill = "Form-Validation"/>
            </a>

              <ProgressCard image = './project image/clock.png' skill = "Digital Clock"/>
          </Section>
          <Section subHeading = {"REACTJS "}>
            <a href="codesshuv.github.io/Portfolio-site">

            <ProgressCard image = {""} skill = {"Portfolio Site"}/>
            </a>
            <a href="codesshuv.github.io/tic-tac-toe">

            <ProgressCard image = {"./project image/tictactoe.png"} skill = {"Tic Tac Toe"}/>
            </a>

          </Section>
          </div>
          </div>

        </>
        )
}

        export default Project;
