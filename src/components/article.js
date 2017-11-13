import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {

	
	render() {
		return(
			<li className='article'>
				<input type='checkbox' className='toggle' onChange={() => this.props.itemDone(this.props.article)} /> 
		  		<label htmlFor='toggle' className={this.props.article.completed ? 'completed': 'non-completed'}> {this.props.article.title} </label>
		  		<button className='destroy' ></button>
  			</li>
		);
	}
}
