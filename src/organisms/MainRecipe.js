import React from 'react';

// Components

// Atoms
import { Wrapper } from '../atoms/MainRecipe/Wrapper';
import { Col } from '../atoms/Col';
import { Row } from '../atoms/Row';

// Molecules
import { MainRecipeImage } from '../molecules/MainRecipe/MainRecipeImage';

// Organisms

const MainRecipe = () => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src="https://www.chowstatic.com/assets/2014/09/30264_3000x2000_basic_whole_roasted_chicken.jpg" />
			</Col>
		</Row>
	</Wrapper>
);

export { MainRecipe };
