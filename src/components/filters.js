import React from 'react';
import { ToDoList } from '../todolist.js'

export class Filters extends React.Component {
	render() {
		return(
			<div>
				<footer className='upFooter'>
		  			<span className='count'>{this.props.quantity} item left</span>
		  			<ul className='filters'>
		  				<li>
		  				<a href="">All</a>
		  				</li>
		  				<li>
		  				<a href="">Active</a>
		  				</li>
		  				<li>
		  				<a href="">Completed</a>
		  				</li>
		  			</ul>
			  	</footer>
			</div>
		);
	}
}
