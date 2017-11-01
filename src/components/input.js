import React from 'react';

export class InputField extends React.Component {
	render() {
		return(
			<div>
				<input type='checkbox' className='toggleAll' />
				<input className='newItem'placeholder='What needs to be done?' />
			</div>
		);
	}
}
