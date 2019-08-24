import React from 'react';
import HelloWorld from './hello_world/hello_world';
import TodoAppContainer from './todo_app/todo_app_container';
import TabContainer from './tabs/tab_container'
import Tab from './tabs/tab'
class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const myName = 'Bob';
    //const tabs = [{title:'user', panel: 'user panel'}, {title:'game', panel:'game panel'}]
    // const tabs = [<Tab title="user" panel ="user panel">, <Tab title="user 2" panel ="user2  panel">]

    return (
      <div>
        <ul>
          <li><HelloWorld name={myName} /></li>
          <li><TodoAppContainer /></li>
        </ul>
        <TabContainer> 
          <Tab title = 'user' panel ='panel USER'/>
          <Tab title = 'TEST' panel = 'panel TEST'></Tab>
        </TabContainer>
      </div>
    );
  }
}

export default Main;
