import React, { useState, useEffect } from 'react';
import { Search } from './components/layout/Search';
import { Body } from './components/layout/Body';
import axios from 'axios';

export const App = () => {
	const [search, setSearch] = useState('bulbasaur');
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);

	let currentURL = `https://pokeapi.co/api/v2/pokemon/${search}/`;
	useEffect(() => {
		setLoading(true);
		axios
			.get(currentURL)
			.then(res => {
				setPokemon(res.data);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				alert('Please input a valid Pokemon name');
				console.log(err);
			});
	}, [search]);

	if (loading) return 'Loading...';

	return (
		<div className='App'>
			<Search search={search} setSearch={setSearch} />
			<Body pokemon={pokemon} />
		</div>
	);
};
