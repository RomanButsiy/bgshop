import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GameCard from './components/GameCard'
import 'semantic-ui-css/semantic.min.css';



ReactDOM.render(<GameCard />, document.getElementById('root'));

serviceWorker.unregister();
