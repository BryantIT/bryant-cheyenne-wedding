import React, { Component, useState, useEffect } from 'react';
import Sectiontitle from '../section-title'
import firebase from '../firestore'
import './style.css'

export default function Rsvp () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rsvp: '',
    events: '',
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  console.log('HANDLE CHANGE', formData)



  const handleSubmit = (e) => {
    e.preventDefault();

  }

    return (
      <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <Sectiontitle section={'Be Our Guest'}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <form onSubmit={handleSubmit}>
                <div className="contact-form form-style">
                  <div className="col-12 col-sm-12">
                    <input type="text" value={formData.name} onChange={handleChange} placeholder="Your Name*" id="fname" name="name"/>
                  </div>
                  <div className="col-12  col-sm-12">
                    <input type="text" placeholder="Your Email*" onChange={handleChange} value={formData.email} id="email" name="email"/>
                  </div>
                  <div className="col col-sm-12">
                    <select className="form-control" onChange={handleChange} value={formData.rsvp} name="rsvp">
                      <option disabled="disabled" value="">Number Of rsvp*</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="col col-sm-12">
                    <select className="form-control" onChange={handleChange} value={formData.events} name="events">
                      <option disabled="disabled" value="">I Am Attending*</option>
                      <option value="1">Al events</option>
                      <option value="2">Wedding ceremony</option>
                      <option value="3">Reception party</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-12">
                    <textarea className="contact-textarea" value={formData.notes} onChange={handleChange} placeholder="Message" name="notes"></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">Send Invitation</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
