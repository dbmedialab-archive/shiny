import React from 'react';

import SiteSelection from '../SiteSelection';
import Heading from '../../src/atoms/Heading';
import Article from '../../src/molecules/TrysilPlug';

export default () => (
	<SiteSelection>
		<div style={{ margin: '0 auto', maxWidth: '900px' }}>
			<Heading>20.2 - Standfirst!</Heading>
			<Article
				id={1}
				link="#"
				title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
				subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
			/>
			<Heading>20.2.1 - Icons!</Heading>
			<Article
				id={1}
				link="#"
				title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
				subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
			/>
			<Heading>20.2.2 - Labels!</Heading>
			<Article
				id={2}
				link="#"
				title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
				subtitle="Det er ikke bekreftet om personen er en 62 år gammel mann som har vært savnet."
				labels={[
					{ text: 'Akkurat nå' },
					{
						text: 'Trump',
						color: 'pink',
					},
				]}
				image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=60" // eslint-disable-line max-len
			/>
		</div>
	</SiteSelection>
);
