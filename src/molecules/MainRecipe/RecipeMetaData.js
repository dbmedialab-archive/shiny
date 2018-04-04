import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	Row,
	Col,
	FigCaption,
	FrontHeading,
} from '../..';

import { IconBar } from '../IconBar';
// TODO uncomment after rating will be added
// import { StarsRating } from '../../molecules/StarsRating';
import { BylineWithTwoLines } from '../../atoms/BylineWithTwoLines';

const RecipeMetaDataWrapper = styled.div`
	padding: 0;
	margin: 0 auto;
	@media screen and (min-width: ${props => props.theme.variables.mediumWidth}) {
		padding: 1% 10%;
	}
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em){
		/*mobile has different order*/
		>.order>:nth-child(1){ /*inneholder*/
			order: 2;
		}
		>.order>:nth-child(2){ /*oppskrift*/
			order: 3;
		}
		>.order>:nth-child(3){ /*passer for*/
			order: 1;
		}
		>.order>:nth-child(4){ /*rating*/
			order: 4;
		}
	}
`;

const PaddedCol = Col.extend`
	margin-top: 2rem;
`;

const RecipeMetaData  = ({
	allergies,
	preferences,
	author,
	rating,
	imgCaption,
	numVotes,
}) => {
	allergies = allergies.map((allergyItem) => {
		return {
			text: allergyItem.title,
			name: allergyItem.slug,
		};
	});
	preferences = preferences.map((preferenceItem) => {
		return {
			text: preferenceItem.title,
			name: preferenceItem.slug,
		};
	});

	return (
		<RecipeMetaDataWrapper>
			<Row>
				<PaddedCol xs md={8} mdOffset={2}>
					<FigCaption>
						{ imgCaption }
					</FigCaption>
				</PaddedCol>
			</Row>
			<Row className="order">

				{(!!allergies.length &&
				<Col xs={12} md={3} mdOffset={2}>
					<FrontHeading lineWidth={6} >Inneholder</FrontHeading>
					<Col md={10} >
						<IconBar entities={allergies} textSize={1.2} iconSize={4}  iconSizeSm={20} />
					</Col>
				</Col>)}

				<Col xs={12} md={3} mdOffset={1}>
					<FrontHeading lineWidth={6}>Oppskrift</FrontHeading>
					<BylineWithTwoLines name={author.name} email={author.email} src={author.profileImage.mediumPortrait} />
				</Col>

				{(!!preferences.length &&
				<Col xs={12} md={3} mdOffset={2}>
					<FrontHeading lineWidth={6}>Passer For</FrontHeading>
					<Col md={10} >
						<IconBar entities={preferences} textSize={1.2} iconSize={4} iconSizeSm={20} />
					</Col>
				</Col>
				)}

				<Col xs={12} md={3} mdOffset={1}>
					{/* <FrontSmallHeading lineWidth={6}>Vurdering</FrontSmallHeading> */}
					{/* <StarsRating count={5} size={29} value={rating} /> */}
				</Col>
			</Row>
		</RecipeMetaDataWrapper>
	);
};

const IconValues = PropTypes.shape({
	slug: PropTypes.string,
	value: PropTypes.number,
});

RecipeMetaData.defaultProps = {
	allergies: [],
	preferences: [],
	author: {},
	rating: 0,
	imgCaption: '',
	numVotes: 0,
};

RecipeMetaData.propTypes = {
	allergies: PropTypes.arrayOf(IconValues),
	preferences: PropTypes.arrayOf(IconValues),
	author: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		profileImage: PropTypes.shape({
			title: PropTypes.string,
			seoFilename: PropTypes.string,
			mediumPortrait: PropTypes.string,
		}),
	}),
	rating: PropTypes.number,
	imgCaption: PropTypes.string,
	numVotes: PropTypes.number,
};


export { RecipeMetaData };
