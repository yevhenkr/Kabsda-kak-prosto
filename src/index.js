import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState()); //Нужно отдать в stste как колбек

store.subscribe(() => {
    // debugger
    let state = store.getState();
    rerenderEntireTree(state);
}); //теперь в state может візвать нашу іцункцию 