import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {storeApp} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={storeApp}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
