import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-bootstrap'
import Main from './main'
import Layout from './layout'
import Test from './test'
import './index.scss'

ReactDOM.render(
  <Router>
    <Route path="/" component={props => <Layout {...props} title="MyForm" />}>
      <IndexRoute component={Main} />
      <Route path="/test" component={Test} />
    </Route>
  </Router>,
  document.getElementById('root')
)
