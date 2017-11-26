import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {
	constructor(props) {
    	super(props);
    		this.state = {
			editMode: false,
			newInput: this.props.article.title
		} 		
 	}
	handleClick() {
		this.setState({
			editMode: true
		})
	}

	handleChange(e){
		this.setState({
			newInput : e.target.value
		}) 
	}

	passInput(e){
		if (e.key === 'Enter'){
			this.props.passInput(this.state.newInput);
			this.setState ({
				editMode: false
			})
		}	
	}

		render() {

		var title = this.state.editMode ? <input type="text" onChange={(e) => this.handleChange(e)} onKeyPress={(e) => this.passInput(e)} value={this.state.newInput} className="edit"  /> :
			[
			<label onDoubleClick={() => this.handleClick()} htmlFor='toggle' className={this.props.article.completed ? 'completed': 'non-completed'}> {this.state.newInput} </label>,
			<button className='destroy' onClick={() => this.props.destroyItem(this.props.article)}></button>
			]
		return(
			<li className='article' >
				<input type='checkbox' className='toggle' checked={this.props.article.completed} onChange={() => this.props.itemDone(this.props.article)} /> 
		  		{title}
		  		
  			</li>
		);
	}
}
