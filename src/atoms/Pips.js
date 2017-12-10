import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

/**
 * A small circle that is easy to count.
 *
 * Used in dice to signify a number or value.
 */
const Pip = withTheme(props => <circle r="10" fill={props.theme.colors[props.pipColor]} {...props} />);

const WestPip = props => <Pip cx="25" cy="50" {...props} />;
const EastPip = props => <Pip cx="75" cy="50" {...props} />;
const CenterPip = props => <Pip cx="50" cy="50" {...props} />;
const NorthWestPip = props => <Pip cx="25" cy="25" {...props} />;
const SouthWestPip = props => <Pip cx="25" cy="75" {...props} />;
const NorthEastPip = props => <Pip cx="75" cy="25" {...props} />;
const SouthEastPip = props => <Pip cx="75" cy="75" {...props} />;

const AcePips = props => (
	<Fragment>
		<CenterPip {...props} />
	</Fragment>
);
const DeucePips = props => (
	<Fragment>
		<SouthWestPip {...props} />
		<NorthEastPip {...props} />
	</Fragment>
);

const TreyPips = props => (
	<Fragment>
		<SouthWestPip {...props} />
		<CenterPip {...props} />
		<NorthEastPip {...props} />
	</Fragment>
);

const CaterPips = props => (
	<Fragment>
		<NorthWestPip {...props} />
		<SouthEastPip {...props} />
		<NorthEastPip {...props} />
		<SouthWestPip {...props} />
	</Fragment>
);

const CinquePips = props => (
	<Fragment>
		<NorthWestPip {...props} />
		<SouthEastPip {...props} />
		<CenterPip {...props} />
		<NorthEastPip {...props} />
		<SouthWestPip {...props} />
	</Fragment>
);

const SicePips = props => (
	<Fragment>
		<NorthWestPip {...props} />
		<WestPip {...props} />
		<SouthWestPip {...props} />
		<NorthEastPip {...props} />
		<EastPip {...props} />
		<SouthEastPip {...props} />
	</Fragment>
);

const Pips = (props) => {
	if (props.value === 6) return <SicePips {...props} />;
	if (props.value === 5) return <CinquePips {...props} />;
	if (props.value === 4) return <CaterPips {...props} />;
	if (props.value === 3) return <TreyPips {...props} />;
	if (props.value === 2) return <DeucePips {...props} />;
	if (props.value === 1) return <AcePips {...props} />;
	return () => null;
};
Pips.propTypes = {
	value: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

export default Pips;
export { Pips };
