import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row } from '../atoms/Row';
import { Col } from '../atoms/Col';
import { IconWithText } from '../atoms/IconWithText';

const PaddingLess = styled(Col)`
	padding: 0;
`;

const RowBase = styled(Row)`
	align-items: baseline;
`;

const IconBar = ({
	entities,
	iconSize,
	textSize,
}) => (
	<RowBase>
		{
			entities.map((entity, i) => (
				<PaddingLess xs={2} md={4} key={i}>
					<IconWithText
						{...entity}
						textSize={textSize}
						iconSize={iconSize}
					/>
				</PaddingLess>
			))
		}
	</RowBase>
);

IconBar.propTypes = {
	entities: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.number,
	})),
	textSize: PropTypes.number.isRequired,
	iconSize: PropTypes.number.isRequired,
};

IconBar.defaultProps = {
	entities: [],
};

export { IconBar };
