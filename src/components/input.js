import React from 'react';
import { Article } from '../components/article.js';


export class InputField extends React.Component {
	
	constructor(props) {
    	super(props);
    		this.state = {
			text: '',
			visibileItem: 'hidden'
		} 		
 		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(e) { 
		if ((e.key === 'Enter') && (this.state.text)){
			this.props.onChange(this.state.text);
			this.setState({
				text : '',
				visibileItem: 'visible'
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
				<input type='checkbox' className='toggle-all' onClick={() => {this.props.allCompleted(); console.log(5)}} style={{visibility: this.state.visibileItem}}/>
				<input className='new-item' placeholder='What needs to be done?'  value={this.state.text} onChange={(e) => this.handleChange(e)} onKeyPress={this.handleUserInput} />
			</div>
		);
	}
}
