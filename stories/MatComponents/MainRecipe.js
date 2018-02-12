import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
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
			name: 'nut',
			text: 'Nøtter',
		},
		{
			name: 'gluten',
			text: 'Gluten',
		},
		{
			name: 'fish',
			text: 'Fisk',
		},
	],
	ingredients: [
		{
			title: 'Sammalt hvete',
			description: '<p>At melet er sammalt betyr at man bruker hele kornet &ndash; b&aring;de skall og kjerne &ndash; og maler det sammen til mel. Sammalt mel produseres i mange varierende finhetsgrader, for eksempel fint, mellomgrovt og grovt. Sammalt mel inneholder mer kostfiber, mineraler og vitaminer (som finnes i skallet p&aring; kornet) enn siktet mel.</p>\n<p>Sammalt mel brukes til grovere bakst, som grove br&oslash;dtyper, rundstykker, flatbr&oslash;d og knekkebr&oslash;d.</p>',
			pivot: {
				type: 'kg',
				amount: 1,
			},
		},
		{
			title: 'Sammalt rug',
			description: '<p>Av rugmeltyper finner du siktet rugmel, sammalt rug grov og sammalt rug fin.&nbsp;Rug gir en fyldig smak til br&oslash;d. Det gj&oslash;r dessuten br&oslash;det saftig og gir lengre holdbarhet. Fordi proteinet i rug har d&aring;rlig bakeevne, blir br&oslash;d bakt med rugmel tunge og kompakte. Men rug inneholder mye fiber som binder vann, og dette gj&oslash;r det mulig &aring; bake br&oslash;d basert p&aring; bare rug.&nbsp;</p>',
			pivot: {
				type: 'kg',
				amount: 1.5,
			},
		},
		{
			title: 'Hvetemel',
			description: '<p>Hvetemel er finmalt og siktet hvete.</p>',
			pivot: {
				type: 'kg',
				amount: 2,
			},
		},
		{
			title: 'Salt',
			description: '<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>',
			pivot: {
				type: 'ts',
				amount: 3,
			},
		},
		{
			title: 'Solsikkekjerner',
			description: '<p>Solsikkekjerner kalles ogs&aring; solsikkefr&oslash;.&nbsp;</p>\n<p>Solsikkekjerner har en god n&oslash;ttesmak, og smaken fremheves ved varmebehandling.</p>\n<p>Vanligvis brukes de i bakverk, b&aring;de i deigen og som pynt. De er fine som tilsetning i blant annet havregryner og yoghurt, men kan ogs&aring; brukes til panering av fisk og kylling.</p>\n<p>Du kan riste solsikkekjerner ved &aring; ha de p&aring; bakepapir i ovnen eller i t&oslash;rr stekepanne.</p>',
			pivot: {
				type: 'g',
				amount: 200,
			},
		},
		{
			title: 'Tørrgjær',
			description: '<p>T&oslash;rrgj&aelig;r er gj&aelig;r i pulverform med lang holdbarhet. Brukes blant annet i baking, vinlegging og &oslash;lbrygging.&nbsp;Gj&aelig;r er levende, og som alt annet levende trenger gj&aelig;rsoppen mat, vann og oksygen.&nbsp;I en deig f&aring;r gj&aelig;rsoppen mat fra stivelsen i melet, vann f&aring;r den fra deigv&aelig;sken, og oksygen f&aring;r den ved at deigen blir knadd. Gj&aelig;r puster ut karbondioksid.&nbsp;Gassen gj&oslash;r at deigen hever.</p>\n<p>Fersk gj&aelig;r hever raskest, mens t&oslash;rrgj&aelig;r trenger lenger tid.&nbsp;<a href="http://www.dinside.no/921512/torr-eller-fersk-gjaer-er-forskjellen" target="_blank">De har de samme egenskapene</a>, men mange bakere opplever bedre resultat med den ferske gj&aelig;ren.</p>',
			pivot: {
				type: 'pose(r)',
				amount: 3,
			},
		},
		{
			title: 'Vann',
			description: '<p>Vann&nbsp;er en fargel&oslash;s v&aelig;ske med&nbsp;kjemisk forbindelse mellom hydrogen og oksygen, H₂O. Vann viser som regel fargen p&aring; stoffene bak eller rundt, eller reflekterer lyset som treffer vannoverflaten.&nbsp;De kjemiske egenskapene til vann er godt egnet til mange funksjoner i levende organismer. Vann har en rekke livsviktige funksjoner i menneskekroppen.&nbsp;Rent vann g&aring;r aldri ut p&aring; dato, s&aring;fremt det oppbevares i tett emballasje,&nbsp;men kan f&oslash;les litt flatt</p>',
			pivot: {
				type: 'l',
				amount: 2,
			},
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
			description: '<p>Steke br&oslash;dene p&aring; nederste rille i varmluftsovn ved 170 grader i ca. 50 minutter.&nbsp;Ta br&oslash;dene ut av formene og avkj&oslash;l p&aring; rist.&nbsp;</p>\n<p>Obs! Oppskriften kan gjerne halveres, for at deigen skal bli lettere &aring; h&aring;ndtere p&aring; hjemmekj&oslash;kkenet.&nbsp;</p>\n<p>&nbsp; @</p>',
			sortOrder: 3,
			images: [],
		},
	],
	tags: [
		{
			title: 'Brød',
			url: 'https://www.dagbladet.no/mat/oppskrifter/tag/brod',
		},
	],
};
/* eslint-enable max-len */

export default () => (
	<section>
		<HugeHeading>Mat</HugeHeading>
		<Heading>Main Recipe</Heading>
		<MainRecipe recipe={mockRecipe} />
	</section>
);
