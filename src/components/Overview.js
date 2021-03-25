import React from 'react';

export const Overview = ({ pokemonInfo, pokeSpecies }) => {
	const lastFlavorTextEntry = pokeSpecies.flavor_text_entries.length - 1;
	const flavor_text =
		pokeSpecies.flavor_text_entries[lastFlavorTextEntry].flavor_text;
	const pokemonSprite = pokemonInfo.sprites.front_default;
	return (
		<div className='overview'>
			<img src={pokemonSprite} alt={pokemonInfo.name} />
			<span className='pokemon-number'>#{pokemonInfo.id}</span>
			<h4 className='genus'>
				<strong>{pokeSpecies.genera[2].genus}</strong>
			</h4>
			<p className='description'>{flavor_text}</p>
			{createTypes(pokemonInfo)}
		</div>
	);
};

const createTypes = pokemonInfo => {
	const pokeTypes = pokemonInfo.types;
	return (
		<div className='types wrapper-row'>
			{pokeTypes.map(t => (
				<div className={'type ' + t.type.name} key={t.type.name}>
					{t.type.name}
				</div>
			))}
		</div>
	);
};
