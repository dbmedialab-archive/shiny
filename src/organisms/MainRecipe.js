import React from 'react';

import { Wrapper            } from '../atoms/MainRecipe/Wrapper';
import { Description        } from '../atoms/MainRecipe/Description';
import { Col                } from '../atoms/Col';
import { Row                } from '../atoms/Row';
import { MainRecipeImage    } from '../molecules/MainRecipe/MainRecipeImage';
import { DetailsSection     } from '../molecules/MainRecipe/DetailsSection';
import { ComplexitySection  } from '../molecules/MainRecipe/ComplexitySection';
import { IngredientsSection } from '../molecules/MainRecipe/IngredientsSection';
import { StepsSection       } from '../molecules/MainRecipe/StepsSection';
import { AdTags             } from './adTags';
import Related from '../molecules/MatRelated/MatRelated';

const MainRecipe = props => (
	<Wrapper>
		<Row>
			<Col md={7}>
				<MainRecipeImage src={props.images[0].LargeLandscape || 'https://ih1.redbubble.net/image.202504306.6869/sticker,375x360-bg,ffffff.u2.png'} />
			</Col>
			<Col md={5}>
				<ComplexitySection headerTitle={props.title} entities={[{ Slug: 'difficulty', value: props.difficulty }, { Slug: 'activityTime', value: props.timeCooking }, { Slug: 'totalTime', value: props.timeTotal }]} />
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<DetailsSection preferences={props.preferences} allergies={props.allergies} author={props.authors[0]} raiting={props.rating}/>
			</Col>
			<Col md={6}>
				<Description>
					<span>{ props.description.replace(/<\/?[^>]+>/g, '') }</span>
				</Description>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<IngredientsSection servings={props.servings} ingredients={props.ingredients} />
			</Col>
			<Col md={6}>
				<StepsSection steps={props.steps} />
			</Col>
		</Row>
		<AdTags tags={props.tags} />
		<Related entities={[{ Slug: 'difficulty', value: props.difficulty }, { Slug: 'activityTime', value: props.timeCooking }, { Slug: 'totalTime', value: props.timeTotal }]}  headerTitle={props.title}/>
	</Wrapper>
);


export { MainRecipe };
