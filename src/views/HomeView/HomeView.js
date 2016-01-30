import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as postActions, visiblePosts } from '../../redux/modules/post'
import log from 'loglevel'

import Canvas from './../../components/Canvas/Canvas'

const mapStateToProps = (state) => ({
  posts: visiblePosts(state.post)
})
export class HomeView extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    dispatch: PropTypes.func.isRequired
  };

  render () {
    log.info('HomeView rendering')

    const { dispatch } = this.props

    return (
      <div>
        <Canvas posts={ this.props.posts }
          onCategoryChange={ categoryValue => dispatch(postActions.filterByCategory(categoryValue)) }
          onSearch={ term => dispatch(postActions.searchByTerm(term)) }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(HomeView)
