import React from 'react'
import { PropTypes } from 'react'
import classes from './FloatPanel.scss'

export default class FloatPanel extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return (
      <div className={ classes.panel }>
        { this.props.children }
      </div>
    )
  }
}
