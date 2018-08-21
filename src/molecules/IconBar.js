import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { IconWithText } from '../atoms/IconWithText';

const Bar = styled.div`
	display: flex;
	justify-content: center;
`;

const IconBar = ({
	entities,
	iconSize,
	textSize,
}) => (
	<Bar>
		{
			entities.map((entity, i) => (
				<IconWithText
					{...entity}
					textSize={textSize}
					iconSize={iconSize}
				/>
			))
		}
	</Bar>
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
