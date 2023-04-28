import React from 'react';
import '../css/LoginView.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            maskItem: null,
            messageboxItem: null
        }
    }

    render() {
        return (
            <div>
                <a onClick = {this.buttonClickHandler}>
                    Login
                </a>
                <div id='mask' onClick={this.maskClickHandler}></div> 
                <div id='messagebox'>
                    {this.state.messageboxItem}
                </div>
            </div>
        );
    };

    buttonClickHandler = () => {
        this.setState ({
            count: this.state.count + 1,
            maskItem: 'lll',
            messageboxItem: 'hahaha',
        });
        document.getElementById('mask').style.visibility = 'visible';
        document.getElementById('messagebox').style.visibility = 'visible';
        document.getElementsByTagName('li')[2].style.visibility = 'hidden';
    };

    maskClickHandler = () => {
        document.getElementById('mask').style.visibility = 'hidden';
        document.getElementById('messagebox').style.visibility = 'hidden';
        document.getElementsByTagName('li')[2].style.visibility = 'visible';
    };
};

export default Login;