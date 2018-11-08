import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "mobx-react";
import * as stores from "./store/stores"

ReactDOM.render(
    /**
     * 利用Provide注入stores
     */
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root'));
