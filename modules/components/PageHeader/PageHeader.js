import React from 'react'
require("./PageHeader.scss");

export default React.createClass({
  render() {
    return (
      <h2 className="title"><span>{this.props.title}</span></h2>
    )
  }
})