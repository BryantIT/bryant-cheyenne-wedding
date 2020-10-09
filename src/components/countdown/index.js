import React, {Component} from 'react';
import CountDown from 'reactjs-countdown';
import './style.css'

class Saveday extends Component {

  render() {
    return (<div className="saveday">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countdownwrap">
              <CountDown deadline="August 22, 2020"/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Saveday;
