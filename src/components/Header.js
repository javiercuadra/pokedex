import React from 'react';

export const Header = ({ pokemonInfo }) => {
	const pokeTypes = pokemonInfo.types;
	pokeTypes.reverse();
	const pokeType = pokeTypes[0].type.name;
	return (
		<h2 className='header' id={pokeType}>
			{pokemonInfo.name}
		</h2>
	);
};
