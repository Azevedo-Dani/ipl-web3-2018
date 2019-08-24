import React from "react";
import ReactDOM from "react-dom";
import ReactMain from "../react/components/main";

import "../style/application.scss";
import image from "../images/react.png";


fetch("/users/current")
    .then((response) => { return response.json() })
    .then((currentUser) => {
        var helloElem = document.createElement('span');
        helloElem.innerText = ` : Bonjour ${currentUser.firstName}`;
        document.body.querySelector("h1").appendChild(helloElem);
    })

// react
const rootElem = document.body.querySelector('#root');
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem );
