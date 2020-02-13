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
      isSubmitted: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'input_email':
        this.setState({ emailValid: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) });
        break;
      case 'input_password':
        this.setState({ passwordValid: value.length >= 6 });
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
  }

  render() {
    return (
      <React.Fragment>
        <h3 name="welcome" hidden={!this.state.isSubmitted}>Привет, {this.state.input_email} </h3>
        <Form onSubmit={this.handleSubmit} className="form" hidden={this.state.isSubmitted}>
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
          <Button variant="primary" type="submit" disabled={!(this.state.emailValid && this.state.passwordValid)} >
            Submit
        </Button>
        </Form>
      </React.Fragment>
    );
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
    this.setState({ isSubmitted: true });
  }

}

export default App_classes;
