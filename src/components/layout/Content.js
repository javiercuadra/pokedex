import React from 'react';
import { Header } from '../Header';
import { Overview } from '../Overview';
import { Section } from '../Section';

export const Content = ({ pokemon }) => {
	return (
		<div className='content'>
			<Header titleName={pokemon.name} />
			<Overview pokemonInfo={pokemon} />
			<Section pokemonInfo={pokemon} />
		</div>
	);
};
