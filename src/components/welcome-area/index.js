import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Welcome = () => {
  return (<div className="welcome-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="welcome-content">
            <h2>Welcome to our very magical wedding</h2>
            <p>We are so happy you are considering joining us on our big day!</p>
            <div className="btn">
              <Link to="/rsvp">RSVP</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Welcome;
