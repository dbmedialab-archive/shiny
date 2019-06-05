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
			<Col xs={2}><IconWithText set="doris" name="search" text="search" /></Col>
			<Col xs={2}><IconWithText set="doris" name="trash" text="trash" /></Col>
			<Col xs={2}><IconWithText set="doris" name="vertical-ellipse" text="vertical-ellipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="horizontal-ellipse" text="horizontal-ellipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="ellipse" text="ellipse" /></Col>
			<Col xs={2}><IconWithText set="doris" name="bookmark" text="bookmark" /></Col>
			<Col xs={2}><IconWithText set="doris" name="share" text="share" /></Col>
			<Col xs={2}><IconWithText set="doris" name="breaking" text="breaking" /></Col>
			<Col xs={2}><IconWithText set="doris" name="similar-stories" text="similar-stories" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>tabNav</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="home" text="home" /></Col>
			<Col xs={2}><IconWithText set="doris" name="heart" text="heart" /></Col>
			<Col xs={2}><IconWithText set="doris" name="my-feed" text="my-feed" /></Col>
			<Col xs={2}><IconWithText set="doris" name="category" text="category" /></Col>
			<Col xs={2}><IconWithText set="doris" name="settings" text="settings" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>Categories</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="recommendation" text="recommendation" /></Col>
			<Col xs={2}><IconWithText set="doris" name="home-alt" text="home-alt" /></Col>
			<Col xs={2}><IconWithText set="doris" name="review" text="review" /></Col>
			<Col xs={2}><IconWithText set="doris" name="health" text="health" /></Col>
			<Col xs={2}><IconWithText set="doris" name="horoscope" text="horoscope" /></Col>
			<Col xs={2}><IconWithText set="doris" name="food" text="food" /></Col>
			<Col xs={2}><IconWithText set="doris" name="medal" text="medal" /></Col>
			<Col xs={2}><IconWithText set="doris" name="opinion" text="opinion" /></Col>
			<Col xs={2}><IconWithText set="doris" name="motor" text="motor" /></Col>
			<Col xs={2}><IconWithText set="doris" name="news" text="news" /></Col>
			<Col xs={2}><IconWithText set="doris" name="olympic-rings" text="olympic-rings" /></Col>
			<Col xs={2}><IconWithText set="doris" name="politics" text="politics" /></Col>
			<Col xs={2}><IconWithText set="doris" name="quiz" text="quiz" /></Col>
			<Col xs={2}><IconWithText set="doris" name="travel" text="travel" /></Col>
			<Col xs={2}><IconWithText set="doris" name="sports" text="sports" /></Col>
			<Col xs={2}><IconWithText set="doris" name="entertainment" text="entertainment" /></Col>
			<Col xs={2}><IconWithText set="doris" name="world" text="world" /></Col>
			<Col xs={2}><IconWithText set="doris" name="finance" text="finance" /></Col>
		</Row>

		<Row>
			<Col xs={12}>
				<SmallHeading>Innstillingssiden</SmallHeading>
			</Col>
			<Col xs={2}><IconWithText set="doris" name="settings-alt" text="settings-alt" /></Col>
			<Col xs={2}><IconWithText set="doris" name="profile" text="profile" /></Col>
			<Col xs={2}><IconWithText set="doris" name="privacy" text="privacy" /></Col>
			<Col xs={2}><IconWithText set="doris" name="position" text="position" /></Col>
			<Col xs={2}><IconWithText set="doris" name="feedback" text="feedback" /></Col>
			<Col xs={2}><IconWithText set="doris" name="notification" text="notification" /></Col>
			<Col xs={2}><IconWithText set="doris" name="new-tab" text="new-tab" /></Col>
		</Row>
	</section>
);
