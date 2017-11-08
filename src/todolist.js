import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { InputField } from './components/input.js';
import { FullList } from './components/full.js';
import { Article } from './components/article.js';
import { Filters } from './components/filters.js';

export class ToDoList extends React.Component {
	
	constructor(props) {

    	super(props);
    
    	this.state = { 

    		quantity: 0,

    		articles: [],

    		completeItem: false

    	 };

    	this.onNewItemCreated = this.onNewItemCreated.bind(this);

    	this.itemDone = this.itemDone.bind(this)   
	}

	itemDone() {
		this.setState({
			completeItem: !this.state.completeItem
		})
		console.log(this.state.completeItem)
	}

	onNewItemCreated(newUserInput) {
    	
    	var article = {

    		title: newUserInput,

    		completed: false

    	}

		var articles = this.state.articles

		var newArticles = [article]

		var quantity = this.state.quantity

    	this.setState({

    		articles: articles.concat(newArticles),

    		quantity: quantity + 1
				
		})
	}

  	render() {
  		return(
			<div>
				<h1>todos</h1>
				<div className='container'>
				  	<div className='my-list'>
				  		<InputField onChange={this.onNewItemCreated}/>
				  		<FullList articles={this.state.articles} itemDone={this.itemDone}/>
				  		<Filters quantity={this.state.quantity}/>
				  		<div className='three-line'></div>
					</div>
				</div>
				<footer className='down-footer'>
					<p>Double-click to edit a todo</p>
					<p>Created by <a href="">petehunt</a></p>
					<p>Part of <a href="">TodoMVC</a></p>
				</footer>
			</div>
		)
 	}
};
