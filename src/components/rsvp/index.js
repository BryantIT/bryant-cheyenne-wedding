import React, { useState, useEffect } from 'react';
import Sectiontitle from '../section-title'
import Confirmation from '../Confirmation'
import firebase from '../../firebase'
import './style.css'

export default function Rsvp () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rsvp: '',
    events: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [confirmationData, setConfirmationData] = useState({
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
    e.preventDefault()
    const name = formData.name
    const email = formData.email
    const rsvp = formData.rsvp
    const events = formData.events
    const notes = formData.notes
    firebase
    .firestore()
    .collection('guests')
    .add({
      name,
      email,
      rsvp,
      events,
      notes
    })
    .then(() => {
      setConfirmationData({
        name: name,
        email: email,
        rsvp: rsvp,
        events: events,
        notes: notes
      })
    })
    .then(() => {
      setFormData({
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: ''
      })
    })
    setSubmitted(true)
  }

    return (
      submitted ?
      <Confirmation
        name={confirmationData.name}
        email={confirmationData.email}
        rsvp={confirmationData.rsvp}
        events={confirmationData.events}
        notes={confirmationData.notes}
      /> :
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
                    <option value="In Spirit">In Spirit</option>
                  <option value="In Person">In Person</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-12">
                    <textarea className="contact-textarea" value={formData.notes} onChange={handleChange} placeholder="Message" name="notes"></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">RSVP</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
