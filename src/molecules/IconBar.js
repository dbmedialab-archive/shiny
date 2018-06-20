import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row } from '..';
import { Col } from '..';
import { IconWithText } from '..';

const PaddingLess = styled(Col)`
	padding: 0;
`;

const RowBase = styled(Row)`
	align-items: baseline;
`;

const IconBar = props => (
	<RowBase>
		{
			props.entities.map((entity, i) => (
				<PaddingLess xs={2} md={4} key={i}>
					<IconWithText {...entity} textSize={props.textSize} iconSize={props.iconSize} />
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
