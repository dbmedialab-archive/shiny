import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label  } from '../atoms/Label';

const Footer = styled.footer`
	order: ${props => props.order};
`;
Footer.propTypes = {
	order: PropTypes.number,
};
Footer.defaultProps = {
	order: 0,
};

const Labels = ({ labels, ...rest }) => (
	<Footer {...rest}>
		{labels.map(label => (
			<Label
				key={label.text}
				backgroundColor={label.backgroundColor}
				backgroundHoverShade={label.backgroundHoverShade}
				textColor={label.textColor}
			>{label.text}
			</Label>
		))
		}
	</Footer>
);

Labels.propTypes = {
	labels: PropTypes.arrayOf(PropTypes.shape({
		backgroundColor: PropTypes.string,
		backgroundHoverShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
		textColor: PropTypes.string,
		text: PropTypes.string,
	})).isRequired,
};

export { Labels };
