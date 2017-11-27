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
						{
							['All', 'Active', 'Completed'].map((element) => {
								return <li  onClick={() => this.props.handleFilter(element)} className={this.props.filter === element ? 'chosen': 'non-chosen'} >{element}</li> 
							})
						}
						
					</ul> 
					{this.props.articles.length !== quantity ? button:''} 
				</footer> 
			</div> 
		); 
	} 
}