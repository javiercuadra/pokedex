import React from 'react';
import { Profile } from './Profile';

export const Section = props => {
	const pokeTypes = props.pokemonInfo.types;
	const pokeType = pokeTypes[0].type.name;
	return (
		<div className='profile'>
			<h3 id={pokeType}>Profile</h3>
			{/* <Profile {...props} /> */}
		</div>
	);
};
