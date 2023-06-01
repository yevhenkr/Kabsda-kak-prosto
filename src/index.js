import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import store from './Redux/redux-store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store = {store}>
                    <App  store={store} />
                </Provider>
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