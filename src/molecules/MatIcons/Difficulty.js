import React from 'react';

import { EasyDifficulty } from './EasyDifficulty';
import { MediumDifficulty } from './MediumDifficulty';
import { HighDifficulty } from './HighDifficulty';
import PropTypes from "prop-types";

class Difficulty extends React.Component {

	static getIcon(level) {
		switch (level) {
		case 1:
			return <EasyDifficulty />;
		case 2:
			return <MediumDifficulty />;
		case 3:
			return <HighDifficulty />;
		default:
			return null;
		}
	}

	render() {
		const {value} = this.props;
		return Difficulty.getIcon(value);
	}
}

Difficulty.defaultProps = {
	value: 0,
};

Difficulty.propTypes = {
	value: PropTypes.number,
};

export { Difficulty };
