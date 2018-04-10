import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tagsSelector } from '../redux/tags'

const mapStateToProps = state => ({ tags: tagsSelector(state) })

const mapDispatchToProps = {}

class Tags extends Component {
  render() {
    const { tags } = this.props
    return (
      <React.Fragment>
        {tags.map(tag => (
          <pre key={tag.id}>{JSON.stringify(tag, null, 2)}</pre>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
