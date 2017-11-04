import React from 'react';
import { Article } from '../components/article.js';

export class InputField extends React.Component {
	
	constructor(props) {

    super(props);
    
 	this.handleUserInput = this.handleUserInput.bind(this);

	}

	handleUserInput(e) { 
		if (e.key === 'Enter') {
			const userInput = e.target.value;	
			this.props.onChange(userInput);
		}
	} 

	render() {
		return(
			<div>
				<input type='checkbox' className='toggleAll' />
				<input className='newItem' placeholder='What needs to be done?' onKeyPress={this.handleUserInput} />
			</div>
		);
	}
}
