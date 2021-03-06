import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {
	constructor(props) {
    	super(props);
    		this.state = {
			newInput: this.props.article.title
		} 		
 	}
	handleClick() {
		this.props.enterEditMode(this.props.article)
	}

	handleChange(e){
		this.setState({
			newInput : e.target.value
		}) 
	}

	passInput(e){
		var article = {
			title: this.state.newInput,
			id: this.props.article.id,
			completed: this.props.article.completed
		}
		if (e.key === 'Enter'){
			this.props.passInput(article);
		}	
	}

		render() {

		var title = this.props.editMode ? <input type="text" onChange={(e) => this.handleChange(e)} onKeyPress={(e) => this.passInput(e)} value={this.state.newInput} className="edit"  /> :
			[
			<label onDoubleClick={() => this.handleClick()} htmlFor='toggle' className={this.props.article.completed ? 'completed': 'non-completed'}> {this.props.article.title} </label>,
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
