import React from 'react';
import { Header } from '../Header';
import { Overview } from '../Overview';
import { Sections } from '../Sections';

export const Content = ({ pokemon, pokeSpecies }) => {
	return (
		<div className='content'>
			<Header pokemonInfo={pokemon} />
			<Overview pokemonInfo={pokemon} pokeSpecies={pokeSpecies} />
			<Sections pokemon={pokemon} pokeSpecies={pokeSpecies} />
		</div>
	);
};
