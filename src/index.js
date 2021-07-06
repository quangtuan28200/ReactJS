import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Test from './test';
import ReactRouter from './reactRouter';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import storage from './components/reactRouter/redux/store';

ReactDOM.render(
    // <React.StrictMode>
    //   <ReactRouter />
    // </React.StrictMode>,
    <Provider store={storage}>
        <ReactRouter />
    </Provider>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
