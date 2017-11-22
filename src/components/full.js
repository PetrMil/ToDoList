import React from 'react';
import { Article } from './article.js';
import { ToDoList } from '../todolist.js';

export class FullList extends React.Component {
	
	render() {

		var articles = this.props.articles;
		var html = articles.map((b) =>{
			return (
				<Article article={b} key={b.id} itemDone={this.props.itemDone} passInput={this.props.passInput} destroyItem={this.props.destroyItem} />
			)
		})

		return(
			<div>
				<ul className='todo-list'>
     				{html}
     			</ul>	
			</div>
		);
	}
}
