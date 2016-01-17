import React, { PropTypes } from 'react'
import {TransitionMotion, spring, presets} from 'react-motion'
import keyBy from 'lodash/keyBy'
import map from 'lodash/map'
import find from 'lodash/find'

import PostItem from './../PostItem/PostItem'

export class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    onItemClicked: PropTypes.func
  };

  handlePostItemCLicked = (postId) => {
    this.props.onItemClicked(postId)
  };

  getEndValue () {
    const { posts } = this.props
    const styled = map(posts, post => {
      return {
        height: spring(146, presets.gentle),
        opacity: spring(1, presets.gentle),
        data: post
      }
    })
    const hash = keyBy(styled, 'data.id')
    return hash
  }

  willEnter = (postId) => {
    return {
      height: 0,
      opacity: 1,
      data: find(this.props.posts, {id: postId})
    }
  };

  willLeave (postId, styleThatJustLeft) {
    return {
      height: spring(0),
      opacity: spring(0),
      data: styleThatJustLeft.data
    }
  }

  render () {
    return (
      <TransitionMotion
        styles={this.getEndValue()}
        willLeave={ this.willLeave }
        willEnter={ this.willEnter }
      >
        { configs =>
          <div>
            {
              map(configs, (config, postId) => {
                const { data, ...style } = config
                return (
                  <div style={ style }>
                    <PostItem key={ postId } data={ data } onClick={ this.handlePostItemCLicked }/>
                  </div>
                )
              })
            }
          </div>
        }
      </TransitionMotion>
    )
  }
}

export default PostsList
