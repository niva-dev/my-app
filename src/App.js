import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Form from './Form.jsx';


const App = () => (


  <div className="box">
    {/* <h3 name="welcome" hidden={!props.visible}>
        Привет, {input_email}
    </h3> */}

    <Form
      visible={true}
      onSubmit={( email )=>{console.log(email)}}
    />
  </div>

);

export default App;
