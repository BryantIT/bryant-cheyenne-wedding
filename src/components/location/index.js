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
