import React from 'react';
import "./home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
 
    return (
        <>
            <div className='home-container' id='home'>
                <div className="home-content">
                    <div className="profile-image">
                        <img src="./profiles/pas-me-f.jpg" alt="" />
                    </div>
                    <div className="intro">
                        <div className="description"> <span>Hi!</span> <p>My name is Shuvam Gautam.</p></div>
                        <div className="animated-description">
                            I am a <div className='animation'>
                                <Typewriter
                                    options={{
                                        strings: ["Programmer." ,"Student."],
                                        autoStart: true,
                                        loop:true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home