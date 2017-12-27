import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = AdWrapper.extend`
  ${props => (props.sticky === 'right' ? 'left:calc(100% + 15px);' : 'right:calc(100% + 15px);')};
  position: absolute;
  top: 0;
`;

const StickyAd = ({
	children, width, height, sticky,
}) => (
	<Sticky>
		<StyledAdWrapper height={height} width={width} sticky={sticky}>
			{children}
		</StyledAdWrapper>
	</Sticky>
);

StickyAd.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	sticky: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

StickyAd.defaultProps = {
	width: '320px',
	height: '250px',
};

export { StickyAd };
