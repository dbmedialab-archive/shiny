import React from 'react';
import styled from 'react-emotion';
import { Grid } from '../../src/atoms/Grid';
import { Paragraph } from '../../src/atoms/Paragraph';
import { Header } from '../../src/molecules/Article/Header';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';

const basic = () => {
	return (
		<Grid>
			<Header
				intro="Prins Harry og hertuginne Meghan:"
				title="Harry og Meghan sjarmerte alle i senk"
				subtitle="Hertugparet delte ut klemmer på sitt offisielle besøk."
				imageText="HILSTE PÅ: Hertuginne Meghan og prins Harry tok seg god tid med folket da de besøkte den engelske byen Sussex. Foto: NTB scanpix"
				imageURL="//dbstatic.no/70279953.jpg?imageId=70279953&amp;x=4.0835707502374&amp;y=0&amp;cropw=93.06742640076&amp;croph=100&amp;width=980&amp;height=590"
				published="2018-10-04T05:02:33.000Z"
				modified="2018-10-04T05:02:33.000Z"
				bylines={
					[
						{
							firstName: 'Kine',
							lastName: 'Falch',
							email: 'kine.falch@aller.com',
							imageURL: '//dbstatic.no/68661363.jpg?imageId=68661363&x=0&y=0&cropw=100&croph=85.365853658537&width=140&height=140&compression=80',
						},
						{
							firstName: 'Ola',
							lastName: 'Nordmann',
							email: 'ola.nordmann@aller.com',
							imageURL: '',
						},
					]
				}
			/>

			<Paragraph>Onsdag var<a href="https://www.seher.no/kongelig/disse-bildene-far-fansen-til-a-klo-seg-i-hodet/69993512"> prins Harry (34) og hertuginne Meghan (37)</a> på et offisielt besøk i den engelske byen Sussex.</Paragraph>
			<Paragraph>Hertugparet ankom via helikopter, og startet dagen i Chichester - vest i Sussex. Lokalbefolkningen var i ekstase over det kongelige besøket, og sto på rekke og rad i gatene i håp om å hilse på ekteparet.</Paragraph>
			<TrysilPlug
				column={{
					xs: 6,
				}}
				float="right"
				title="Hva skal vi plugge i dag, da?"
				placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
				url="https://example.com"
				image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
				ratio={0.5}
			/>
			<Paragraph>Hertuginne Meghan var ikledd en grønn bluse, et grønt skinnskjørt av Hugo Boss og en kremfarget kåpe fra Armani. Håret var <a href="https://www.seher.no/kjendis/det-ma-ligge-misunnelse-bak-kritikken/69647852">oppsatt i en løs knute, i kjent stil.</a></Paragraph>
			<Paragraph><strong className=" lab-bold" data-lab-bold_desktop="lab-bold">Ifølge <a href="https://www.hellomagazine.com/royalty/gallery/2018100363019/prince-harry-meghan-markle-sussex-live-updates/13/">Hello Magazine</a> kom hertugparet blant annet i prat med to ti år gamle klassekamerater, Thomas og Kieran. Sammen med klassen sin ved Westbourne House School hadde de laget en presentasjon av byen til paret, med blant annet bilder av kjente landemerker.</strong></Paragraph>
			<Paragraph>Hertuginnen skal ha tatt imot gaven med et stort smil om munnen.</Paragraph>
			<Paragraph>- Tusen, tusen takk. Det er så kult. Dette vil være til stor hjelp neste gang vi kommer hit, sa hun til guttene, ifølge nettstedet.</Paragraph>
		</Grid>
	);
};

export default basic;
