import React from 'react';
import styled from 'styled-components';

import {
	Grid,
	Row,
	Col,
	HugeHeading,
	Heading,
	MediumHorizontalHeroUnit,
	FrontLargeHeading,
} from '../..';
import { PaddedGrid as StorybookGrid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';

const RelatedSection = styled.section`
	padding-top: calc(2 * ${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2 * ${props => props.theme.variables.verticalBase});

	background-color: ${props => props.theme.colors.grayTintLight};
`;

export default  ({ ...rest }) => (
	<section>
		<StorybookGrid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Related Recipes</HugeHeading>
				</Col>
			</Row>
		</StorybookGrid>

		<RelatedSection>
			<Grid>
				<Row>
					<Col xs>
						<FrontLargeHeading
							textColor="secondary"
							lineColor="secondary"
						>Oppskrifter med mandelpotet
						</FrontLargeHeading>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm>
						<MediumHorizontalHeroUnit
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/m/1/52dcc8a0-mandelpotetmos.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/m/1/52dcc8a0-mandelpotetmos.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/m/1/52dcc8a0-mandelpotetmos.jpg',
							}}
							title="Mandelpotetmos med timian"
							difficulty={1}
							timeCooking={30}
							timeTotal={40}
							verticalPadding
						/>
					</Col>
					<Col xs={12} sm>
						<MediumHorizontalHeroUnit
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
							}}
							title="Biff med asparges, soppsaus og potetpuré"
							timeCooking={30}
							timeTotal={40}
							difficulty={2}
							verticalPadding
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm>
						<MediumHorizontalHeroUnit
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
							}}
							title="Biff med asparges, soppsaus og potetpuré"
							timeCooking={30}
							timeTotal={40}
							difficulty={2}
							verticalPadding
						/>
					</Col>
					<Col xs={12} sm >
						<MediumHorizontalHeroUnit
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
							}}
							title="Mandelpotetmos med timian"
							difficulty={1}
							timeCooking={30}
							timeTotal={40}
							verticalPadding
						/>
					</Col>
				</Row>
			</Grid>
		</RelatedSection>

		<StorybookGrid>
			<Row>
				<Col xs>
					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	Grid,
	Row,
	Col,
	SmallHorizontalHeroUnit,
	LargeHorizontalHeroUnit,
} from '@aller/shiny'

const RelatedSection = styled.section\`
	padding-top: calc(3 * $\{props => props.theme.variables.verticalBase});
	padding-bottom: calc(3 * $\{props => props.theme.variables.verticalBase});

	background-color: $\{props => props.theme.colors.grayTintLight};
\`;

<RelatedSection>
	<Grid>
		<Row>
			<Col xs>
				<FrontLargeHeading
					textColor="secondary"
					lineColor="secondary"
				>Oppskrifter med mandelpotet
				</FrontLargeHeading>
			</Col>
		</Row>
		<Row>
			<Col xs={12} sm>
				<SmallHorizontalHeroUnit
					image={{
						src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
					}}
					title="Mandelpotetmos med timian"
					difficulty={1}
					timeTotal={40}
					verticalPadding
				/>
			</Col>
			<Col xs={12} sm>
				<SmallHorizontalHeroUnit
					image={{
						src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
					}}
					title="Biff med asparges, soppsaus og potetpuré"
					timeCooking={30}
					timeTotal={40}
					difficulty={2}
					verticalPadding
				/>
			</Col>
		</Row>
		<Row>
			<Col xs={12} sm>
				<SmallHorizontalHeroUnit
					image={{
						src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
					}}
					title="Biff med asparges, soppsaus og potetpuré"
					timeCooking={30}
					timeTotal={40}
					difficulty={2}
					verticalPadding
				/>
			</Col>
			<Col xs={12} sm>
				<SmallHorizontalHeroUnit
					image={{
						src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
					}}
					title="Mandelpotetmos med timian"
					difficulty={1}
					timeTotal={40}
					verticalPadding
				/>
			</Col>
		</Row>
	</Grid>
</RelatedSection>
						`}
					</Code>
				</Col>
			</Row>
		</StorybookGrid>
	</section>
);
