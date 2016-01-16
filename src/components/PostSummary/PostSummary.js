import React from 'react'
import { PropTypes } from 'react'

import FloatPanel from './../FloatPanel/FloatPanel'
import PostItem from './../PostItem/PostItem'

import classes from './PostSummary.scss'

export default class PostSummary extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClicked: PropTypes.func
  };

  handleClick = () => {
    this.props.onClicked && this.props.onClicked()
  };

  render () {
    return (
      <FloatPanel>
        <PostItem data={ this.props.data } onClick={ this.handleClick } />
        <div className={ classes.close } onClick={ this.handleClick } >
          X
        </div>
      </FloatPanel>
    )
  }
}
