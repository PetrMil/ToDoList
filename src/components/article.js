import React from 'react';

export class Article extends React.Component {
	render() {
		return(
			<li>
				<input type='checkbox' className='toggle' /> 
		  		<label htmlFor='toggle'>Первый пункт</label> 
  			</li>
		);
	}
}
