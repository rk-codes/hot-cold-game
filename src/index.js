import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameCard from './components/game-card';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameCard />, document.getElementById('root'));
registerServiceWorker();
