import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import Game from './board-game.js'*/

import {ToDoList} from './todolist.js';




// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

/*var myFunc = function(param) {
  console.log(param)
}

ReactDOM.render(
  <div>
    <App capital={true} count={5} myfunc={myFunc} onClick={myFunc} />
    <App capital={false} count={2} myfunc={myFunc} />
    <App capital={true} count={7} myfunc={myFunc} />
  </div>,

  document.getElementById('root')
);*/

 ReactDOM.render(
  <ToDoList />,
   document.getElementById('root')
 );
