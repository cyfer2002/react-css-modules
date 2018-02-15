import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MyNavBar from '../navbar'
import Main from '../main'
import Header from './Header'
import Footer from './Footer'
import Test from '../test'

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header title={this.props.title} />
          <MyNavBar />
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default Layout
