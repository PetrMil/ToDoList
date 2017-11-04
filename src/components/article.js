import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {


	render() {
		return(
			<li>
				<input type='checkbox' className='toggle' /> 
		  		<label htmlFor='toggle'> {this.props.userInput} </label> 
  			</li>
		);
	}
}
