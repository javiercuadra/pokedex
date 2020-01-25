import React, { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';

export const Search = ({ search, setSearch }) => {
	const [currentText, setCurrentText] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		setSearch(currentText);
	};

	const handleChange = event => {
		setCurrentText(event.target.value.toLowerCase());
	};

	let input = React.createRef();

	return (
		<div className='search'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Search Pokemon'
					ref={input}
				/>
				<button type='submit'>
					<GoSearch />
				</button>
			</form>
		</div>
	);
};
