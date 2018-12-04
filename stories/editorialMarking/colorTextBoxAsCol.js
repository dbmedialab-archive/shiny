import React from 'react';
import styled from '@emotion/styled';

import {
	Row, Col, HugeHeading, Heading,
} from '../../src';
import { Code } from '../../src/atoms/Code';
import { ColorTextBox } from '../../src/atoms/ColorTextBox';

const TallCol = styled(Col)`
	height: 60rem;
`;

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>ColorTextBox</HugeHeading>
				<Heading>Demo</Heading>

				<Row>
					<TallCol xs={8}>I am a column, and so should the colored box be.</TallCol>

					<ColorTextBox column={{ xs: 4 }}>
						<span>
							Helstekt kalkun er en selvfølge på
							middagsbordet ved Thanksgiving, jul
							og nyttår! For en smakfull og saftig
							kalkun anbefaler vi denne oppskriften.
						</span>
					</ColorTextBox>
				</Row>

				<Heading>Usage</Heading>
				<Code language="jsx">
					{`
import { ColorTextBox } from '@aller/shiny';

<ColorTextBox textColor="white" bgColor="primary">
	<span>
		Lorem ipsum dolor sit amet,
		consectetur adipisicing elit.
		Deserunt doloribus ducimus
		illum, iusto laborum maxime
		optio placeat soluta vitae
		voluptates. Animi ea eos
		labore non officia pariatur
		quaerat similique ut.
	</span>
</ColorTextBox>
				`}
				</Code>
			</Col>
		</Row>
	</section>
);
