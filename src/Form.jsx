import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Form as BForm } from 'react-bootstrap';


const { Group, Label, Control, Check } = BForm;

const Form = props => {
  const [input_email, setEmail] = useState('');
  const [input_password, setPass] = useState('');
  //const [isSubmitted, setSubmit] = useState(false);

  const handleEmailInput = (event) => {
    setEmail(event.target.value);       
  };

  const handlePassInput = (event) => {
    setPass(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit( input_email );
    //setSubmit(true);    
  };

  const validateEmail = value =>
    value.length > 0;
    //value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

const renderSubmitButton = () => {
    const isDisable = !validateEmail( input_email ) || !input_password;

    return (
        <Button
            variant="primary"
            type="submit"
            name="but_submit"
            disabled={isDisable}
        >
            Submit
        </Button> //disabled={!(emailValid && passwordValid)}
    );
}

  return (
    
    <React.Fragment>

      <BForm onSubmit={handleSubmit} className="form" hidden={props.isSubmitted}>
        <Group controlId="formBasicEmail">
          <Label>Email address</Label>
          <Control
            type="email"
            placeholder="Enter email"
            name="input_email"
            onChange={handleEmailInput}
            value={input_email}
          />
        </Group>

        <Group controlId="formBasicPassword">
          <Label>Password</Label>
          <Control
            type="password"
            placeholder="Password"
            name="input_password"
            onChange={handlePassInput}
            value={input_password}/>
        </Group>

        <Group controlId="formBasicCheckbox">
          <Check type="checkbox" label="Check me out" />
        </Group>

        {renderSubmitButton()}
        
      </BForm>
    </React.Fragment>
   );
}

export default Form;