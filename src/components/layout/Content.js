import React from 'react';
import { Header } from '../Header';
import { Overview } from '../Overview';
import { Section } from '../Section';

export const Content = ({ pokemon }) => {
	return (
		<div className='content'>
			<Header pokemonInfo={pokemon} />
			<Overview pokemonInfo={pokemon} />
			<Section pokemonInfo={pokemon} />
		</div>
	);
};
