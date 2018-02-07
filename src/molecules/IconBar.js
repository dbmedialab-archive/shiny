import React from 'react';
import propTypes from 'prop-types';
import { Row } from '../atoms/Row';
import { Col } from '../atoms/Col';

// Icons
import { ActivityTime } from '../atoms/SvgIcon/ActivityTime';
import { TotalTime    } from '../atoms/SvgIcon/TotalTime';
import { Fish         } from '../atoms/SvgIcon/Fish';

class IconBar extends React.Component {
	static getIcon({ name, value }) {
		switch (name) {
		case 'activityTime':
			return <ActivityTime />;
		case 'totalTime':
			return <TotalTime />;
		case 'fish':
			return <Fish />;
		default:
			return null;
		}
	}

	static renderIcons(entities) {
		if (!entities) {
			return null;
		}

		return entities.map((entity) => {
			return <Col xs={4}>{ IconBar.getIcon(entity) }</Col>;
		});
	}

	render() {
		const { entities } = this.props;
		return (
			<Row>
				{ entities ? IconBar.renderIcons(entities) : '' }
			</Row>
		);
	}
}

IconBar.propTypes = {
	entities: propTypes.arrayOf({
		name: propTypes.string.isRequired,
		value: propTypes.number,
	}),
};

IconBar.defaultProps = {
	entities: [],
};

export { IconBar };
