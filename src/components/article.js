import React from 'react';
import { FullList } from './full.js';



export class Article extends React.Component {

	constructor(props) {

    	super(props);

		this.state = { 

			visibileItem: 'hidden'

		 };

 	}
 
	oneItemDone() {

		this.props.itemDone(this.props.completeItem)	
	
	}

	mouseOver() {

		this.setState({

			visibileItem: 'visible'
		})
	} 

	mouseOut() {

		this.setState({
			
			visibileItem: 'hidden'
		})
	} 

	render() {
		return(
			<li onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
				<input type='checkbox' className='toggle' onChange={() => this.oneItemDone()} /> 
		  		<label htmlFor='toggle' className={this.props.completeItem ? 'completed': 'non-completed'}> {this.props.article.title} </label>
		  		<button className='destroy' style={{visibility: this.state.visibileItem}}></button>
  			</li>
		);
	}
}
