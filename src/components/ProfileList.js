import React from 'react';
import { ProfileListItem } from './ProfileListItem';

export const ProfileList = props => {
	return (
		<ul>
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Height' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Weight' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Abilities' />
		</ul>
	);
};
