import React, { PropTypes } from 'react'
import { velocityHelpers, VelocityTransitionGroup } from 'velocity-react'

import PostItem from './../PostItem/PostItem'

var Animations = {
  // Register these with UI Pack so that we can use stagger later.
  In: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ '100%', '100%' ],
        marginBottom: 0,
        opacity: 1,
        rotateX: [0, 180]
      }, 1, {
        easing: 'ease-out',
        display: 'block'
      }]
    ]
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ '0%', '0%' ],
        marginBottom: -10,
        opacity: 0,
        rotateX: -70
      }, 1, {
        easing: 'ease-out',
        display: 'block'
      }]
    ]
  })
}

var enterAnimation = {
  animation: Animations.In,
  backwards: true,
  display: 'block',
  style: {
    display: 'none'
  },
  duration: 200
}

var leaveAnimation = {
  animation: Animations.Out,
  backwards: true,
  duration: 200
}

export class PostsList extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    onItemClicked: PropTypes.func
  };

  handlePostItemCLicked = (postId) => {
    this.props.onItemClicked(postId)
  };

  render () {
    var posts = this.props.posts.map((post) =>
      <PostItem key={ post.id } data={ post } onClick={ this.handlePostItemCLicked }/>
    )
    return (
      <VelocityTransitionGroup component='div' enter={enterAnimation} leave={leaveAnimation}>
        { posts }
      </VelocityTransitionGroup>
    )
  }
}

export default PostsList
