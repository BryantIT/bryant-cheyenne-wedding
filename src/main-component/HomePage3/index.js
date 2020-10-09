import React from  'react';

// components
import Couple from '../../components/couple';
import BackgroundVideo from '../../components/hero3';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Getting from '../../components/getting';
import Gift from '../../components/gift';
import Header from '../../components/Header'
import MobileMenu from '../../components/MobileMenu'
import Saveday from '../../components/countdown'

// TODO: These
// <Welcome/>
// <Story/>
// <People/>
// <Location/>
// <Gallery/>
// <Rsvp/>
// <Getting/>
// <Gift/>


const Homepage3 = () => {
    return(
       <div>
           <Header/>
           <MobileMenu/>
           <BackgroundVideo/>
           <Saveday/>
           <Couple/>
           <Welcome/>
           <Story/>
           <People/>
           <Location/>
           <Gallery/>
           <Rsvp/>
           <Getting/>
           <Gift/>
       </div>
    )
}

export default Homepage3;
