import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import s from './components/Dialogs/Dialogs.module.css'

import App from './App';
// import './index.css';

let dialogs = [
  { key: "11", id: 1, name: 'Kirill', className: `${s.dialogesItem} ${s.active}` },
  { key: "12", id: 2, name: "Viky", className: s.dilogesItem },
  { key: "13", id: 3, name: "Taras", className: s.dilogesItem },
  { key: "14", id: 4, name: "Nastiy", className: s.dilogesItem },
  { key: "15", id: 5, name: "Oleg", className: s.dilogesItem }
]
let posts = [
  { key: "11", messeges: 'My post', likeCount: '2' },
  { key: "12", messeges: 'My post2', likeCount: '4' },
  { key: "13", messeges: 'My post3', likeCount: '6' },
  { key: "14", messeges: 'My post4', likeCount: '8' }
]
let messages = [
  { key: "21", id: 1, name: 'Hi' },
  { key: "22", id: 2, name: "Answer" },
  { key: "23", id: 3, name: "Yo" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs} posts={posts} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
