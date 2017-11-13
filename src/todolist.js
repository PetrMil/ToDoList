import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { InputField } from './components/input.js';
import { FullList } from './components/full.js';
/*import { Article } from './components/article.js';*/
import { Filters } from './components/filters.js';
import _ from 'lodash';

export class ToDoList extends React.Component {
	
	constructor(props) {

    	super(props);
    
    	this.state = { 

    		quantity: 0,

    		articles: []

    	 };

    	this.onNewItemCreated = this.onNewItemCreated.bind(this);

    	this.itemDone = this.itemDone.bind(this);

	}

	
	itemDone(completeItem) {

		var newArticles = this.state.articles.map((b) =>{ 
			if (completeItem.title != b.title) {
				return b
			} else {
				return {
					title: completeItem.title,

					completed: !completeItem.completed
				}
			}
		})

		this.setState({
			articles: newArticles
		})

	}



	onNewItemCreated(newUserInput) {
    	
       	var completeItem = this.state.completeItem 

       	var article = {

    		title: newUserInput,

    		completed: completeItem

    	}

		var articles = this.state.articles

		var newArticles = [article]

		var quantity = this.state.quantity

		
		  	this.setState({

    		articles: articles.concat(newArticles),

    		quantity: quantity + 1,  		
				
		})
	}

	
  	render() {
  		return(
			<div>
				<h1>todos</h1>
				<div className='container'>
				  	<div className='my-list'>
				  		<InputField onChange={this.onNewItemCreated}  />
				  		<FullList articles={this.state.articles} completeItem={this.state.completeItem} itemDone={this.itemDone}/>
				  		{this.state.articles.length > 0 ? <Filters quantity={this.state.quantity} />:''}
				  		{this.state.articles.length > 0 ? <div className='three-line'></div>:''}
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
