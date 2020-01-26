import React from 'react';

export const Overview = ({ pokemonInfo }) => {
	const pokemonSprite = pokemonInfo.sprites.front_default;
	return (
		<div className='overview'>
			<img src={pokemonSprite} alt={pokemonInfo.name} />
			<span>#{pokemonInfo.id}</span>
			{createTypes(pokemonInfo)}
		</div>
	);
};

const createTypes = pokemonInfo => {
	return (
		<div className='types'>
			{pokemonInfo.types.map(t => (
				<div key={t.type.name}>{capitalize(t.type.name)}</div>
			))}
		</div>
	);
};

const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
