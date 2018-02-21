import React from 'react';
import styled from 'styled-components';

import {
	Grid,
	Row,
	Col,
	HugeHeading,
	Heading,
	FigCaption,
	MediumHorizontalHeroUnit as RelatedHero,
	LargeHorizontalHeroUnit as Hero,
	FrontSmallHeading,
	FrontLargeHeading,
} from '../..';
import { Description } from '../../src/atoms/MainRecipe/Description';
import { PaddedGrid as StorybookGrid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';

const description = 'Mandelpotet er en delikatessepotet som dyrkes over store deler av landet, også langt oppe i ' +
	'fjellbygdene og nordpå. Knollene er små og avlange og oftest litt bøyd. Skallet er hvitt og jevnt med grunne ' +
	'grohull. Kjøttet er gult med karakteristisk smak. Mandelpotet er en selvfølge til rakfisk, lutefisk, ribbe, ' +
	'vilt og spesielt godt egnet til bakst og potetmos.';

const DetailsCol = Col.extend`
	padding-bottom: calc(2 * ${props => props.theme.variables.verticalBase});
`;

const RelatedSection = styled.section`
	padding-top: calc(3 * ${props => props.theme.variables.verticalBase});
	padding-bottom: calc(3 * ${props => props.theme.variables.verticalBase});

	background-color: ${props => props.theme.colors.grayTintLight};
`;

const SingleIngredientStory = ({ ...rest }) => (
	<section>
		<StorybookGrid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Single Ingredient</HugeHeading>
					<p>A page displaying a single ingredient that can be used in recipes.</p>
					<p>This is a huuuge story. The RelatedSection could maybe be taken out of here and get its own story instead.
					</p>
					<Heading>Demo</Heading>
				</Col>
			</Row>
		</StorybookGrid>

		<Grid fluid>
			<Hero
				image={{
					placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/fe409e89-mandelpotet.jpg',
					src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/fe409e89-mandelpotet.jpg',
					fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/fe409e89-mandelpotet.jpg',
				}}
				title="Mandelpotet"
			/>
			<Row>
				<DetailsCol xs>
					<Row>
						<Col xs md={8} mdOffset={2}>
							<FigCaption>Foto: BON APPETIT / NTB SCANPIX.</FigCaption>
						</Col>
					</Row>
					<Row>
						<Col xs md={3} mdOffset={2}>
							<FrontSmallHeading>Oppbevaring</FrontSmallHeading>
							<p>Kjølig, ved 4–8 °C.</p>
							<FrontSmallHeading>Holdbarhet</FrontSmallHeading>
							<p>Lang holdbarhet.</p>
							<FrontSmallHeading>Opprinnelse</FrontSmallHeading>
							<p>Mellom-Amerika</p>
						</Col>
						<Col xs md={3} mdOffset={2}>
							<FrontSmallHeading>Næringsinnhold</FrontSmallHeading>
							<ul>
								<li>kcal 78</li>
								<li>Proteiner 0.1</li>
								<li>Fett 1.8</li>
								<li>Karbohydrater</li>
							</ul>
							<FrontSmallHeading>Norsk sesong</FrontSmallHeading>
							<p>Juli – november.</p>
						</Col>
					</Row>
				</DetailsCol>
				<Col xs>
					<Description bgColor="secondary">{description}</Description>
				</Col>
			</Row>
		</Grid>

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
						<RelatedHero
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
							}}
							title="Mandelpotetmos med timian"
							difficulty={1}
							timeTotal={40}
							verticalPadding
						/>
					</Col>
					<Col xs={12} sm>
						<RelatedHero
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
						<RelatedHero
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
					<Col xs={12} sm>
						<RelatedHero
							image={{
								placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
								fallbackSrc: 'https://www.dagbladet.no/mat/bilder/c/xl/1/52dcc8a0-mandelpotetmos.jpg',
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
	FigCaption,
	MediumHorizontalHeroUnit as RelatedHero,
	LargeHorizontalHeroUnit as Hero,
	FrontSmallHeading,
	FrontLargeHeading,
} from '@aller/shiny'

// This one probably needs a generic rename and an export from root
import { Description } from '../../src/atoms/MainRecipe/Description';

const description = 'Mandelpotet er en delikatessepotet som dyrkes over store deler av landet, også langt oppe i ' +
	'fjellbygdene og nordpå. Knollene er små og avlange og oftest litt bøyd. Skallet er hvitt og jevnt med grunne ' +
	'grohull. Kjøttet er gult med karakteristisk smak. Mandelpotet er en selvfølge til rakfisk, lutefisk, ribbe, ' +
	'vilt og spesielt godt egnet til bakst og potetmos.';

const DetailsCol = Col.extend\`
	padding-bottom: calc(2 * $\{props => props.theme.variables.verticalBase});
\`;

const RelatedSection = styled.section\`
	padding-top: calc(3 * $\{props => props.theme.variables.verticalBase});
	padding-bottom: calc(3 * $\{props => props.theme.variables.verticalBase});

	background-color: $\{props => props.theme.colors.grayTintLight};
\`;

<Grid fluid>
	<Hero
		image={{
			placeholderImage: 'https://www.dagbladet.no/mat/bilder/c/xl/1/fe409e89-mandelpotet.jpg',
			src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/fe409e89-mandelpotet.jpg',
		}}
		title="Mandelpotet"
	/>
	<Row>
		<DetailsCol xs>
			<Row>
				<Col xs md={8} mdOffset={2}>
					<FigCaption>Foto: BON APPETIT / NTB SCANPIX.</FigCaption>
				</Col>
			</Row>
			<Row>
				<Col xs md={3} mdOffset={2}>
					<FrontSmallHeading>Oppbevaring</FrontSmallHeading>
					<p>Kjølig, ved 4–8 °C.</p>
					<FrontSmallHeading>Holdbarhet</FrontSmallHeading>
					<p>Lang holdbarhet.</p>
					<FrontSmallHeading>Opprinnelse</FrontSmallHeading>
					<p>Mellom-Amerika</p>
				</Col>
				<Col xs md={3} mdOffset={2}>
					<FrontSmallHeading>Næringsinnhold</FrontSmallHeading>
					<ul>
						<li>kcal 78</li>
						<li>Proteiner 0.1</li>
						<li>Fett 1.8</li>
						<li>Karbohydrater</li>
					</ul>
					<FrontSmallHeading>Norsk sesong</FrontSmallHeading>
					<p>Juli – november.</p>
				</Col>
			</Row>
		</DetailsCol>
		<Col xs>
			<Description>{description}</Description>
		</Col>
	</Row>
</Grid>

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
				<RelatedHero
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
				<RelatedHero
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
				<RelatedHero
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
				<RelatedHero
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

export default SingleIngredientStory;
