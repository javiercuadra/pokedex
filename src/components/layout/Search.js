import React from 'react';
import { GoSearch } from 'react-icons/go';

export const Search = () => {
	return (
		<div class='search'>
			<input type='text' placeholder='Search Pokemon'></input>
			<a>
				<GoSearch />
			</a>
		</div>
	);
};
