import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App/App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom';

=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> master

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
