/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	HugeHeading, SmallHeading,
	Row, Col,
	Paragraph,
	IconWithText,
} from '../../src';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>SvgIcon</HugeHeading>
				<Paragraph>The Doris iconset, designed by Liselotte Hauer Kind at Aller Media.</Paragraph>
				{/*
				<SmallHeading>Usage</SmallHeading>
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon name="nut" size={5} />
					`}
				</Code>
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon name="difficulty" value={1} size={5} />
					`}
				</Code>
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon color="primary" name="exclamation-mark" value={1} size={5} />
					`}
				</Code>
				*/}
				<SmallHeading>Props</SmallHeading>
				<table>
					<thead>
						<tr>
							<th>Prop</th>
							<th>Description</th>
							<th>Required/optional</th>
							<th>Type</th>
							<th>default</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>name</td>
							<td>The name of the Icon</td>
							<td>required</td>
							<td>string</td>
						</tr>
						<tr>
							<td>size</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>5</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>

		<Row>
			<Col xs={12}><SmallHeading>Demo</SmallHeading></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>Diverse</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="sok" text="sok" /></Col>
			<Col xs={2}><IconWithText set="doris" name="trash" text="trash" /></Col>
			<Col xs={2}><IconWithText set="doris" name="verticalEllipse" text="verticalEllipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="horizontalEllipse" text="horizontalEllipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="ellipse" text="ellipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="bookmark" text="bookmark" /></Col>
			<Col xs={2}><IconWithText set="doris" name="del" text="del" /></Col>
			<Col xs={2}><IconWithText set="doris" name="sisteNytt" text="sisteNytt" /></Col>
			<Col xs={2}><IconWithText set="doris" name="lignendeSaker" text="lignendeSaker" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>tabNav</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="home" text="home" /></Col>
			<Col xs={2}><IconWithText set="doris" name="heart" text="heart" /></Col>
			<Col xs={2}><IconWithText set="doris" name="myFeed" text="myFeed" /></Col>
			<Col xs={2}><IconWithText set="doris" name="category" text="category" /></Col>
			<Col xs={2}><IconWithText set="doris" name="categoryIcon" text="categoryIcon" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Settings" text="Settings" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>Categories</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="Anbefalt" text="Anbefalt" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Bolig" text="Bolig" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Forbrukertester" text="Forbrukertester" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Helse" text="Helse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Horoskop" text="Horoskop" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Mat" text="Mat" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Medalje" text="Medalje" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Meninger" text="Meninger" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Motor" text="Motor" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Nyheter" text="Nyheter" /></Col>
			<Col xs={2}><IconWithText set="doris" name="OLRinger" text="OLRinger" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Politikk" text="Politikk" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Quiz" text="Quiz" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Reise" text="Reise" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Sport" text="Sport" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Underholdning" text="Underholdning" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Utenriks" text="Utenriks" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Økonomi" text="Økonomi" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>Innstillingssiden</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="Andreinnstillinger" text="Andreinnstillinger" /></Col>
			<Col xs={2}><IconWithText set="doris" name="MinProfil" text="MinProfil" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Personvern" text="Personvern" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Posisjon" text="Posisjon" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Tilbakemeldinger" text="Tilbakemeldinger" /></Col>
			<Col xs={2}><IconWithText set="doris" name="Varsler" text="Varsler" /></Col>
			<Col xs={2}><IconWithText set="doris" name="iBrowser" text="iBrowser" /></Col>
		</Row>
	</section>
);
