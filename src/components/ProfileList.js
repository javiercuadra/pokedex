import React from 'react';
import { ProfileListItem } from './ProfileListItem';

export const ProfileList = props => {
	return (
		<ul>
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Height' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Catch Rate' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Egg Groups' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Abiities' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Weight' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Gender Ratio' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='Hatch Steps' />
			<ProfileListItem pokemonInfo={props.pokemonInfo} title='EVs' />
		</ul>
	);
};
