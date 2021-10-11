import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'HI, how are you?', likeC: '7'},
    {id: 2, message: 'It\'s my first post', likeC: '77'},
    {id: 3, message: 'It\'s my first post', likeC: '77'},
    {id: 4, message: 'It\'s my first post', likeC: '77'},
    {id: 5, message: 'It\'s my first post', likeC: '77'},
]

let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Tom'},
    {id: 3, name: 'Leo'},
    {id: 4, name: 'Jakub'},
    {id: 5, name: 'Misha'},
    {id: 6, name: 'Denis'},
    {id: 7, name: 'Ilariya'},
    {id: 8, name: 'Iolanta'},
    {id: 9, name: 'Sasha'},
    {id: 10, name: 'Daddy'},
]

let messagesData = [
    {id: 1, dialog: 'Hi'},
    {id: 2, dialog: 'Go to park'},
    {id: 3, dialog: 'Yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
