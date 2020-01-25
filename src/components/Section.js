import React from 'react';
import { Header } from './Header';
import { Profile } from './Profile';

export const Section = props => {
	return (
		<div className='profile'>
			<Header titleName='Profile' />
			<Profile {...props} />
		</div>
	);
};
