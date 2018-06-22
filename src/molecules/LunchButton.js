// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import { getColor } from '../utils';
import { removeFalsyValuesFromArray } from '../utils/remove-falsy-values-from-array';

// Atoms
import { BlockLinkWithBackground as Link } from '../atoms/BlockLinkWithBackground';
import { LunchKicker as Kicker } from '../atoms/LunchKicker';
import { MediumHeading } from '../atoms/Heading';

const Heading = styled(MediumHeading)`
	color: ${props => getColor(props.color)};
	margin: 0;
`;

const LunchButton = ({
	path,
	slug,
	title,
	kicker,
	color,
	kickerShade,
	...rest
}) => {
	const pathArray = removeFalsyValuesFromArray([path, slug]);
	const link = `/${pathArray.join('/')}`;

	return (
		<Link href={link} {...rest}>
			{kicker && <Kicker {...{ textColor: color, kickerShade }}>{kicker}</Kicker>}
			<Heading marginTopFactor={0} marginBottomFactor={0} color={color}>{title}</Heading>
		</Link>
	);
};

LunchButton.propTypes = {
	path: PropTypes.string,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	kicker: PropTypes.string,
	background: PropTypes.string,
	color: PropTypes.string,
	borderShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
	kickerShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
};

LunchButton.defaultProps = {
	path: '',
	kicker: 'Les mer om',
	background: 'grayTintLight',
	color: 'type',
	borderShade: '',
	kickerShade: 'light',
};

export { LunchButton };
