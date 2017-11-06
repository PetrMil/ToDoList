import React from 'react';
import { FullList } from './full.js';

export class Article extends React.Component {

	constructor(props) {

    	super(props);

 		this.oneItemDone = this.oneItemDone.bind(this);

	}

	oneItemDone(e) {
		var completeItem = this.props.article.completed
		this.props.itemDone(completeItem)
	}

	render() {
		return(
			<li>
				<input type='checkbox' className='toggle' onClick={this.oneItemDone} /> 
		  		<label htmlFor='toggle'> {this.props.article.title} </label> 
  			</li>
		);
	}
}
