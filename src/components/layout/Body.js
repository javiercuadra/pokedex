import React from 'react';
import { Header } from '../Header';
import { Overview } from '../Overview';
import { Section } from '../Section';

export const Body = ({ pokemon }) => {
	console.log(pokemon.name);
	return (
		<div className='body'>
			<Header titleName={pokemon.name} />
			<Overview pokemonInfo={pokemon} />
			<Section pokemonInfo={pokemon} />
		</div>
	);
};
