import React from 'react';

export const ProfileListItem = ({ pokemonInfo, title }) => {
	return (
		<li>
			<span className='title'>{title}</span>
			<span></span>
		</li>
	);
};
