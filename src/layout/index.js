import React from 'react'
import MyNavBar from '../navbar'
import './index.scss'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <header styleName="MyHeader">
          <h1 className="My-title">{this.props.title}</h1>
        </header>
        <MyNavBar />
      </div>
    )
  }
}

export default Layout
