import React from 'react'
import { Button, Input } from 'reactstrap'
import './index.scss'

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      firstName: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name)
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div styleName="MyForm">
        <div styleName="Form">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <Input name="name" value={this.state.name} placeholder="Nom" onChange={this.handleChange} />
            <Input name="firstName" value={this.state.firstName} placeholder="Prénom" onChange={this.handleChange} />
            <Button color="secondary" type="submit">
              Valider
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default MyForm
