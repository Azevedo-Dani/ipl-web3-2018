import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation/navigation";
import AutheticatedRoute from './authenticatedRoute/authenticateRouteContainer'
import HelloWorld from "./hello_world/hello_world";
import HelloFromParams from "./hello_world/hello_from_params";
import TodoAppContainer from "./todo_app/todo_app_container";
import MessagesContainer from "./messages/messages_container";
import MessageContainer from "./message/message_container";
import LoginContainer from "./login/login_container";
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      name: "...",
      authenticate: localStorage.getItem('JWT') ? true : false
    }
    this.setJwt = this.setJwt.bind(this)
  }

  setJwt(jwt) {
    this.setState({
      authenticate: true
    })
    localStorage.setItem('JWT', JSON.stringify(jwt))
  }

  updateNameFromWebservice(){
    fetch("/api/users/current")
      .then((response) => { return response.json() })
      .then((currentUser) => {
        this.setState({
          name: currentUser.firstName,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          name: "ERROR",
        })
      })
  }

  componentDidMount(){
    setTimeout(this.updateNameFromWebservice.bind(this), 5000);    
  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navigation />

          <Container>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
               <React.Fragment>
                <AutheticatedRoute exact path="/" authenticated = {this.state.authenticate} setJwt = {this.setJwt} render={() => <HelloWorld name="bob" />} />
                <AutheticatedRoute path="/hello/:name" component={HelloFromParams} authenticated = {this.state.authenticate} setJwt = {this.setJwt}/>
                <AutheticatedRoute path="/todo" component={TodoAppContainer} authenticated = {this.state.authenticate} setJwt = {this.setJwt}/>
                <AutheticatedRoute path="/messages" component={MessagesContainer} authenticated = {this.state.authenticate} setJwt = {this.setJwt}/>
                <AutheticatedRoute path="/message/:id" component={MessageContainer} authenticated = {this.state.authenticate} setJwt = {this.setJwt}/>
                <AutheticatedRoute path="/login" component={LoginContainer} authenticated = {this.state.authenticate} setJwt = {this.setJwt}/>
              </React.Fragment>
              </Col>
              <Col xs={2} />
            </Row>
          </Container>

          
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default Main;
