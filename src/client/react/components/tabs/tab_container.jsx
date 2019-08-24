import React from 'react';
import TabCompenent from './tab_compenent'
import "./tabs_style.scss";
class TabContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectTab: this.props.children[0]
        }
        this.selectTab = this.selectTab.bind(this)
    }
    
    selectTab(tab) {
        this.setState({
            selectTab: tab
        })
    }
    render() {
        return(
            <section className="tabs">
               <TabCompenent selectedTab = {this.state.selectTab} children = {this.props.children} selectTab = {this.selectTab}/>
            </section>
        )
    }
}

export default TabContainer