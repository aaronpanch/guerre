import 'babel/polyfill';

import React from 'react';
import WarGame from './war_game';
import Game from './models/game';

React.render(<WarGame />, window.document.querySelector("#game_target"));
