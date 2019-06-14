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
				<Paragraph>The Dorris iconset, designed by Liselotte Hauer Kind at Aller Media.</Paragraph>
				<SmallHeading>Usage</SmallHeading>
				<Code language="jsx">
					{`
import { SvgIcon } from '@aller/shiny';

<SvgIcon name="bell" set="dorris" size={5} color="primary" />
					`}
				</Code>

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
							<td>set</td>
							<td>Which icon set to use</td>
							<td>optional</td>
							<td>string</td>
							<td>"default"</td>
						</tr>
						<tr>
							<td>size</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>5</td>
						</tr>
						<tr>
							<td>color</td>
							<td>Which color to use.</td>
							<td>optional</td>
							<td>A valid theme color name (string)</td>
							<td>"splashBackground"</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>

		<Row>
			<Col xs={12}><SmallHeading>Demo</SmallHeading></Col>
		</Row>

		<Row>
			<Col xs={2}><IconWithText set="dorris" name="bell" text={<><div>bell</div><div>notification</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="bookmark" text="bookmark" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="car" text={<><div>car</div><div>motor</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="coins" text={<><div>coins</div><div>money</div><div>finance</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="concentric-circles" text={<><div>concentric-circles</div><div>breaking</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="dice" text={<><div>dice</div><div>review</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="document" text={<><div>document</div><div>privacy</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="document-alt" text={<><div>document-alt</div><div>newspaper</div><div>news</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="documents" text={<><div>documents</div><div>copy</div><div>similar-stories</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="food" text="food" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="gear" text={<><div>gear</div><div>cog</div><div>settings</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="globe" text={<><div>globe</div><div>world</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="grid" text={<><div>grid</div><div>categories</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="heart" text={<><div>heart</div><div>favorite</div><div>favourite</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="heart-line" text={<><div>heart-line</div><div>cardio</div><div>health</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="home-alt" text="home-alt" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="home" text="home" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="horizontal-ellipse" text="horizontal-ellipse" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="horoscope" text="horoscope" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="lightning" text="lightning" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="magnifier" text={<><div>magnifier</div><div>magnifying-glass</div><div>search</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="medal" text="medal" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="new-tab" text={<><div>new-tab</div><div>external-link</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="olympic-flame" text={<><div>olympic-flame</div><div>olympics-alt</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="olympic-rings" text={<><div>olympic-rings</div><div>olympics</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="pin" text={<><div>pin</div><div>position</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="running" text={<><div>running</div><div>athletics</div><div>exit</div><div>sports</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="scale" text={<><div>scale</div><div>politics</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="share" text="share" /></Col>
			<Col xs={2}><IconWithText set="dorris" name="silhouette" text={<><div>silhouette</div><div>user</div><div>profile</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="sliders" text={<><div>sliders</div><div>settings-alt</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="speech-bubble" text={<><div>speech-bubble</div><div>comment</div><div>opinion</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="speech-bubble-question" text={<><div>speech-bubble-question</div><div>question</div><div>quiz</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="speech-bubbles" text={<><div>speech-bubbles</div><div>comments</div><div>feedback</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="star" text={<><div>star</div><div>recommendation</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="suitcase" text={<><div>suitcase</div><div>travel</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="television" text={<><div>television</div><div>tv</div><div>entertainment</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="trash" text={<><div>trash</div><div>bin</div></>} /></Col>
			<Col xs={2}><IconWithText set="dorris" name="vertical-ellipse" text="vertical-ellipse" /></Col>
		</Row>
	</section>
);
