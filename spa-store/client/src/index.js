import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
=======
import App from './Container/App/App';
>>>>>>> dan-login/reg
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
