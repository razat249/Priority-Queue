import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button className="loginBtn loginBtn--google" onClick={this.props.login}>  Login with Google
</button>
            </div>
        );
    }
}

export default Login;
