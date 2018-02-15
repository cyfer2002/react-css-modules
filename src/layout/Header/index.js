import React from 'react'

import './index.scss'

class Header extends React.Component {
  render() {
    return (
      <header styleName="MyHeader">
        <h1 className="My-title">{this.props.title}</h1>
      </header>
    )
  }
}

export default Header
