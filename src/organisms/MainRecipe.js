import React from 'react';

// Components

// Atoms
import { Wrapper } from '../atoms/MainRecipe/Wrapper';
import { ComplexitySection } from '../atoms/MainRecipe/ComplexitySection';
import { ComplexitySectionHeader } from '../atoms/MainRecipe/ComplexitySectionHeader';
import { Description } from '../atoms/MainRecipe/Description';
import { Col } from '../atoms/Col';
import { Row } from '../atoms/Row';

// Molecules
import { MainRecipeImage } from '../molecules/MainRecipe/MainRecipeImage';
import { IconsBar } from '../molecules/MainRecipe/IconsBar';
import { DetailsSection } from '../molecules/MainRecipe/DetailsSection';
// Organisms

const MainRecipe = () => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src="https://static01.nyt.com/images/2015/08/27/dining/ElCerrito_RoastedChicken1/ElCerrito_RoastedChicken1-articleLarge.jpg" />
			</Col>
			<Col md={5}>
				<ComplexitySection>
					<IconsBar entities={[{ name: 'difficulty' }, { name: 'activityTime' }, { name: 'totalTime' }]} />
					<ComplexitySectionHeader>Helstekt kalkun</ComplexitySectionHeader>
				</ComplexitySection>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection />
			</Col>
			<Col md={6}>
				<Description>
					<span>Helstekt kalkun er en selvfølge på middagsbordet ved Thanksgiving, jul og nyttår! For en smakfull og saftig kalkun anbefaler vi denne oppskriften.</span>
				</Description>
			</Col>
		</Row>
	</Wrapper>
);

export { MainRecipe };
