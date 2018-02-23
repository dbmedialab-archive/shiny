import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	Grid,
	Row,
	Col,
	MediumHorizontalHeroUnit,
	FrontLargeHeading,
} from '../..';

const RelatedSection = styled.section`
	padding-top: calc(2 * ${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2 * ${props => props.theme.variables.verticalBase});

	background-color: ${props => props.theme.colors.grayTintLight};
`;

const RelatedRecipe = (props) => {
	const relatedMap = props.relatedRecipes.map((item, key) => {
		return (
			<Col xs={12} sm={6} md={6}>
				<MediumHorizontalHeroUnit
					image={{
						placeholder: item.image,
						src: item.image,
						fallbackSrc: item.image,
					}}
					title={item.title}
					timeCooking={item.timeCooking}
					timeTotal={item.timeTotal}
					difficulty={item.difficulty}
					verticalPadding
				/>
			</Col>
		);
	});
	return (
		<section>
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
						{relatedMap}
					</Row>
				</Grid>
			</RelatedSection>
		</section>
	);
};

RelatedRecipe.propTypes = {
	relatedRecipes: PropTypes.arrayOf(PropTypes.node),
};

RelatedRecipe.defaultProps = {
	relatedRecipes: [],
};

export { RelatedRecipe };

