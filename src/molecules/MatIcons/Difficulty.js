import React from 'react';

import { MatIcon } from '../../atoms/MatIcon';
import { EasyDifficulty } from './EasyDifficulty';
import { MediumDifficulty } from './MediumDifficulty';
import { HighDifficulty } from './HighDifficulty';



class Difficulty extends React.Component {

	getIconImage(level) {
		switch (level) {
		case 'easy':
			return <EasyDifficulty />;
		case 'medium':
			return <MediumDifficulty />;
		case 'high':
			return <HighDifficulty />;
		default:
			return null;
		}
	}

	render() {
		return (
			<MatIcon>
				{this.getIconImage(this.props.level)}
				<div>
					nova
				</div>
			</MatIcon>
		);
	}

}

export { Difficulty };
