import React, { Component } from 'react'

var moment = require('moment');

class FullScreenCal extends Component {

  componentDidMount(){

  };



  render () {

    // Month is 1-indexed (January is 1, February is 2, etc).
    function daysInCurrentMonth () {
        let m = moment().month()
        let y = moment().year()
        return new Date(y, m, 0).getDate();
    };



    return (

      <div>
      {console.log(daysInCurrentMonth())}
        <div className="cal-row">
          <div className="cal-col">
            sun
          </div>
          <div className="cal-col">
            mon
          </div>
          <div className="cal-col">
            tue
          </div>
          <div className="cal-col">
            web
          </div>
          <div className="cal-col">
            thurs
          </div>
          <div className="cal-col">
            fri
          </div>
          <div className="cal-col">
            sat
          </div>
        </div>

        <div className="cal-row">
          <div className="cal-col">
            sun
          </div>
          <div className="cal-col">
            mon
          </div>
          <div className="cal-col">
            tue
          </div>
          <div className="cal-col">
            web
          </div>
          <div className="cal-col">
            thurs
          </div>
          <div className="cal-col">
            fri
          </div>
          <div className="cal-col">
            sat
          </div>
        </div>

        <div className="cal-row">
          <div className="cal-col">
            sun
          </div>
          <div className="cal-col">
            mon
          </div>
          <div className="cal-col">
            tue
          </div>
          <div className="cal-col">
            web
          </div>
          <div className="cal-col">
            thurs
          </div>
          <div className="cal-col">
            fri
          </div>
          <div className="cal-col">
            sat
          </div>
        </div>

        <div className="cal-row">
          <div className="cal-col">
            sun
          </div>
          <div className="cal-col">
            mon
          </div>
          <div className="cal-col">
            tue
          </div>
          <div className="cal-col">
            web
          </div>
          <div className="cal-col">
            thurs
          </div>
          <div className="cal-col">
            fri
          </div>
          <div className="cal-col">
            sat
          </div>
        </div>

        <div className="cal-row">
          <div className="cal-col">
            sun
          </div>
          <div className="cal-col">
            mon
          </div>
          <div className="cal-col">
            tue
          </div>
          <div className="cal-col">
            web
          </div>
          <div className="cal-col">
            thurs
          </div>
          <div className="cal-col">
            fri
          </div>
          <div className="cal-col">
            sat
          </div>
        </div>

      </div>






    )
  }
}
export default FullScreenCal
