import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div className="box">
    <Boot_Form />
  </div>

);


const Boot_Form = (props) => {

/*  constructor(props) {
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
*/

//let input_email = '';
let input_password = '';
let emailValid = false;
let passwordValid = false;

const [input_email, SetEmail] = useState('');

const [formValid, SetFormState] = useState(false);

//let formValid = false;
  
const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'input_email':       
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        SetEmail(value);
        break;
      case 'input_password':
        passwordValid = value.length >= 6;
        break;
      default:
        break;
    }
  }

 const validateForm = () => {
    SetFormState(emailValid && passwordValid);    
  }

  const handleUserInput = (event) => { 
    console.log("em: " + emailValid);
    validateField(event.target.name, event.target.value);
    validateForm();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementsByClassName("form")[0].hidden = true;  
    document.getElementsByName("welcome")[0].hidden = false;  
  }

  
  return ([
    
    <h3 name="welcome" hidden>Привет, {input_email} </h3>,
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="input_email" onChange={handleUserInput} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="input_password" onChange={handleUserInput} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" name="but_submit" disabled={!formValid} >
          Submit
        </Button>
      </Form>
      
      
  ]);
}

export default App;
