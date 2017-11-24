import React from 'react'; 
import { ToDoList } from '../todolist.js' 

export class Filters extends React.Component { 

	constructor(props) { 
		super(props); 
		this.handleAll = this.handleAll.bind(this); 
		this.handleActive = this.handleActive.bind(this); 
		this.handleCompleted = this.handleCompleted.bind(this); 
	} 

	handleAll(e) { 
		e.preventDefault(); 
		this.props.filterAll(); 
	} 

	handleActive(e) { 
		e.preventDefault(); 
		this.props.filterActive(); 
	} 

	handleCompleted(e) { 
		e.preventDefault(); 
		this.props.filterCompleted(); 
	} 

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
							<a href="#" onClick={this.handleAll} >All</a> 
						</li> 
						<li> 
							<a href="#" onClick={this.handleActive} >Active</a> 
						</li> 
						<li> 
							<a href="#" onClick={this.handleCompleted} >Completed</a> 
						</li> 
					</ul> 
					{this.props.articles.length !== quantity ? button:''} 
				</footer> 
			</div> 
		); 
	} 
}