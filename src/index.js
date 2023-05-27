import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/State/State'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntierTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={state} addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntierTree(store.getState()); //Нжно отдать в stste как колбек

store.subscribe(renderEntierTree); //теперь в state может візвать нашу іцункцию 