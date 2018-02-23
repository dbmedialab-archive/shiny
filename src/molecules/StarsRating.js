import React from 'react';
import { ReactRating } from '../atoms/ReactRating';
import { SvgIcon } from '../atoms/SvgIcon';

const StarsRating = props => (
	<ReactRating
		fullSymbol={<SvgIcon name="star" color="#f4d300" />}
		emptySymbol={<SvgIcon name="star" color="#cccccc" />}
		{...props}
	/>
);

export { StarsRating };
