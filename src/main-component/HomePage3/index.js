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


const Homepage3 = () => {
    return(
       <div>
           <Header/>
           // Do next
           <MobileMenu/>
           // Do next
           <BackgroundVideo/>
           // Do next
           <Saveday/>
           // Do next
           <Couple/>
           // Do next
           <Welcome/>
           // Do next
           <Story/>
           // Do next
           <People/>
           // Do next
           <Location/>
           // Do next
           <Gallery/>
           // Do next
           <Rsvp/>
           // Do next
           <Getting/>
           // Do next
           <Gift/>
       </div>
    )
}

export default Homepage3;
