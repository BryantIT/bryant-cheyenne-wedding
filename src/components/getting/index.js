import React from 'react'
import gta1 from '../../images/gta/img-1.jpg'
import gta2 from '../../images/gta/img-2.jpg'
import Sectiontitle from '../section-title'
import './style.css'

const Getting = () => {
  return (
    <div className='gta-area section-padding'>
      <Sectiontitle section={'Getting There'} />
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-8 offset-lg-2 col-md-8 offset-md-2'>
            <div className='row'>
              <div className='heading col-md-12 col-sm-6'>
                <h4>Directions</h4>
                <div className='gta-content'>
                <div className='btn'>
                  <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1195.8461848659272!2d-87.47347587752628!3d36.089922070141625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864b23b80b777b3%3A0x40f9846cf96ae34a!2s105%20Donegan%20Crossing%20Rd%2C%20Dickson%2C%20TN%2037055!5e1!3m2!1sen!2sus!4v1604109563731!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                </div>
              </div>
              <div className='heading heading-2 col-md-12 col-sm-6'>
                <h4>Accommodations</h4>
                <div className='gta-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className='gta-img'>
                  <img src={gta2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getting
