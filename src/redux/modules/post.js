import { createAction, handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import assign from 'lodash/assign'
import isEmpty from 'lodash/isEmpty'
import fuzzy from 'fuzzy'
import { samplePosts } from './sample'

// ------------------------------------
// Selectors
// ------------------------------------
function posts (state) {
  return state.posts
}

function category (state) {
  return state.category
}

function term (state) {
  return state.term
}

export const visiblePosts = createSelector(
  posts, category, term, (posts, category, term) => {
    if (!isEmpty(category)) {
      posts = posts.filter(post => post.categories.includes(category))
    }

    if (!isEmpty(term)) {
      posts = posts.filter(post => fuzzy.test(term, post.title))
    }

    return posts
  }
)

// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER'
export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'

// ------------------------------------
// Actions
// ------------------------------------
export const filterByCategory = createAction(CHANGE_CATEGORY_FILTER, (categoryValue) => categoryValue)
export const searchByTerm = createAction(CHANGE_SEARCH_TERM, (term) => term)

export const actions = {
  filterByCategory,
  searchByTerm
}

// ------------------------------------
// Reducer
// ------------------------------------
const init = {
  posts: samplePosts,
  category: '',
  term: ''
}

export default handleActions({
  [CHANGE_CATEGORY_FILTER]: (state, { payload }) => {
    return assign({}, state, {category: payload})
  },
  [CHANGE_SEARCH_TERM]: (state, { payload }) => {
    return assign({}, state, {term: payload})
  }
}, init)
