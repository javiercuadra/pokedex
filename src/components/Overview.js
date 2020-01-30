import React from 'react';

export const Overview = ({ pokemonInfo }) => {
	const pokemonSprite = pokemonInfo.sprites.front_default;
	return (
		<div className='overview'>
			<img src={pokemonSprite} alt={pokemonInfo.name} />
			<span className='pokemon-number'>#{pokemonInfo.id}</span>
			{createTypes(pokemonInfo)}
		</div>
	);
};

const createTypes = pokemonInfo => {
	const pokeTypes = pokemonInfo.types;
	return (
		<div className='types wrapper-row'>
			{pokeTypes.map(t => (
				<div className='type' id={t.type.name} key={t.type.name}>
					{t.type.name}
				</div>
			))}
		</div>
	);
};
