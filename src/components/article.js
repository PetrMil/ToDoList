import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {
	constructor(props) {
    	super(props);
    		this.state = {
			editMode: false
		} 		
 	}
	handleClick() {
		this.setState({
			editMode: true
		})
	}
	render() {

		var title = this.state.editMode ? <input type="text"  className="edit" value={this.props.article.title} /> :
			[
			<label onDoubleClick={() => this.handleClick()} htmlFor='toggle' className={this.props.article.completed ? 'completed': 'non-completed'}> {this.props.article.title} </label>,
			<button className='destroy' onClick={() => this.props.destroyItem(this.props.article)}></button>
			]
		return(
			<li className='article'>
				<input type='checkbox' className='toggle' checked={this.props.article.completed} onChange={() => this.props.itemDone(this.props.article)} /> 
		  		{title}
		  		
  			</li>
		);
	}
}
