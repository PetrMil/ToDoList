import React from 'react';
import { Article } from './article.js';

export class FullList extends React.Component {
/*	constructor(props) {
    super(props);
    this.state = {
     todolist : []
    }
  }*/
	render() {
		return(
			<div>
				<ul className='todo-list'>
     				<Article />
     			</ul>	
			</div>
		);
	}
}
