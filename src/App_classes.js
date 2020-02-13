import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const App_classes = () => (
  <div className="box">
    <Boot_Form />
  </div>

);


class Boot_Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input_email: '',
      input_password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  };

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'input_email':
        this.state.emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'input_password':
        this.state.passwordValid = value.length >= 6;
        break;
      default:
        break;
    }
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.passwordValid
    });
  }

  handleUserInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.validateField(event.target.name, event.target.value);
    this.validateForm();
  }

  render() {
    return (
      <React.Fragment>
        <h3 name="welcome" hidden>Привет, {this.state.input_email} </h3>
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="input_email" onChange={this.handleUserInput} value={this.state.input_email} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="input_password" onChange={this.handleUserInput} value={this.state.input_password} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" name="but_submit" disabled={!this.state.formValid} >
            Submit
        </Button>
        </Form>
      </React.Fragment>
    );
  }


  handleSubmit(event) {
    event.preventDefault();
    document.getElementsByClassName("form")[0].hidden = true;
    document.getElementsByName("welcome")[0].hidden = false;
  }

}

export default App_classes;
