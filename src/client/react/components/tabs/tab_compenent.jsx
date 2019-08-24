import React from 'react';

const TabCompenent = ({
    children, selectedTab, selectTab
}) => {
    return (
        <section className="tabs">
        <ul className="tabs-title">
            { children.map( tab => (
                <li className = {tab === selectedTab ? 'selected' : ''}
                key = {tab.props.title} onClick={() => selectTab(tab)}> {tab.props.title}</li>
            ))}
        </ul>
        <div className="tabs-active-panel" >
            { selectedTab.props.panel }
        </div>
        </section>
    )
}

export default TabCompenent