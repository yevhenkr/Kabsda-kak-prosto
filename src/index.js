import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntierTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntierTree(store.getState()); //Нжно отдать в stste как колбек

store.subscribe(renderEntierTree); //теперь в state может візвать нашу іцункцию 