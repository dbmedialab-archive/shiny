import React from 'react';

import { MainRecipe } from '../../src/organisms/MainRecipe';

/* eslint-disable max-len */
const mockRecipe = {
	title: 'Bestemorbrød',
	timeTotal: 100,
	timeCooking: 60,
	difficulty: 1,
	description: '<p>6 - 8 br&oslash;d.</p>\n<p>Daglig leder ved kaffekjeden Nord i Oslo, Joakim Strand, vokste opp med dette br&oslash;det, som opprinnelig ble bakt av hans bestemor. I dag er br&oslash;det en av bestselgerne i kjedens filialer.&nbsp;Obs! Oppskriften kan gjerne halveres, for at deigen skal bli lettere &aring; h&aring;ndtere p&aring; hjemmekj&oslash;kkenet.&nbsp;</p>',
	authors: [
		{
			name: 'Joakim Strand',
			email: 'mat@dagbladet.no',
			profileImage: {
				seoFilename: '3cd250ed-joakim-strand-er-daglig-leder-i-nord-bakeri-oslo.jpg',
				title: 'Joakim Strand er daglig leder i Nord bakeri, Oslo',
				urlMPortrait: 'https://www.dagbladet.no/mat/bilder/c/m/3/3cd250ed-joakim-strand-er-daglig-leder-i-nord-bakeri-oslo.jpg',
			},
		},
	],
	images: [
		{
			largeLandscape: 'https://www.dagbladet.no/mat/bilder/c/xl/1/251b508d-bestemors-brod.jpg',
		},
	],
	rating: 0,
	preferences: [
		{
			text: 'Vegan',
			name: 'vegan',
		},
		{
			text: 'Vegetar',
			name: 'vegetarian',
		},
		{
			text: 'Uten svin',
			name: 'pork',
		},
	],
	allergies: [
		{
			slug: 'gluten',
			title: 'Gluten',
		},
		{
			slug: 'skalldyr',
			title: 'Skalldyr',
		},
	],
	parts: [
		{
			ingredients: [
				{
					title: 'Kjøttdeig',
					description: 'Kjøttdeig',
					amount: 400,
					type: 'g',
				},
				{
					title: 'Ingefær',
					description: 'Ingefær',
					amount: 2,
					type: 'ss',
				},
				{
					title: 'Chili',
					description: 'Chili',
					amount: 1,
					type: 'ss',
				},
				{
					title: 'Koriander',
					description: 'Koriander',
					amount: 2,
					type: 'ss',
				},
				{
					title: 'Hvitløk',
					description: 'Hvitløk',
					amount: 1,
					type: 'fedd',
				},
				{
					title: 'Sjalottløk',
					description: 'Sjalottløk',
					amount: 2,
					type: 'stk',
				},
				{
					title: 'Sitron',
					description: 'Sitron',
					amount: 1,
					type: 'stk',
				},
				{
					title: 'Sesamolje',
					description: 'Sesamolje',
					amount: 1,
					type: 'ts',
				},
				{
					title: 'Soyasaus',
					description: 'Soyasaus',
					amount: 1,
					type: 'ss',
				},
				{
					title: 'Salt',
					description: 'Salt',
					amount: 1,
					type: 'ss',
				},
				{
					title: 'Svart pepper',
					description: 'Svart pepper',
					amount: 1.5,
					type: 'ss',
				},
				{
					title: 'Solsikkeolje',
					description: 'Solsikkeolje',
					amount: 1,
					type: 'ss',
				},
				{
					title: 'Gyozapapir',
					description: 'Gyozapapir',
					amount: 1,
					type: 'pakke(r)',
				},
			],
		},
		{
			ingredients: [
				{
					title: 'Soyasaus',
					description: 'Soyasaus',
					amount: 1,
					type: 'dl',
				},
				{
					title: 'Fiskesaus (Fish sauce)',
					description: 'Fiskesaus (Fish sauce)',
					amount: 2,
					type: 'ss',
				},
				{
					title: 'Sesamolje',
					description: 'Sesamolje',
					amount: 1,
					type: 'ss',
				},
				{
					title: 'Lime',
					description: 'Lime',
					amount: 0.5,
					type: 'stk',
				},
				{
					title: 'Chili',
					description: 'Chili',
					amount: 0.5,
					type: 'stk',
				},
				{
					title: 'Vårløk',
					description: 'Vårløk',
					amount: 0,
					type: '',
				},
			],
		},
	],
	steps: [
		{
			videoId: '',
			description: '<p>Bland alt det t&oslash;rre i en bolle.&nbsp;Hell romtemperert vann i bollen, ca. 23 grader.&nbsp;</p>',
			sortOrder: 0,
			images: [],
		},
		{
			videoId: '',
			description: '<p>Elt deigen godt samme i ca. 10 minutter, gjerne i en maskin til en smidig deig.&nbsp;Sett deigen til heving i vanlig romtemperatur et par timer.</p>',
			sortOrder: 1,
			images: [],
		},
		{
			videoId: '',
			description: '<p>Sm&oslash;r formene med en god olje &nbsp;og fordel deigen i br&oslash;dformene.&nbsp;Pensle litt olje p&aring; toppen av br&oslash;dene og dryss p&aring; litt havsalt. Etterhev br&oslash;dene i ca. 30 minutter.&nbsp;</p>',
			sortOrder: 2,
			images: [],
		},
		{
			videoId: '',
			description: '<p>Steke br&oslash;dene p&aring; nederste rille i varmluftsovn ved 170 grader i ca. 50 minutter.&nbsp;Ta br&oslash;dene ut av formene og avkj&oslash;l p&aring; rist.&nbsp;</p>\n<p>Obs! Oppskriften kan gjerne halveres, for at deigen skal bli lettere &aring; h&aring;ndtere p&aring; hjemmekj&oslash;kkenet.&nbsp;</p>',
			sortOrder: 3,
			images: [],
		},
	],
	tags: [
		{
			title: 'Middag',
			url: '#',
		},
		{
			title: 'Kjøtt',
			url: '#',
		},
		{
			title: 'Helg',
			url: '#',
		},
		{
			title: 'Biff',
			url: '#',
		},
		{
			title: 'Grill',
			url: '#',
		},
		{
			title: 'Saus',
			url: '#',
		},
		{
			title: 'Asparges',
			url: '#',
		},
		{
			title: 'Sopp',
			url: '#',
		},
		{
			title: 'Potet',
			url: '#',
		},
		{
			title: 'Puré',
			url: '#',
		},
		{
			title: 'Storfe',
			url: '#',
		},
	],
};
/* eslint-enable max-len */

export default () => (
	<section>
		<MainRecipe recipe={mockRecipe} />
	</section>
);
