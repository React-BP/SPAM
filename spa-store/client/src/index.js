import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App/App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom';


=======
import { BrowserRouter } from 'react-router-dom';

>>>>>>> reg
const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
<<<<<<< HEAD
ReactDOM.render(app, document.getElementById('root'));
=======

ReactDOM.render(app , document.getElementById('root'));
>>>>>>> reg
registerServiceWorker();
