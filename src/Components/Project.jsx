import React from 'react'
import "./Project.css"
import Section from './Section';
import ProgressCard from './ProgressCard';

const Project = () => {
  return (
    <>

      <div className="project_content" id='projects'>
        <div className="heading">Projects</div>
        <div className="all-project-info-container">
          <Section subHeading = {"HTML, CSS, JS"}>
            <a href="https://codesshuv.github.io/js-form-validation/">

              <ProgressCard image = './project image/form validation.png' skill = "Form-Validation"/>
            </a>

              <ProgressCard image = './project image/clock.png' skill = "Digital Clock"/>
          </Section>
          <Section subHeading = {"REACTJS "}>
            <a href="https://codesshuv.github.io/Portfolio-site/">

            <ProgressCard image = {"./project image/portfolio.png"} skill = {"Portfolio Site"}/>
            </a>
            <a href="https://codesshuv.github.io/tic-tac-toe/">

            <ProgressCard image = {"./project image/tictactoe.png"} skill = {"Tic Tac Toe"}/>
            </a>

          </Section>
          </div>
          </div>

        </>
        )
}

        export default Project;
