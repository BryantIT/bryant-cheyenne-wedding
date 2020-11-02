import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import amazon from '../../images/gift/amazon.png'
import bbb from '../../images/gift/Bed-Bath-and-Beyond-Emblem.jpg'
import macys from '../../images/gift/macys.png'
import anthropologie from '../../images/gift/anthropologie.png'
import etsy from '../../images/gift/etsy.png'



import './style.css'

class Gift extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className='gift-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <Slider {...settings}>
                <div className='item'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.amazon.com/wedding/share/bryantandcheyenne'>
                    <img src={amazon} alt="" />
                  </a>
                </div>
                <div className='item'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549595192?eventType=Wedding'>
                    <img src={bbb} alt="" />
                  </a>
                </div>
                <div className='item'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.macys.com/wgl/registry/guest/7226452'>
                    <img src={macys} alt="" />
                  </a>
                </div>
                <div className='item'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.anthropologie.com/registry/listing?registryId=NDVMNGQ4ZJQ4'>
                    <img src={anthropologie} alt="" />
                  </a>
                </div>
                <div className='item'>
                  <a target='_blank' rel='noopener noreferrer' href='http://www.etsy.com/registry/MzEyMDIwMjZ8ODA1MzE2NTQ/'>
                    <img src={etsy} alt="" />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gift
