import React from 'react'
import { PropTypes } from 'react'
import log from 'loglevel'

import classes from './Canvas.scss'

import ToolBox from './../ToolBox/ToolBox'
import PostListCanvas from './../PostListCanvas/PostListCanvas'

export default class Canvas extends React.Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    posts: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func,
    onSearch: PropTypes.func
  };

  handleCategoryChange = (categoryValue) => {
    this.props.onCategoryChange(categoryValue)
  };

  handleSearch = (term) => {
    this.props.onSearch(term)
  };

  render () {
    log.info('Canvas rendering')
    return (
      <div className={ classes.canvas + '  container' }>
        <div className={ classes.toolBox }>
          <ToolBox
            onCategoryChange={ this.handleCategoryChange }
            onSearch={ this.handleSearch }
          />
        </div>
        <div className={ classes.posts }>
          <PostListCanvas posts={ this.props.posts }/>
        </div>
      </div>
    )
  }
}
