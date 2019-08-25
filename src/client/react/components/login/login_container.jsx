import React from 'react';
import LoginComponent from './login_component';
import { Redirect } from 'react-router-dom';
import api from '../../utils/api'

class LoginContainer extends React.Component {
    constructor(props){
        super(props);
        const jwt = localStorage.getItem('JWT')
        this.state = {
            email: "",
            password: "",
            authenticated: jwt ? true : false,
            jwt: jwt,
        };

        this.authenticate = this.authenticate.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    authenticate(){
        console.log("email : ", this.state.email);
        console.log("password : ", this.state.password);
        const url = '/api/login/'
        const params = {
            email: this.state.email, 
            password: this.state.password
        }
        api.sendApiRequest({
            url: url, 
            method: 'POST',
            params: params}).then(resp => {
            return api.handleResponse(resp)
        }).then(result => {
            console.log(result.jwt)
            localStorage.setItem("JWT", JSON.stringify(result.jwt));
            this.setState({
                jwt: result.jwt,
                authenticated: true,
            })
        }).catch(err => {
            console.error(err)
        })
    }


    render(){
        const {
            email,
            password,
            authenticated,
        } = this.state;

        return (
            <React.Fragment>
            { authenticated && <Redirect to="/messages" />}
            { !authenticated &&
                <LoginComponent
                    email={email}
                    password={password}
                    authenticate={this.authenticate}
                    onFieldChange={this.onFieldChange}
                />
            }
            </React.Fragment>
        )
    }

}


export default LoginContainer