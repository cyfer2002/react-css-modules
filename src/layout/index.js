import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MyNavBar from '../navbar'
import Main from '../main'
import Header from './Header'
import Footer from './Footer'
import Test from '../test'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

class Layout extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header title={this.props.title} />
            <MyNavBar />
            <Route exact path="/" component={Main} />
            <Route path="/test" component={Test} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Layout
