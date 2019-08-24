import '../style/application.scss';
import image from '../images/react.png';


fetch('/users/current').then((response) => { return response.json(); }).then((currentUser) => {
    const helloElem = document.createElement('span');
    helloElem.innerText = ` : Bonjour ${currentUser.firstName}`;
    document.body.querySelector('h1').appendChild(helloElem);
});

fetch('/topics').then((response) => {
    return response.json()
}).then((topics) => {
    const topicsElem = document.createElement('ul')
    topicsElem.setAttribute('class', 'topics')
    for(let topic of topics) {
        const liElem = document.createElement('li')
        liElem.innerHTML = topic.name
        topicsElem.appendChild(liElem)
    }
    document.body.appendChild(topicsElem)
})
//const imageElem = document.createElement('img');
//imageElem.setAttribute('src', image);
const hourElem = document.createElement('h2');
hourElem.setAttribute('class', 'hour');
const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
const secondes = now.getSeconds();
hourElem.innerHTML = hour + ':' + minutes + ':' + secondes;
document.body.appendChild(hourElem);
document.body.appendChild(imageElem);
