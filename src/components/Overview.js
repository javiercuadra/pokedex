import React from 'react';

export const Overview = ({ pokemonInfo }) => {
	const pokemonSprite = pokemonInfo.sprites.front_default;
	return (
		<div className='overview'>
			<img src={pokemonSprite} alt={pokemonInfo.name} />
			{createTypes(pokemonInfo)}
			<p>#{pokemonInfo.id}</p>
			<p></p>
			<p></p>
		</div>
	);
};

const createTypes = pokemonInfo => {
	return (
		<>
			{pokemonInfo.types.map(t => (
				<div key={t.type.name}>{capitalize(t.type.name)}</div>
			))}
		</>
	);
};

const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
