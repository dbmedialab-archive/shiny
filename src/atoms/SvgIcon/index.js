import React from 'react';
import PropTypes from 'prop-types';
import SvgIconWrapper from './SvgIconWrapper';

import { ActivityTime } from './ActivityTime';
import { Difficulty } from './Difficulty';
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
				case 'difficulty':
					return <Difficulty {...props} />;
				case 'nut':
					return <Nut {...props} />;
				case 'fish':
				case 'fisk':
					return <Fish {...props} />;
				case 'gluten':
					return <Gluten {...props} />;
				case 'pork':
				case 'uten-svinekjott':
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
