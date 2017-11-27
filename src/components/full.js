import React from 'react';
import { Article } from './article.js';
import { ToDoList } from '../todolist.js';

export class FullList extends React.Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
			editArticle: null
		} 		
 	}	
		
	enterEditMode(article) {
		this.setState({
			editArticle: article.id
		})
	}

	handlePassInput(text) {
		this.props.passInput(text);
    	this.setState({
			editArticle: null
		}) 		
	}

	render() {
		var article = this.state.editArticle;
		var { articles, itemDone, passInput, destroyItem } = this.props;
		var html = articles.map((b) => {
			var editMode = b.id === this.state.editArticle
			return (
				<Article article={b} key={b.id} itemDone={itemDone} enterEditMode={(a) => this.enterEditMode(a)} editMode={editMode} passInput={(text) => this.handlePassInput(text)} destroyItem={destroyItem} />
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
