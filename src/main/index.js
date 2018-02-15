import React from 'react'
import Layout from '../layout'
import MyForm from '../form/index'

class Main extends React.Component {
  render() {
    return (
      <div>
        <MyForm />
        {this.props.children}
      </div>
    )
  }
}

export default Main
