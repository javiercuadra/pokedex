import React from 'react';

export const ProfileListItem = ({ pokemonInfo, title }) => {
	let filterID = title.toLowerCase();
	if (filterID === 'height') {
		return (
			<li>
				<span className='height'>
					{title} - {pokemonInfo.height / 10} meters
				</span>
			</li>
		);
	} else if (filterID === 'weight') {
		return (
			<li>
				<span className='weight'>
					{title} - {pokemonInfo.weight / 10} kg
				</span>
			</li>
		);
	} else if (filterID === 'abilities') {
		return (
			<li className='abilities'>
				<span>{title}</span>
				{getAbilities(pokemonInfo)}
			</li>
		);
	}
};

const getAbilities = pokemonInfo => {
	return (
		<>
			{pokemonInfo.abilities.map(a => (
				<div className='ability' key={a.ability.name}>
					{capitalize(a.ability.name)}
				</div>
			))}
		</>
	);
};

const capitalize = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
