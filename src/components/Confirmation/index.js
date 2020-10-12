import React, { useState, useEffect, Fragment } from 'react'
import Sectiontitle from '../section-title'
import HPvector from '../../images/couple/HPvector.png'
import Header from '../Header'

export default function Confirmation({name, email, rsvp, events, notes}) {
  console.log('NAME NAME NAME', name)
  const [shouldRender, setShouldRender] = useState(false)
  const [rsvpCount, setRsvpCount] = useState(rsvp)

  useEffect(() => {
    if (rsvpCount >= 1) {
      setShouldRender(true)
    } else {
      setShouldRender(false)
    }
  }, [rsvpCount])

  return (
    <Fragment>
      <Header />
      <div id="couple" className="about-wrap">
      <div className="couple-area section-padding">
        <Sectiontitle section={'RSVP'}/>
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-text">
                    {
                      shouldRender ?
                      <div className="couple-content">
                        <h3>Thank you {name} for RSVPing</h3>
                      <p>You should receive a message from us at {email} very soon.  We look forward to seeing you and your +{rsvp} {events}!</p>
                  </div> :
                  <div className="couple-content">
                    <h3>Thank you {name} for RSVPing</h3>
                  <p>You should receive a message from us at {email} very soon.  We look forward to seeing you {events}!</p>
                  </div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <img src={HPvector} alt="thumb"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
)
}
