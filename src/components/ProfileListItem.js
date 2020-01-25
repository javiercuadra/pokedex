import React from 'react';

export const ProfileListItem = ({ pokemonInfo, title }) => {
	let filterID = title.toLowerCase();
	if (filterID === 'height') {
		return (
			<li>
				<span className='height'>{title}</span>
				<span> - {pokemonInfo.height * 10} meters</span>
			</li>
		);
	} else if (filterID === 'weight') {
		return (
			<li>
				<span className='weight'>{title}</span>
				<span> - {pokemonInfo.weight / 10} kg</span>
			</li>
		);
	} else if (filterID === 'abilities') {
		return (
			<li>
				<span className='weight'>{title}</span>
				<span> - </span>
				{getAbilities(pokemonInfo)}
			</li>
		);
	}
};

const getAbilities = pokemonInfo => {
	return (
		<>
			{pokemonInfo.abilities.map(a => (
				<div key={a.ability.name}>{capitalize(a.ability.name)}</div>
			))}
		</>
	);
};

const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
