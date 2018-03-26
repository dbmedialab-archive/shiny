import React from 'react';
import PropTypes from 'prop-types';
import { ReactRating } from '../atoms/ReactRating';
import { SvgIcon } from '../atoms/SvgIcon';

const StarsRating = props => (
	<React.Fragment>
		<ReactRating
			fullSymbol={<SvgIcon name="star" color="#f4d300" />}
			emptySymbol={<SvgIcon name="star" color="#cccccc" />}
			{...props}
		/>
	</React.Fragment>
);

StarsRating.defaultProps = {
	value: 0,
	numVotes: 0,

};

StarsRating.propTypes = {
	value: PropTypes.number,
	numVotes: PropTypes.number,
};

export { StarsRating };
