import React from 'react';
import PropTypes from 'prop-types';
import SvgIconWrapper from './SvgIconWrapper';

import { ActivityTime } from './ActivityTime';
import { EasyDifficulty } from './EasyDifficulty';
import { MediumDifficulty } from './MediumDifficulty';
import { HighDifficulty } from './HighDifficulty';
import { Nut } from './Nut';
import { Fish } from './Fish';
import { Gluten } from './Gluten';
import { Pork } from './Pork';
import { TotalTime } from './TotalTime';
import { Vegan } from './Vegan';
import { Vegetarian } from './Vegetarian';


const SvgIcon = props => (
	<SvgIconWrapper size={props.size}>
		{
			(() => {
				switch (props.name) {
				case 'activity':
					return <ActivityTime {...props} />;
				case 'easy-difficulty':
					return <EasyDifficulty {...props} />;
				case 'medium-difficulty':
					return <MediumDifficulty {...props} />;
				case 'high-difficulty':
					return <HighDifficulty {...props} />;
				case 'nut':
					return <Nut {...props} />;
				case 'fish':
					return <Fish {...props} />;
				case 'gluten':
					return <Gluten {...props} />;
				case 'pork':
					return <Pork {...props} />;
				case 'total-time':
					return <TotalTime {...props} />;
				case 'vegan':
					return <Vegan {...props} />;
				case 'vegetarian':
					return <Vegetarian {...props} />;
				default:
					return null;
				}
			})()}
	</SvgIconWrapper>
);

SvgIcon.propTypes = {
	size: PropTypes.number,
	name: PropTypes.string,

};
SvgIcon.defaultProps = {
	size: 5,
	name: '',
};

export { SvgIcon };
