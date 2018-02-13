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
import { Related                 } from '../molecules/MatRelated/MatRelated';
import { LargeHorizontalHeroUnit } from '../molecules/HorizontalHeroUnit';
import { FrontLargeHeading } from '../atoms/FrontHeading';

const MainRecipe = props => (
	<Grid>
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
		<Row>
			<Col md={12} lg={6} sx={12}>
				<DetailsSection
					preferences={props.recipe.preferences}
					allergies={props.recipe.allergies}
					author={props.recipe.authors[0]}
					raiting={props.recipe.rating}
				/>
			</Col>
			<Col md={12} lg={6} sx={12}>
				<Description dangerouslySetInnerHTML={{ __html: props.recipe.description.replace(/<\/?[^>]+>/g, '') }} />
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<IngredientsSection servings={props.recipe.servings} ingredients={props.recipe.ingredients} />
			</Col>
			<Col md={6}>
				<Row>
					<StepsSection steps={props.recipe.steps} />
				</Row>
				<Row>
					<Col xs={12}>
						<FrontLargeHeading textColor="primary" >Trinn-for-trinn-video</FrontLargeHeading>
					</Col>
				</Row>
				<Row>
					<iframe
						title="video"
						width="100%"
						src="https://www.dagbladet.no/video/embed/Z44J5oi1Jfc?autoplay=false"
					/>

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
		<Related
			entities={[
				{ name: 'difficulty', value: props.recipe.difficulty },
				{ name: 'activity', value: props.recipe.timeCooking },
				{ name: 'total-time', value: props.recipe.timeTotal },
			]}
			headerTitle={props.recipe.title}
		/>
	</Grid>
);

MainRecipe.propTypes = {
	recipe: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { MainRecipe };
