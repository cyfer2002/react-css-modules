import React from 'react';
import Layout from '../layout'
import MyForm from '../form'

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
        <Layout/>
        <MyForm/>
      </div>
    )
  }
}

export default Main;
