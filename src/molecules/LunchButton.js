// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { removeFalsyValuesFromArray } from '../utils/remove-falsy-values-from-array';

// Atoms
import { BlockLinkWithBackground as Link } from '../atoms/BlockLinkWithBackground';
import { LunchKicker as Kicker } from '../atoms/LunchKicker';
import { MediumHeading } from '../atoms/Heading';

const Heading = MediumHeading.extend`
	color: ${props => props.theme.colors[props.color]};
	margin: 0;
`;

const LunchButton = ({
	path,
	slug,
	title,
	kicker,
	buttonClasses,
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
	buttonClasses: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	background: PropTypes.string,
	color: PropTypes.string,
	borderShade: PropTypes.oneOf(['', 'Dark', 'Light', 'Lighter']),
	kickerShade: PropTypes.oneOf(['', 'Dark', 'Light', 'Lighter']),
};

LunchButton.defaultProps = {
	path: '',
	kicker: 'Les mer om',
	buttonClasses: '',
	background: 'grayTintLight',
	color: 'type',
	borderShade: '',
	kickerShade: 'Light',
};

export { LunchButton };
