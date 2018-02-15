import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss'

import Layout from './layout'

import Main from './main'

ReactDOM.render(<Layout title="MyForm" />, document.getElementById('root'))
