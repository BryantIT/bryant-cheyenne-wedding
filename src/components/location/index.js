import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import story1 from '../../images/events/img-1.jpg'
import story2 from '../../images/events/weddingtent.jpg'
import story3 from '../../images/events/wedding-reception.jpg'

import './style.css'

const Location = () => {
  return (
    <div id='event' className='event-section section-padding'>
      <Sectiontitle section={'When & Where'} />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='tabs-site-button'>
              <div className='event-tabs'>
                <div className='col-md-12 col-12'>
                  <div className='event-wrap'>
                    <div className='row'>
                      <div className='col-lg-5 col-md-12 col-12'>
                        <div className='event-img'>
                          <img src={story1} alt="" />
                        </div>
                      </div>
                      <div className='col-lg-7 col-md-12 col-12'>
                        <div className='event-text'>
                          <h3>Wedding Ceremony</h3>
                          <span>Saturday, October 23rd 2021, 3:00 PM-5:00 PM CST</span>
                          <span>105 Donegan Crossing Rd, Dickson TN</span>
                          <p>
                            The Main event begins at 3.  The ceremony will be held under a gazebo at the venue with plenty of sitting and standing room for all. Don't forget to come early so you can  visit Diagon Alley while you are here!{" "}
                          </p>
                          <div className='btn'>
                            <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1195.8461848659272!2d-87.47347587752628!3d36.089922070141625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864b23b80b777b3%3A0x40f9846cf96ae34a!2s105%20Donegan%20Crossing%20Rd%2C%20Dickson%2C%20TN%2037055!5e1!3m2!1sen!2sus!4v1604109563731!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='event-wrap'>
                    <div className='row'>
                      <div className='col-lg-7 col-md-12 col-12'>
                        <div className='event-text event-text-2'>
                          <h3>Wedding Reception</h3>
                          <span>Saturday, October 23rd 2021, 6:00 PM-10:00 PM CST</span>
                          <span>105 Donegan Crossing Rd, Dickson TN</span>
                          <p>
                            The wedding reception will begin shortly following the wedding ceremony.  It will be held, in true Harry Potter tradition, under a large tent just a few feet away from the ceremony.{" "}
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-12 col-12'>
                        <div className='event-img'>
                          <img src={story2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='event-wrap'>
                    <div className='row'>
                      <div className='col-lg-5 col-md-12 col-12'>
                        <div className='event-img'>
                          <img src={story3} alt="" />
                        </div>
                      </div>
                      <div className='col-lg-7 col-md-12 col-12'>
                        <div className='event-text'>
                        <h3>Wedding Dinner</h3>
                        <span>Saturday, October 23rd 2021, 6:00 PM-8:00 PM CST</span>
                        <span>105 Donegan Crossing Rd, Dickson TN</span>
                          <p>
                            A feast of dragon meat! Drinks providing by year one Hogwart's potion class....drink with caution.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Location
