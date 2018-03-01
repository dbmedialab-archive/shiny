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
				mediumPortrait: 'https://www.dagbladet.no/mat/bilder/c/m/3/3cd250ed-joakim-strand-er-daglig-leder-i-nord-bakeri-oslo.jpg',
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
			slug: 'vegan',
			title: 'Vegan',
		},
		{
			slug: 'vegetarian',
			title: 'Vegetar',
		},
		{
			slug: 'uten-svinekjott',
			title: 'Uten svin',
		},
	],
	allergies: [
		{
			slug: 'gluten',
			title: 'Gluten',
		},
		{
			slug: 'fisk',
			title: 'Fisk',
		},
	],
	parts: [
		{
			title: 'Kjøttkakene',
			ingredients: [
				{
					title: 'Kjøttdeig',
					description: '<p>Kj&oslash;ttdeig er kvernet, malt eller hakket kj&oslash;tt av storfe, svin eller kylling som er delvis sk&aring;ret fritt for sener og fett.&nbsp;Deigen skal ikke v&aelig;re finere delt enn at kj&oslash;ttstrukturen er synlig. Brukes til kj&oslash;ttkaker, kj&oslash;ttboller, karbonader, gryter, pastasauser og taco for &aring; nevne noe.</p>',
					amount: 1,
					type: 'kg',
				},
				{
					title: 'Salt',
					description: '<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>',
					amount: 2,
					type: 'ts',
				},
				{
					title: 'Svart pepper',
					description: '<p>Svart pepper er et krydder fremstilt av fermenterte, t&oslash;rkede og umodne r&oslash;de b&aelig;r, kalt pepperkorn, fra planten Piper nigrum.&nbsp;Svart pepper er ett av de vanligste krydder i det europeiske og de europeiskinspirerte kj&oslash;kken. Smaken er sterk og brennende.</p>',
					amount: 1,
					type: 'ts',
				},
				{
					title: 'Muskatnøtt',
					description: '<p>Muskatn&oslash;tten&nbsp;kommer fra muskattreet, som har store, p&aelig;reformede frukter med et tykt, kj&oslash;ttfullt lag.&nbsp;Ved modning sprekker det kj&oslash;ttfulle laget og avdekker det valn&oslash;ttstore&nbsp;fr&oslash;et vi kaller muskatn&oslash;tt.&nbsp;Muskattn&oslash;tten t&oslash;rkes, og rives direkte over maten, eller kan kj&oslash;pes ferdig malt. Muskat er et sterkt aromatisk krydder med en&nbsp;skarp brennende smak,&nbsp;som gjerne brukes i moderate mengder. Brukes ofte i kj&oslash;ttprodukter, stuinger, fisk- og kj&oslash;ttsauser, til fiskegrateng eller epledessert.</p>',
					amount: 0.25,
					type: 'ts',
				},
				{
					title: 'Ingefær',
					description: 'Ingefær er en jordstengel, som brukes fersk eller tørket. Stengelen er lysbrun på utsiden, og lys gul med et grønnaktig skjær på innsiden. Smaken er parfymert, søtlig og brenner litt på tungen. Brukes som krydder eller smakstilsetting under matlaging, også til bruk ved sår hals eller kvalme.',
					amount: 0.5,
					type: 'ts',
				},
				{
					title: 'Potetmel',
					description: '<p>Potetmel er stivelse utvunnet av poteter.&nbsp;Potetknollenes stivelseskorn ligger innesluttet i celler som m&aring; rives i stykker, hvor stivelsen deretter vaskes ut med vann eller med potetenes egen saft, og s&aring; t&oslash;rkes.&nbsp;Potetmel brukes i matlaging til jevning&nbsp;av sauser&nbsp;og til andre matretter&nbsp;som har behov for et bindemiddel.&nbsp;</p>',
					amount: 2,
					type: 'ss',
				},
				{
					title: 'Egg',
					description: 'Egg i vår dagligtale er som regel hønseegg. Egget er magert, rikt på næringsstoffer, og en god kilde til proteiner, men har også et høyt innhold av kolesterol. Fargen på eggeskallet varierer fra hønserase til hønserase, og har ingen betydning for kvaliteten på eggehvite og -plomme.',
					amount: 1,
					type: 'stk',
				},
				{
					title: 'Smør',
					description: '<p>Sm&oslash;r er et naturprodukt basert p&aring; fl&oslash;te. Sm&oslash;rtilberedning er utviklet som en konserveringsmetode og er kjent i alle kulturer som har holdt husdyr.&nbsp;I melk og fl&oslash;te finnes fett i sm&aring; kuler. Det er disse sm&aring; fettkulene som utvinnes i sm&oslash;rproduksjon. Mesteparten av sm&oslash;ret blir produsert av &ldquo;s&oslash;t&rdquo; fl&oslash;te.&nbsp;Sm&oslash;r passer meget godt til alle typer matlaging; steking, baking, sauser, supper og br&oslash;dmat.</p>',
					amount: 1,
					type: 'ss',
				},
			],
		},
		{
			title: 'Saus',
			ingredients: [
				{
					title: 'Kraft',
					description: '<p>Den klare v&aelig;sken som blir igjen etter kj&oslash;tt, fisk eller gr&oslash;nnsaker er kokt i vann, kalles kraft. Den lages med tilsetning av fett, salt og krydder, og brukes som smakstilsetning.&nbsp;Industrielt fremstilte produkter for kraft heter buljong.&nbsp;</p>',
					amount: 6,
					type: 'dl',
				},
				{
					title: 'Salt',
					description: '<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>',
					amount: 1,
					type: 'klype(r)',
				},
				{
					title: 'Hvetemel',
					description: '<p>Hvetemel er finmalt og siktet hvete.</p>',
					amount: 3,
					type: 'ss',
				},
				{
					title: 'Svart pepper',
					description: '<p>Svart pepper er et krydder fremstilt av fermenterte, t&oslash;rkede og umodne r&oslash;de b&aelig;r, kalt pepperkorn, fra planten Piper nigrum.&nbsp;Svart pepper er ett av de vanligste krydder i det europeiske og de europeiskinspirerte kj&oslash;kken. Smaken er sterk og brennende.</p>',
					amount: 1,
					type: 'klype(r)',
				},
				{
					title: 'Fløte',
					description: '<p>Fl&oslash;te er den fettrike delen av melken. N&aring;r den nysilte melken har st&aring;tt en stund, blir det dannet et fl&oslash;telag. Fl&oslash;te og skummet melk skilles fra hverandre.</p>',
					amount: 2,
					type: 'dl',
				},
				{
					title: 'Smør',
					description: '<p>Sm&oslash;r er et naturprodukt basert p&aring; fl&oslash;te. Sm&oslash;rtilberedning er utviklet som en konserveringsmetode og er kjent i alle kulturer som har holdt husdyr.&nbsp;I melk og fl&oslash;te finnes fett i sm&aring; kuler. Det er disse sm&aring; fettkulene som utvinnes i sm&oslash;rproduksjon. Mesteparten av sm&oslash;ret blir produsert av &ldquo;s&oslash;t&rdquo; fl&oslash;te.&nbsp;Sm&oslash;r passer meget godt til alle typer matlaging; steking, baking, sauser, supper og br&oslash;dmat.</p>',
					amount: 3,
					type: 'ss',
				},
			],
		},
		{
			title: 'Tilbehør',
			ingredients: [
				{
					title: 'Tyttebær',
					description: '<p>Tytteb&aelig;r vokser vilt i mesteparten av Norge. &Oslash;konomisk sett er tytteb&aelig;ret det viktigste av v&aring;re viltvoksende b&aelig;r. I sesongen plukkes det b&aring;de til privat konsum og kommersiell omsetning. B&aelig;rene har en syrlig og litt besk smak som skyldes innholdet av benzosyre. Benzosyre gj&oslash;r at tytteb&aelig;r har lenger holdbarhet uten konserveringsmidler.</p>',
					amount: 4,
					type: 'ss',
				},
			],
		},
		{
			title: 'Kålstuing',
			ingredients: [
				{
					title: 'Hodekål (hvitkål)',
					description: '<p>Hvitk&aring;l kalles ogs&aring; for hodek&aring;l, og best&aring;r av et hode dannet av tettpakkede blader.&nbsp;Konsistensen er spr&oslash; og saftig, smaken fyldig og litt s&oslash;t.&nbsp;Hvitk&aring;l kan brukes r&aring;, finsk&aring;ret i salat eller i r&aring;kost. Den kan kokes, sm&oslash;rdampes, stekes, wokes, syltes, brukes til surk&aring;l, stuing eller supper.&nbsp;Det er en hardf&oslash;r gr&oslash;nnsak som t&aring;ler v&aring;rt klima godt og den egner seg godt til langtidslagring, noe som skyldes et tynt voksbelegg p&aring; bladene.</p>',
					amount: 1,
					type: 'stk',
				},
				{
					title: 'Hvetemel',
					description: '<p>Hvetemel er finmalt og siktet hvete.</p>',
					amount: 5,
					type: 'ss',
				},
				{
					title: 'Smør',
					description: '<p>Sm&oslash;r er et naturprodukt basert p&aring; fl&oslash;te. Sm&oslash;rtilberedning er utviklet som en konserveringsmetode og er kjent i alle kulturer som har holdt husdyr.&nbsp;I melk og fl&oslash;te finnes fett i sm&aring; kuler. Det er disse sm&aring; fettkulene som utvinnes i sm&oslash;rproduksjon. Mesteparten av sm&oslash;ret blir produsert av &ldquo;s&oslash;t&rdquo; fl&oslash;te.&nbsp;Sm&oslash;r passer meget godt til alle typer matlaging; steking, baking, sauser, supper og br&oslash;dmat.</p>',
					amount: 5,
					type: 'ss',
				},
				{
					title: 'Salt',
					description: '<p>Koksalt eller natriumklorid er et salt, og er en kombinasjon av grunnstoffene natrium og klor, og er kjent som vanlig bordsalt.&nbsp;Salt brukes som smakstilsetning i mat og som det mest utbredte konserveringsmiddel for kj&oslash;tt, fisk og meieriprodukter.&nbsp;</p>',
					amount: 1,
					type: 'klype(r)',
				},
				{
					title: 'Helmelk',
					description: 'Vi bruker melk fra forskjellige dyr, men melk i vår dagligtale betyr som regel kumelk. Melk og melkeprodukter er gode kilder for protein, kalsium, fosfor, jod og B-vitamin. Det finnes en rekke forskjellige meieriprodukter i Norge, noen er syrnet, har høy eller lav fettprosent eller er tilsatt smak. Helmelk er lavpasteurisert og homogenisert melk, der fløten ikke er fjernet som gir et naturlig fettinnhold på ca. 3,9 % fett. ',
					amount: 7,
					type: 'dl',
				},
				{
					title: 'Muskatnøtt',
					description: '<p>Muskatn&oslash;tten&nbsp;kommer fra muskattreet, som har store, p&aelig;reformede frukter med et tykt, kj&oslash;ttfullt lag.&nbsp;Ved modning sprekker det kj&oslash;ttfulle laget og avdekker det valn&oslash;ttstore&nbsp;fr&oslash;et vi kaller muskatn&oslash;tt.&nbsp;Muskattn&oslash;tten t&oslash;rkes, og rives direkte over maten, eller kan kj&oslash;pes ferdig malt. Muskat er et sterkt aromatisk krydder med en&nbsp;skarp brennende smak,&nbsp;som gjerne brukes i moderate mengder. Brukes ofte i kj&oslash;ttprodukter, stuinger, fisk- og kj&oslash;ttsauser, til fiskegrateng eller epledessert.</p>',
					amount: 0.5,
					type: 'ts',
				},
			],
		},
	],
	steps: [
		{
			description: '<p>Bland alt til kj&oslash;ttfarsen godt sammen til en jevn og glatt deig. Form store eller sm&aring; boller.</p>',
			sortOrder: 0,
			images: null,
			videoId: '',
		},
		{
			description: '<p>Stek i sm&oslash;r p&aring; litt under middels varme. Stek pent og forsiktig p&aring; hver side til de er gjennomstekt.</p>',
			sortOrder: 1,
			images: null,
			videoId: '',
		},
		{
			description: '<p>Smelt sm&oslash;r i en kjele p&aring; middels lav varme. R&oslash;r inn melet litt etter litt. R&oslash;r jevnt til du har en fin og n&oslash;ttebrun sausbruning.&nbsp;</p>',
			sortOrder: 2,
			images: null,
			videoId: '',
		},
		{
			description: '<p>Spe med kraft og r&oslash;r godt. Kok opp mens du r&oslash;rer. La sausen koke i 15 minutter mens du r&oslash;rer jevnlig.&nbsp;</p>',
			sortOrder: 3,
			images: null,
			videoId: '',
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
