import React from 'react';

export const Header = ({ titleName }) => {
	const title = String(titleName).toUpperCase();
	return <p className='header'>{title}</p>;
};
