import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';

export const Search = ({ setSearch }) => {
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
		<div className='search wrapper-row'>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Search Pokemon'
					ref={input}
					size={50}
				/>
				<button type='submit'>
					<GoSearch />
				</button>
			</form>
		</div>
	);
};
