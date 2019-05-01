import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './components/aplicacion'

ReactDOM.render(<Aplicacion />, document.getElementById('root'));
serviceWorker.unregister();
