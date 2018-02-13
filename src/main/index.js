import React from 'react'
import Layout from '../layout'
import MyForm from '../form'
import MyNavBar from '../navbar'

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Layout />
        <MyNavBar />
        <MyForm />
      </div>
    )
  }
}

export default Main
