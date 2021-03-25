import React from 'react';

export const Header = ({ pokemonInfo }) => {
	const pokeTypes = pokemonInfo.types;
	pokeTypes.reverse();
	return (
		<h2 className={'header ' + pokeTypes[0].type.name}>{pokemonInfo.name}</h2>
	);
};
