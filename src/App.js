import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
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
    };  


    handleUserInput(e){
      this.setState({
        [e.target.name]: e.target.value
      });
      
      validateForm( validateField(e.target.name, e.target.value);

    }

    validateField(fieldName, value){}
  

  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="input_email"  onChange={this.handleUserInput}  />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="input_pass"  onChange={this.handleUserInput}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" name="but_submit" disabled={!this.state.formValid} >
          Submit
        </Button>
      </Form>
    );
  }
  


  handleSubmit(e) {



  }

}

export default App;
