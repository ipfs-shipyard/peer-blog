import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tagsSelector } from '../redux/tags'
import Tag from '../components/Tag'

const mapStateToProps = state => ({ tags: tagsSelector(state) })

const mapDispatchToProps = {}

class Tags extends Component {
  render() {
    const { tags } = this.props
    return <React.Fragment>{tags.map(tag => <Tag tag={tag} />)}</React.Fragment>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
