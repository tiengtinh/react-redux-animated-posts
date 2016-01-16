import React from 'react'
import { PropTypes } from 'react'
import classes from './PostContent.scss'
import { markdown } from 'markdown'
import FloatPanel from './../FloatPanel/FloatPanel'

export default class PostContent extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  createHtmlContent = () => {
    return {__html: markdown.toHTML(this.props.content)}
  };

  render () {
    return (
      <div className={ classes.panel }>
        <FloatPanel>
          <div className={ classes.content }
            dangerouslySetInnerHTML={ this.createHtmlContent() } />
        </FloatPanel>
      </div>
    )
  }
}
