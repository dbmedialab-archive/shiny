import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { unshadeColorString } from '../utils/unshade-color-string';

const Pip = withTheme(props => <circle r="10" fill={props.theme.colors[props.pipColor]} {...props} />);

const AcePips = props => (
	<Fragment>
		<Pip cx="50" cy="50" {...props} />
	</Fragment>
);
const DeucePips = props => (
	<Fragment>
		<Pip cx="75" cy="25" {...props} />
		<Pip cx="25" cy="75" {...props} />
	</Fragment>
);

const TreyPips = props => (
	<Fragment>
		<Pip cx="75" cy="25" {...props} />
		<Pip cx="50" cy="50" {...props} />
		<Pip cx="25" cy="75" {...props} />
	</Fragment>
);

const CaterPips = props => (
	<Fragment>
		<Pip cx="25" cy="25" {...props} />
		<Pip cx="25" cy="75" {...props} />
		<Pip cx="75" cy="25" {...props} />
		<Pip cx="75" cy="75" {...props} />
	</Fragment>
);

const CinquePips = props => (
	<Fragment>
		<Pip cx="25" cy="25" {...props} />
		<Pip cx="25" cy="75" {...props} />
		<Pip cx="50" cy="50" {...props} />
		<Pip cx="75" cy="25" {...props} />
		<Pip cx="75" cy="75" {...props} />
	</Fragment>
);

const SicePips = props => (
	<Fragment>
		<Pip cx="25" cy="25" {...props} />
		<Pip cx="25" cy="50" {...props} />
		<Pip cx="25" cy="75" {...props} />
		<Pip cx="75" cy="25" {...props} />
		<Pip cx="75" cy="50" {...props} />
		<Pip cx="75" cy="75" {...props} />
	</Fragment>
);

const Block = styled.div`
	line-height: 0;
	width: ${props => props.size};
`;

const Pips = (props) => {
	if (props.value === 6) return <SicePips {...props} />;
	if (props.value === 5) return <CinquePips {...props} />;
	if (props.value === 4) return <CaterPips {...props} />;
	if (props.value === 3) return <TreyPips {...props} />;
	if (props.value === 2) return <DeucePips {...props} />;
	return <AcePips {...props} />;
};


const Dice = ({
	size,
	theme,
	color,
	faceShade,
	pipColor,
	value,
}) => {
	return (
		<Block size={size}>
			<svg className="dice green" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
				<rect className="face" height="100" width="100" x="0" y="0" fill={theme.colors[color]} />
				<path
					className="face-shade"
					d="M 0 0 L 100 0 L 0 100 z"
					fill={theme.colors[
						unshadeColorString(color) + faceShade
					]}
				/>
				<Pips value={value} pipColor={pipColor} />
			</svg>
		</Block>
	);
};
Dice.propTypes ={
	color: PropTypes.string,
	faceShade: PropTypes.oneOf(['', 'Dark', 'Light', 'Lighter']),
	pipColor: PropTypes.string,
	size: PropTypes.string,
	theme: PropTypes.shape({}).isRequired,
	value: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};
Dice.defaultProps = {
	color: 'primary',
	faceShade: 'Dark',
	pipColor: 'white',
	size: '2.4rem',
};

export default withTheme(Dice);
