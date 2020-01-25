import React from 'react';
import { Header } from '../Header';
import { Overview } from '../Overview';
import { Section } from '../Section';

export const Body = () => {
	return (
		<div class='body'>
			<Header />
			<Overview />
			<Section />
		</div>
	);
};
