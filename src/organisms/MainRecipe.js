import React from 'react';

// Components

// Atoms
import { Wrapper } from '../atoms/MainRecipe/Wrapper';
import { ComplexitySection } from '../atoms/MainRecipe/ComplexitySection';
import { ComplexitySectionHeader } from '../atoms/MainRecipe/ComplexitySectionHeader';
import { DetailsSection } from '../molecules/MainRecipe/DetailsSection';
import { Col } from '../atoms/Col';
import { Row } from '../atoms/Row';

// Molecules
import { MainRecipeImage } from '../molecules/MainRecipe/MainRecipeImage';
import { IconsBar } from '../molecules/MainRecipe/IconsBar';

// Organisms

const MainRecipe = () => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src="https://static01.nyt.com/images/2015/08/27/dining/ElCerrito_RoastedChicken1/ElCerrito_RoastedChicken1-articleLarge.jpg" />
			</Col>
			<Col md={5}>
				<ComplexitySection>
					<IconsBar />
					<ComplexitySectionHeader>
						Helstekt kalkun
					</ComplexitySectionHeader>
				</ComplexitySection>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection />
			</Col>
			<Col md={6}>
				<div Style="border: 1px solid black;"></div>
			</Col>
		</Row>
	</Wrapper>
);

export { MainRecipe };
