import React from 'react';
import propTypes from 'prop-types';

import { Description             } from '../atoms/MainRecipe/Description';
import {
	Grid,
	Row,
	Col,
	TagSection,
} from '..';
import { DetailsSection          } from '../molecules/MainRecipe/DetailsSection';
import { IngredientsSection      } from '../molecules/MainRecipe/IngredientsSection';
import { StepsSection            } from '../molecules/MainRecipe/StepsSection';
import { LargeHorizontalHeroUnit } from '../molecules/HorizontalHeroUnit';
import { FrontLargeHeading       } from '../atoms/FrontHeading';
import { Container } from '../atoms/MainRecipe/Iframe';

const MainRecipe = props => (
	<Grid>
		<Row>
			<Col xs={12}>
				<LargeHorizontalHeroUnit
					image={{
						src: props.recipe.images[0].largeLandscape,
						placeholder: props.recipe.images[0].largeLandscape,
					}}
					difficulty={props.recipe.difficulty}
					timeCooking={props.recipe.timeCooking}
					timeTotal={props.recipe.timeCooking}
					title={props.recipe.title}
				/>
			</Col>
		</Row>
		<Row>
			<Col md={6} lg={6} xs={12}>
				<DetailsSection
					preferences={props.recipe.preferences}
					allergies={props.recipe.allergies}
					author={props.recipe.authors[0]}
					raiting={props.recipe.rating}
				/>
			</Col>
			<Col md={6} lg={6} xs={12}>
				<Description dangerouslySetInnerHTML={{ __html: props.recipe.description.replace(/<\/?[^>]+>/g, '') }} />
			</Col>
		</Row>
		<Row>
			<Col md={6} xs={12} lg={6}>
				<IngredientsSection servings={props.recipe.servings} parts={props.recipe.parts} />
			</Col>
			<Col md={6} xs={12} lg={6}>
				<Row>
					<Col xs={12} >
						<StepsSection steps={props.recipe.steps} />
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<FrontLargeHeading textColor="primary" >Trinn-for-trinn-video</FrontLargeHeading>
					</Col>
				</Row>
				<Row center="xs">
					<Col xs>
						<Container>
							<iframe
								title="video"
								width="100%"
								src="https://www.dagbladet.no/video/embed/Z44J5oi1Jfc?autoplay=false"
							/>
						</Container>

					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<FrontLargeHeading textColor="primary" lineColor="primary">TAGGER</FrontLargeHeading>
					</Col>
				</Row>
				<Row>
					<TagSection tags={props.recipe.tags} />
				</Row>
			</Col>
		</Row>
	</Grid>
);

MainRecipe.propTypes = {
	recipe: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { MainRecipe };
