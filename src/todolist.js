import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export class ToDoList extends React.Component {
  render() {
  	return(
		<div className='wrap'>
			<div className='container'>
				<h1>todos</h1>
				  	<div className='myList'>
				  		<input type='checkbox' className='toggleAll' />
				  		<input className='newItem'placeholder='What needs to be done?' />
				  		<ul className='todo-list'>
				  			<li>
				  				<input type='checkbox' className='toggle' /> 
				  				<label htmlFor='toggle'></label> <span>Первый пункт</span>
				  			</li>
				  		</ul>
				  		<footer className='upFooter'>
				  			<span className='count'>1 item left</span>
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
			</div>
				<footer className='downFooter'>
					<p>Double-click to edit a todo</p>
					<p>Created by <a href="">petehunt</a></p>
					<p>Part of <a href="">TodoMVC</a></p>
				</footer>
		</div>
	)
  }
};
