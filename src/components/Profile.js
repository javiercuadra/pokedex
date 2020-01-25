import React from 'react';
import { ProfileList } from './ProfileList';

export const Profile = props => {
	return (
		<div className='profile'>
			<ProfileList {...props} />
		</div>
	);
};
