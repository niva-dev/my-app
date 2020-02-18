import React from 'react';

const WelcomeMessage = props => {

    return (
        <h3 name="welcome" hidden={!props.visible}>
            Привет, {props.email}
        </h3>
    );
}

export default WelcomeMessage;