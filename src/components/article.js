import React from 'react';

export class Article extends React.Component {
	render() {
		return(
			<div>
				<ul className='todo-list'>
		  			<li>
		  				<input type='checkbox' className='toggle' /> 
		  				<label htmlFor='toggle'></label> <span>Первый пункт</span>
		  			</li>
			  	</ul>
			</div>
		);
	}
}
