import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

/* eslint-disable global-require */
const icons = {
	'activity': () => require('./ActivityTime').default,
	'difficulty': () => require('./Difficulty').default,
	'nut': () => require('./Nut').default,
	'fish': () => require('./Fish').default,
	'gluten': () => require('./Gluten').default,
	'pork': () => require('./Pork').default,
	'total-time': () => require('./TotalTime').default,
	'vegan': () => require('./Vegan').default,
	'vegetarian': () => require('./Vegetarian').default,
	'star': () => require('./Star').default,
	'laktose': () => require('./Lactose').default,
	'egg': () => require('./Egg').default,
	'skalldyr': () => require('./ShellFish').default,
	'mail': () => require('./Mail').default,
	'twitter': () => require('./Twitter').default,
	'double-arrow': () => require('./DoubleArrow').default,
	'pinterest': () => require('./Pinterest').default,
	'circle-with-text': () => require('./CircleWithText').default,
	'facebook': () => require('./FaceBook').default,
	'user': () => require('./Avatar').default,
	'kk': () => require('./KK').default,
	'aller': () => require('./Aller').default,
	'dagbladet': () => require('./Dagbladet').default,
	'oppskrift-logo': () => require('./OppskriftLogo').default,
	'oppskrift-mobile-logo': () => require('./OppskriftMobileLogo').default,
	'oppskrift-loader': () => require('./OppskriftLoader').default,
	'crossed-video-camera': () => require('./CrossedVideoCamera').default,
	'exclamation': () => require('./ExclamationMark').default,
	'youtube': () => require('./YouTube').default,
	'play': () => require('./Play').default,
	'dagbladetVideo': () => require('./DagbladetVideo').default,
	'backNav': () => require('./BackNav').default,
	'not-found': () => require('./NotFound').default,
	'elseDiff': () => () => <div />,
};
/* eslint-enable global-require */

const SvgIcon = ({ name, ...props }) => {
	const resolveIcon = icons[name] || icons.elseDiff;
	const Icon = resolveIcon();

	return (
		<SvgIconWrapper {...props}>
			<Icon {...props} />
		</SvgIconWrapper>
	);
};

SvgIcon.propTypes = {
	'size': PropTypes.number,
	'size-sm': PropTypes.number,
	'name': PropTypes.string,
	'color': PropTypes.string,
	'className': PropTypes.string,
};
SvgIcon.defaultProps = {
	'size': 3.2,
	'size-sm': null,
	'name': '',
	'color': undefined,
	'className': '',
};

const AbsolutelyCenteredSvgIcon = styled(SvgIcon)`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
`;

export {
	AbsolutelyCenteredSvgIcon,
	SvgIcon,
};
