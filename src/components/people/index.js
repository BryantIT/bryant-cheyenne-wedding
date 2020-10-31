import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'
import officiant from '../../images/groomsmen-bridesmaid/julietteVincentResized.jpg'

import './style.css'

const People = () => {
  return (
    <section id='people'>
      <div className='groomsmen-bridesmaid-area section-padding'>
        <Sectiontitle section={"Guest's of Honor"} />
        <div className='container'>
          <div className='groomsmen-bridesmaid-area-menu'>
            <div className='Groomsman-wrap'>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride1} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Brittany Danae West</h4>
                      <span>Bridesmaid</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride2} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Megan Alisha Jordan</h4>
                      <span>Bridesmaid</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride3} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Steve Henderson</h4>
                      <span>Best Man</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride4} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Joel West</h4>
                      <span>Groomsman</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride5} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Aphrodite Rose</h4>
                      <span>Flower Girl</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride6} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>???</h4>
                      <span>???</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap groomsmen-bridesmaid-wrap-2'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride7} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Mathew Bowman</h4>
                      <span>Groomsman</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap mb-0'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride8} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Lucius Richards</h4>
                      <span>Ring Bearer</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap mb-0'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={officiant} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Juliette Vincent</h4>
                      <span>Officiant</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 grid'>
                  <div className='groomsmen-bridesmaid-wrap mb-0'>
                    <div className='groomsmen-bridesmaid-img'>
                      <img src={bride8} alt='bride' />
                    </div>
                    <div className='groomsmen-bridesmaid-content'>
                      <h4>Juliette Vincent</h4>
                      <span>Officiant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
