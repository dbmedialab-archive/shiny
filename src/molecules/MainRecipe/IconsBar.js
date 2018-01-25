import React from 'react';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { IconsBarWrapper } from '../../atoms/MainRecipe/IconsBarWrapper';
import { EasyDifficulty } from '../MatIcons/EasyDifficulty';
import { ActivityTime } from '../MatIcons/ActivityTime';
import { TotalTime } from '../MatIcons/TotalTime';

class IconsBar extends React.Component {
	render() {
		return (
			<IconsBarWrapper>
				<EasyDifficulty />
				<ActivityTime />
				<TotalTime />
			</IconsBarWrapper>
		);
	}
}

export { IconsBar };
