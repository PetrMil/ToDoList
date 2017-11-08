import React from 'react';
import { Article } from '../components/article.js';

export class InputField extends React.Component {
	
	constructor(props) {

    	super(props);
    
		this.state = {

			text: ''

		} 		

 		this.handleUserInput = this.handleUserInput.bind(this);

		
	}

	handleUserInput(e) { 

		if (e.key === 'Enter') {
			
			this.props.onChange(this.state.text);
			
			this.setState({

				text : ''

			}) 
		};
	} 

	handleChange(e) {

		this.setState({

			text : e.target.value

		}) 
	}

	render() {
		return(
			<div>
				<input type='checkbox' className='toggle-all' />
				<input className='new-item' placeholder='What needs to be done?' value={this.state.text} onChange={(e) => this.handleChange(e)} onKeyPress={this.handleUserInput} />
			</div>
		);
	}
}
