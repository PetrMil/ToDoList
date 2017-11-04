import React from 'react';
import { Article } from './article.js';
import { ToDoList } from '../todolist.js';

export class FullList extends React.Component {

	render() {
		return(
			<div>
				<ul className='todo-list'>
     				<Article userInput={this.props.userInput}/> 
     			</ul>	
			</div>
		);
	}
}
