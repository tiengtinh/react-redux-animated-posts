import React from 'react'
import { PropTypes } from 'react'

import SinceTimeRenderer from './../SinceTimeRenderer/SinceTimeRenderer'

import classes from './PostItem.scss'

export default class PostItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      cAt: PropTypes.date,
      uAt: PropTypes.date,
      content: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object)
    }),
    onClick: PropTypes.func
  };

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.onClick && this.props.onClick(this.props.data.id)
  };

  render () {
    const { title, author, cAt, uAt, comments } = this.props.data
    return (
      <div className={ classes.item + ' row'} onClick={ this.handleClick }>
        <h2>{ title }</h2>
        <div className={ classes.updatedTime }>
          Updated <SinceTimeRenderer time={ uAt } />
        </div>
        <div className={ classes.extraInfo }>
          <span>
            Posted by <strong>{ author }</strong>
          </span>
          <span>
            <SinceTimeRenderer time={ cAt } />
          </span>
          <span>
            { comments.length + ' comments' }
          </span>
        </div>
      </div>
    )
  }
}
