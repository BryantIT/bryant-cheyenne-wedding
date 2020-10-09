
import React from 'react';
import {Animated} from "react-animated-css";
import classes from '../../css/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://res.cloudinary.com/dm1w2j7mu/video/upload/v1602278344/Harry_Potter_Intro_v2_hqkyf8.mp4"
    return (
      <div className="vedio-area" id="home">
          <div className={classes.Container} >
              <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>

              <div className={classes.Content}>
                <div className="slide-b">
                    <div className="slide-content">
                          <div className="slide-subtitle">
                              <h4>WE'RE GETTING MARRIED</h4>
                          </div>
                          <div className="slide-title">
                              <h2>Save Our Date</h2>
                          </div>
                          <div className="slide-text">
                              <p>October 21st 2021</p>
                          </div>
                          <Animated>
                              <div className="animated-circle"></div>
                          </Animated>
                      </div>
                </div>
              </div>
          </div>
      </div>
    )
}

export default BackgroundVideo
