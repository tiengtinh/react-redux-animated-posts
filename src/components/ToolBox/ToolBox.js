import React from 'react'
import { PropTypes } from 'react'

import classes from './ToolBox.scss'
import FloatPanel from './../FloatPanel/FloatPanel'

class Filterers extends React.Component {
  static propTypes = {
    onCategoryChange: PropTypes.func,
    onSearch: PropTypes.func
  };

  handleCategoryChange = (e) => {
    let value = e.target.value
    this.props.onCategoryChange && this.props.onCategoryChange(value)
  };

  handleSearch = (e) => {
    let value = this.refs.searchBox.value
    this.props.onSearch && this.props.onSearch(value)
  };

  render () {
    return (
      <div className={ classes.filterers }>
        <div className='row'>
          <div className='col-lg-6'>
            <select className='form-control' onChange={ this.handleCategoryChange }>
              <option value='hot'>Hot posts</option>
              <option value='cold'>Cold posts</option>
            </select>
          </div>
          <div className={ classes.searchHolder + ' col-lg-6' }>
            <div className='input-group'>
              <input className='form-control' ref='searchBox'
                onKeyUp={ this.handleSearch } placeholder='Try "table"'
              />
              <span
                className={classes.glyphicon + ' glyphicon glyphicon-search input-group-addon'}
              />
              <span
                className={ classes.glyphicon + ' glyphicon glyphicon-align-right input-group-addon' }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Nav extends React.Component {
  render () {
    return (
      <div className={ classes.navBar + ' row'}>
        <ul className='nav'>
          <li role='presentation'><a href='#'>Home</a></li>
          <li role='presentation'><a className={ classes.active } href='#'>Forum</a></li>
        </ul>
      </div>
    )
  }
}

export default class ToolBox extends React.Component {
  static propTypes = {
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
    return (
      <FloatPanel>
        <div className={ classes.toolBox + ' container'}>
          <Filterers
            onCategoryChange={ this.handleCategoryChange }
            onSearch={ this.handleSearch }
          />
          <Nav/>
        </div>
      </FloatPanel>
    )
  }
}
