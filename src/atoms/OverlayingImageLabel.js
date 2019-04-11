import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Image } from './Image';

const OverlayingImageLabel = styled(Image)`
	width: ${props => props.width};
	height: ${props => props.height};
	margin-top: ${props => props.marginTop};
	object-fit: cover;
`;

const OverlayingImageLabelPropTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	alt: PropTypes.string,
	marginTop: PropTypes.string,
};

OverlayingImageLabel.propTypes = OverlayingImageLabelPropTypes;

OverlayingImageLabel.defaultProps = {
	alt: '',
	marginTop: 0,
};

export { OverlayingImageLabel, OverlayingImageLabelPropTypes };
