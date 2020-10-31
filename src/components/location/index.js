import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import story1 from '../../images/events/img-1.jpg'
import story2 from '../../images/events/img-2.jpg'
import story3 from '../../images/events/img-3.jpg'

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
                          <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                          <span>256 Apay Road,Califonia Bong, London</span>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal It is a
                            long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal{" "}
                          </p>
                          <div className="btn">
                            <Link to="/">Location</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-wrap">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="event-text event-text-2">
                          <h3>Wedding Party</h3>
                          <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                          <span>256 Apay Road,Califonia Bong, London</span>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal It is a
                            long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal{" "}
                          </p>
                          <div className="btn">
                            <Link to="/">Location</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="event-img">
                          <img src={story2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-wrap">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-12">
                        <div className="event-img">
                          <img src={story3} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-12">
                        <div className="event-text">
                          <h3>Wedding Dinner</h3>
                          <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                          <span>256 Apay Road,Califonia Bong, London</span>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal It is a
                            long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal{" "}
                          </p>
                          <div className="btn">
                            <Link to="/">Location</Link>
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
    </div>
  );
};
export default Location;
