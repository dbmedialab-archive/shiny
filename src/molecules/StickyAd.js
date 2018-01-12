import React, { StatelessComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = AdWrapper.extend`
  position: sticky;
  top: 0;
`;

const StickyWrapper = styled.div`
	position: absolute;
	top: 64px;
	left: calc(50% + 490px + 15px);
	height: 100%;
	width: 300px;
`;

const StickyAd  = ({
	children, width, height, sticky,
}) => (
	<StickyWrapper sticky={sticky}>
		<StyledAdWrapper height={height} width={width}>
			{children}
		</StyledAdWrapper>
	</StickyWrapper>
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
