import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation/navigation";
import HelloWorld from "./hello_world/hello_world";
import HelloFromParams from "./hello_world/hello_from_params";
import TodoAppContainer from "./todo_app/todo_app_container";
import MessagesContainer from "./messages/messages_container";
import MessageContainer from "./message/message_container";
import LoginContainer from "./login/login_container";
import LogoutContainer from './login/logout_container'
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      name: "..."
    }
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
                <Route exact path="/" render={() => <HelloWorld name={this.state.name} />} />
                <Route path="/hello/:name" component={HelloFromParams} />
                <Route path="/todo" component={TodoAppContainer} />
                <Route path="/messages" component={MessagesContainer} />
                <Route path="/message/:id" component={MessageContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/logout" component={LogoutContainer}/>
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
