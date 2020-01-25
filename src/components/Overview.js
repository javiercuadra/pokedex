import React from 'react';

export const Overview = ({ pokemonInfo }) => {
	const pokemonSprite = pokemonInfo.sprites.front_default;
	return (
		<div className='overview'>
			<img src={pokemonSprite} alt={pokemonInfo.name} />
			{createTypes(pokemonInfo)}
			<p>#{pokemonInfo.id}</p>
		</div>
	);
};

const createTypes = pokemonInfo => {
	return (
		<>
			{pokemonInfo.types.map(t => (
				<div key={t.type.name}>{t.type.name}</div>
			))}
		</>
	);
};
