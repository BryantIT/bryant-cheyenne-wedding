import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// If these are removed it messes up animated circle.  Unknown reason
import Homepage from '../HomePage/index'
import Homepage2 from '../HomePage2/index'
import Homepage3 from '../HomePage3/index'
import BlogPage from '../blogpage'
import BlogDetailsPage from '../BlogDetailsPage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Rsvp from '../../components/rsvp'
import './App.css'


const App = () => {

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage3} />
            <Route exact path='/rsvp' component={Rsvp} />
            <Route path='/Blog' component={BlogPage} />
            <Route path='/Blog-details' component={BlogDetailsPage} />
          </Switch>
          <Footer/>
          <Scrollbar/>
      </Router>

    </div>
  )
}

export default App
