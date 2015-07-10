import React from 'react';
import WarGame from './war_game';
import Game from './game';

React.render(<WarGame />, window.document.querySelector("#game_target"));
window.game = new Game();
