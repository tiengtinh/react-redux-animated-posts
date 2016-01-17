import React from 'react'
import { PropTypes } from 'react'
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react'

import classes from './PostListCanvas.scss'

import PostList from './../PostList/PostList'
import PostContent from './../PostContent/PostContent'
import PostSummary from './../PostSummary/PostSummary'

const POST_ITEM_HEIGHT = 145

export default class PostListCanvas extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props)
    this.state = {
      showDetail: false,
      postId: null
    }
  }

  handlePostItemCLicked = (postId) => {
    this.setState({showDetail: true, postId: postId})
  };

  handleDetailPostItemClick = () => {
    this.setState({showDetail: false})
  };

  renderPostList = () => {
    return (
      <PostList posts={ this.props.posts } onItemClicked={ this.handlePostItemCLicked } />
    )
  };

  renderPostSummary = () => {
    let post = this.props.posts.find(post => post.id === this.state.postId)
    if (!post) {
      return null
    }
    return (
      <PostSummary data={ post } onClicked={ this.handleDetailPostItemClick }/>
    )
  };

  calculatePostItemY = (postIndex) => {
    if (postIndex === -1) {
      return 0
    }
    return POST_ITEM_HEIGHT * postIndex
  };

  calculateViewingPostIndex = () => {
    let post = this.props.posts.find(post => post.id === this.state.postId)
    return this.props.posts.indexOf(post)
  };

  renderPostContent = () => {
    let post = this.props.posts.find(post => post.id === this.state.postId)
    if (!post) {
      return null
    }
    return (
      <div className={ classes.postContent }>
        <PostContent content={ post.content }/>
      </div>
    )
  };

  render () {
    let postListAnimation
    if (this.state.showDetail) {
      postListAnimation = {
        duration: 200,
        animation: {
          opacity: [0, 1]
        }
      }
    } else {
      postListAnimation = {
        duration: 1000,
        animation: {
          opacity: [1, 0]
        }
      }
    }

    return (
      <div className={ classes.canvas }>
        <VelocityComponent { ...postListAnimation }>
          { this.renderPostList() }
        </VelocityComponent>

        <VelocityTransitionGroup component='div' enter={{
          animation: {
            translateY: [0, -500]
          },
          duration: 400
        }} leave={{
          animation: {
            translateY: [-500, 0]
          },
          duration: 400
        }}>
          { this.state.showDetail ? this.renderPostContent() : null }
        </VelocityTransitionGroup>

        <VelocityTransitionGroup component='div' enter={{
          style: {
            opacity: 0
          },
          animation: {
            opacity: [1, 0.5],
            translateY: [0, this.calculatePostItemY(this.calculateViewingPostIndex())]
          },
          duration: 400
        }} leave={{
          animation: {
            translateY: [this.calculatePostItemY(this.calculateViewingPostIndex()), 0]
          },
          duration: 400
        }} className={ classes.detail }>
          { this.state.showDetail ? this.renderPostSummary() : null }
        </VelocityTransitionGroup>
      </div>
    )
  }
}
