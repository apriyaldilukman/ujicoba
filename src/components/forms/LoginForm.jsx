import React from 'react';
import propTypes from 'react';
import {Button} from 'semantic-ui-react';

class LoginForm extends React.Component {
    state = {

        
        data: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {} 
    };

    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}}); 
onSubmit = (e) => {
    e.preventDefault();

    this.props.submit(this.state.data);
};

render() {
    const {data} = this.state;

    return(
        <form onSubmit = {this.onSubmit }>
            <label htmlFor="username"><h4><b>Username</b></h4></label><br/>
            <input type="username" placeholder="Enter Username" id="username" 
            name="username" value={data.username} onChange = {this.onChange} required/>
            <br/><br/>

            <label htmlFor="password"><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" id="password" 
            name="password" value={data.password} onChange = {this.onChange} required/>

            <br/><br/>
            <Button type="submit" primary>Login</Button>
        </form>
    );
    }
}

LoginForm.propTypes  = {
    submit: propTypes.func.isRequired
};
export default LoginForm;