import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<h1>some</h1>, document.getElementById('root'));

serviceWorker.unregister();
