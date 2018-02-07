import React from 'react';
import propTypes from 'prop-types';
import { Row } from '../atoms/Row';
import { Col } from '../atoms/Col';
import { IconWithText } from '../atoms/IconWithText';

class IconBar extends React.Component {
	static renderIcons(entities) {
		if (!entities) {
			return null;
		}

		return entities.map((entity) => {
			return (
				<Col xs={4}>
					<IconWithText {...entity} textSize={1.6} />
				</Col>
			);
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
