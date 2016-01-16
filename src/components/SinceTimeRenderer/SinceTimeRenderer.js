import React from 'react'
import { PropTypes } from 'react'
import moment from 'moment'

export default class SinceTimeRenderer extends React.Component {
  static propTypes = {
    time: PropTypes.object
  };

  render () {
    return (
      <span>
        { moment(this.props.time).fromNow() }
      </span>
    )
  }
}
