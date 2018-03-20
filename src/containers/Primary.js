import React, { Component } from 'react'

//Components
import CalendarHeading from '../components/primaryContent/CalendarHeading';
import FullScreenCal from '../components/primaryContent/FullScreenCal';


class Primary extends Component {
  render () {
    return (
      <div className="row">
        <CalendarHeading/>
        <FullScreenCal/>
      </div>
    )
  }
}
export default Primary
