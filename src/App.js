import React, { useState, useEffect } from 'react';
import { Search } from './components/layout/Search';
import { Content } from './components/layout/Content';
import { Title } from './components/layout/Title';
import axios from 'axios';

export const App = () => {
	const [search, setSearch] = useState('bulbasaur');
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);
	const [pokeSpecies, setPokeSpecies] = useState(null);

	let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${search}/`;
	let pokemonSpeciesURL = `https://pokeapi.co/api/v2/pokemon-species/${search}/`;

	useEffect(() => {
		const requestOne = axios.get(pokemonURL);
		const requestTwo = axios.get(pokemonSpeciesURL);
		setLoading(true);
		axios
			.all([requestOne, requestTwo])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					setPokemon(responseOne.data);
					setPokeSpecies(responseTwo.data);
					setLoading(false);
				})
			)
			.catch(err => {
				setLoading(false);
				alert('Please input a valid Pokemon name');
				console.log(err);
			});
	}, [pokemonURL, pokemonSpeciesURL]);

	if (loading) return 'Loading...';

	return (
		<div className='App wrapper-column'>
			<Title />
			<Search search={search} setSearch={setSearch} />
			<Content pokemon={pokemon} pokeSpecies={pokeSpecies} />
		</div>
	);
};
