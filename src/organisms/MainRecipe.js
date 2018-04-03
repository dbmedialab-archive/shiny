import React from 'react';
import propTypes from 'prop-types';

import { ColorTextBox            } from '../atoms/MainRecipe/ColorTextBox';
import {
	Grid,
	Row,
	Col,
	TagSection,
} from '..';
import { RecipeMetaData          } from '../molecules/MainRecipe/RecipeMetaData';
import { RecipeIngredients       } from '../molecules/MainRecipe/RecipeIngredients';
import { RecipeSteps             } from '../molecules/MainRecipe/RecipeSteps';
import { LargeHorizontalHeroUnit } from '../molecules/HorizontalHeroUnit';
import { FrontLargeHeading       } from '../atoms/FrontHeading';
import { YoutubeFrame            } from '../atoms/MainRecipe/youtubeFrame';
import { SvgIcon                 } from '../atoms/SvgIcon';

const Fragment = ({ children }) => children;

const StepsGrid = Grid.extend`
	padding-top: calc(3 * ${props => props.theme.variables.verticalBase});
	padding-bottom: calc(3 * ${props => props.theme.variables.verticalBase});
`;

const PaddedCol = Col.extend`
	margin-bottom: 5rem;
`;

const MainRecipe = props => (
	<Fragment>
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
					<RecipeMetaData
						preferences={props.recipe.preferences}
						allergies={props.recipe.allergies}
						author={props.recipe.authors[0]}
						raiting={props.recipe.rating}
					/>
				</Col>
				<Col md={6} lg={6} xs={12}>
					<ColorTextBox dangerouslySetInnerHTML={{ __html: props.recipe.description.replace(/<\/?[^>]+>/g, '') }} />
				</Col>
			</Row>
		</Grid>
		<StepsGrid>
			<Row>
				<Col xs={12} md={6}>
					<RecipeIngredients servings={props.recipe.servings} parts={props.recipe.parts} />
				</Col>
				<Col xs={12} md={6}>
					<Row>
						<Col xs={12} >
							<RecipeSteps steps={props.recipe.steps} />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<FrontLargeHeading textColor="primary" >Trinn-for-trinn-video</FrontLargeHeading>
						</Col>
					</Row>
					<Row center="xs">
						<Col xs={12}>
							<YoutubeFrame>
								<iframe
									title="video"
									width="10%"
									src="https://www.dagbladet.no/video/embed/Z44J5oi1Jfc?autoplay=false"
								/>
							</YoutubeFrame>

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
					<Row>
						<PaddedCol xs={12}>
							<FrontLargeHeading textColor="primary" lineColor="primary">DEL OPPSKRIFTEN</FrontLargeHeading>
							<SvgIcon name={'mail'} size={5} />
							<SvgIcon name={'pinterest'} size={5} />
						</PaddedCol>
					</Row>
				</Col>
			</Row>
		</StepsGrid>
	</Fragment>
);

MainRecipe.propTypes = {
	recipe: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { MainRecipe };
