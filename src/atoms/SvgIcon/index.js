import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

const icons = {
	'activity': () => import('./ActivityTime'),
	'difficulty': () => import('./Difficulty'),
	'nut': () => import('./Nut'),
	'fish': () => import('./Fish'),
	'gluten': () => import('./Gluten'),
	'pork': () => import('./Pork'),
	'total-time': () => import('./TotalTime'),
	'vegan': () => import('./Vegan'),
	'vegetarian': () => import('./Vegetarian'),
	'star': () => import('./Star'),
	'laktose': () => import('./Lactose'),
	'egg': () => import('./Egg'),
	'skalldyr': () => import('./ShellFish'),
	'mail': () => import('./Mail'),
	'twitter': () => import('./Twitter'),
	'double-arrow': () => import('./DoubleArrow'),
	'pinterest': () => import('./Pinterest'),
	'circle-with-text': () => import('./CircleWithText'),
	'facebook': () => import('./FaceBook'),
	'user': () => import('./Avatar'),
	'kk': () => import('./KK'),
	'aller': () => import('./Aller'),
	'dagbladet': () => import('./Dagbladet'),
	'oppskrift-logo': () => import('./OppskriftLogo'),
	'oppskrift-mobile-logo': () => import('./OppskriftMobileLogo'),
	'oppskrift-loader': () => import('./OppskriftLoader'),
	'crossed-video-camera': () => import('./CrossedVideoCamera'),
	'exclamation': () => import('./ExclamationMark'),
	'youtube': () => import('./YouTube'),
	'play': () => import('./Play'),
	'dagbladetVideo': () => import('./DagbladetVideo'),
	'backNav': () => import('./BackNav'),
	'not-found': () => import('./NotFound'),
	'elseDiff': () => () => <span />,
};

class SvgIcon extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { module: null };
	}

	async componentDidMount() {
		const { name } = this.props;
		const resolveIcon = icons[name] || icons.elseDiff;
		const response = await resolveIcon();
		return Promise.resolve(this.setState({ module: response.default }));
	}

	render() {
		const { module: Icon } = this.state;
		const {
			size, color, className, ...rest
		} = this.props;
		return (
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} color={color} className={className}>
				{ Icon ? <Icon {...this.props} /> : icons.elseDiff}
			</SvgIconWrapper>
		);
	}
}

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
