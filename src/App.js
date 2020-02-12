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


  //let input_email = '';
  //let formValid = false;  
  //let input_password = '';
  let emailValid = false;
  let passwordValid = false;

  const [input_email, setEmail] = useState('');

  const [input_password, setPass] = useState('');

  const [formValid, setFormState] = useState(false);
  

  const validateForm = () => {
    console.log("ev: " + emailValid + " pv: " + passwordValid);
    setFormState(emailValid && passwordValid);
  }

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    emailValid = event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    validateForm();
  }

  const handlePassInput = (event) => {
    setPass(event.target.value);
    passwordValid = event.target.value.length >= 6;
    validateForm();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementsByClassName("form")[0].hidden = true;
    document.getElementsByName("welcome")[0].hidden = false;
  }


  return (
    <React.Fragment>
      <h3 name="welcome" hidden>Привет, {input_email} </h3>
      <form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="input_email" onChange={handleEmailInput} value={input_email} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="input_password" onChange={handlePassInput} value={input_password}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" name="but_submit" disabled={!formValid} >
          Submit
          </Button>
      </form>
    </React.Fragment>
  );
}

export default App;
