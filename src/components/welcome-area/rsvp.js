import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Rsvp = () => {
  return (<div className="welcome-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="welcome-content">
            <h2>Welcome to our very magical wedding</h2>
            <p>We are so happy you are considering joining us on our big day!</p>
            <div className="btn">
              <Link to="/home">RSVP</Link>
            </div>
            <div className="btn">
              <Link to="/home">Location</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Rsvp;
