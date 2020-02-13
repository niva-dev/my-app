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
 
 //TODO: create a Ref for checkValidity() function
 

  const [input_email, setEmail] = useState('');

  const [input_password, setPass] = useState('');

  const [emailValid, setEmailValid] = useState(false); 

  const [passwordValid, setPassValid] = useState(false);

  const [isSubmitted, setSubmit] = useState(false);


  const handleEmailInput = (event) => {
    setEmail(event.target.value);       
    setEmailValid(event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
    
  }

  const handlePassInput = (event) => {
    setPass(event.target.value);
    setPassValid(event.target.value.length >= 6);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);    
  }


  return (
    <React.Fragment>
      <h3 name="welcome" hidden={!isSubmitted}>Привет, {input_email} </h3>
      <Form onSubmit={handleSubmit} className="form" hidden={isSubmitted}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="input_email" onChange={handleEmailInput} value={input_email}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="input_password" onChange={handlePassInput} value={input_password}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" name="but_submit" disabled={!(emailValid && passwordValid)} >
          Submit
          </Button>
      </Form>
    </React.Fragment>
  );
}

export default App;
