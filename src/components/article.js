import React from 'react';
import { FullList } from './full.js';

var active = 'line-through';
var nonActive = 'none';

export class Article extends React.Component {

	constructor(props) {

    	super(props);

		this.state = { 

			textDecor: nonActive,

			visibileItem: 'hidden'

		 };

 		this.oneItemDone = this.oneItemDone.bind(this);

 		}
 
	oneItemDone() {

		var completeItem =this.props.completeItem 
		
		this.props.itemDone(completeItem)	

		var newTextDecor = this.state.textDecor == (completeItem === false) ? nonActive : active
		
		this.setState({textDecor: newTextDecor});
	
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
				<input type='checkbox' className='toggle' onClick={this.oneItemDone} /> 
		  		<label htmlFor='toggle' style={{textDecoration: this.state.textDecor}}> {this.props.article.title} </label>
		  		<button className='destroy' style={{visibility: this.state.visibileItem}}></button>
  			</li>
		);
	}
}
