import React from 'react';
import propTypes from 'prop-types';

import { Description        } from '../atoms/MainRecipe/Description';
import {
	Grid,
	Row,
	Col,
} from '..';
import { MainRecipeImage    } from '../molecules/MainRecipe/MainRecipeImage';
import { DetailsSection     } from '../molecules/MainRecipe/DetailsSection';
import { ComplexitySection  } from '../molecules/MainRecipe/ComplexitySection';
import { IngredientsSection } from '../molecules/MainRecipe/IngredientsSection';
import { StepsSection       } from '../molecules/MainRecipe/StepsSection';
import { Related            } from '../molecules/MatRelated/MatRelated';
import { AdTags             } from './adTags';

const MainRecipe = props => (
	<Grid>
		<Row>
			<Col md={7}>
				<MainRecipeImage src={props.recipe.images[0].largeLandscape} />
			</Col>
			<Col md={5}>
				<ComplexitySection
					headerTitle={props.recipe.title}
					entities={[
						{ slug: 'difficulty', value: props.recipe.difficulty },
						{ slug: 'activityTime', value: props.recipe.timeCooking },
						{ slug: 'totalTime', value: props.recipe.timeTotal },
					]}
				/>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection
					preferences={props.recipe.preferences}
					allergies={props.recipe.allergies}
					author={props.recipe.authors[0]}
					raiting={props.recipe.rating}
				/>
			</Col>
			<Col md={6}>
				<Description>
					<span>{ props.recipe.description.replace(/<\/?[^>]+>/g, '') }</span>
				</Description>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<IngredientsSection servings={props.recipe.servings} ingredients={props.recipe.ingredients} />
			</Col>
			<Col md={6}>
				<StepsSection steps={props.recipe.steps} />
			</Col>
		</Row>
		<AdTags tags={props.recipe.tags} />
		<Related
			entities={[
				{ slug: 'difficulty', value: props.recipe.difficulty },
				{ slug: 'activityTime', value: props.recipe.timeCooking },
				{ slug: 'totalTime', value: props.recipe.timeTotal },
			]}
			headerTitle={props.recipe.title}
		/>
	</Grid>
);

MainRecipe.propTypes = {
	recipe: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { MainRecipe };
