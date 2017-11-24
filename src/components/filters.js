import React from 'react';
import { ToDoList } from '../todolist.js'

export class Filters extends React.Component {
		
	render() {
		
		var listComplete = this.props.articles.filter((article) => {
			return article.completed === false
		})
		var quantity = listComplete.length
		
		var button = <button onClick={() => this.props.listCompleted()} className='clear-completed'> Clear completed </button>

		return(
			<div>
				<footer className='up-footer' >
		  			<span className='count' >{quantity + (quantity <= 1 ? ' item':' items') +' left'} </span>
		  			<ul className='filters'>
		  				<li>
		  				<a href="" onClick={() => this.props.filterAll()} >All</a>
		  				</li>
		  				<li>
		  				<a href="" onClick={() => this.props.filterActive()} >Active</a>
		  				</li>
		  				<li>
		  				<a href="" onClick={() => this.props.filterCompleted()} >Completed</a>
		  				</li>
		  			</ul>
		  		{this.props.articles.length !== quantity ? button:''}			  			
		  		</footer>
			</div>
		);
	}
}
