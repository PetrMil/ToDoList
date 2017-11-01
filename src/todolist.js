import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { InputField } from './components/input.js';
import { FullList } from './components/full.js';
import { Article } from './components/article.js';
import { Filters } from './components/filters.js';

export class ToDoList extends React.Component {
  render() {
  	return(
		<div>
			<h1>todos</h1>
			<div className='container'>
			  	<div className='myList'>
			  		<InputField />
			  		<FullList />
			  		<Article />
			  		<Filters />
			  		<div className='threeLine'></div>
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
