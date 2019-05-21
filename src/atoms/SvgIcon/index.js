import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

const icons = {
	'activity': () => import('./ActivityTime'),
	'aller': () => import('./Aller'),
	'backNav': () => import('./BackNav'),
	'circle-with-text': () => import('./CircleWithText'),
	'crossed-video-camera': () => import('./CrossedVideoCamera'),
	'dagbladet': () => import('./Dagbladet'),
	'dagbladetVideo': () => import('./DagbladetVideo'),
	'difficulty': () => import('./Difficulty'),
	'double-arrow': () => import('./DoubleArrow'),
	'egg': () => import('./Egg'),
	'exclamation-mark': () => import('./ExclamationMark'),
	'facebook': () => import('./FaceBook'),
	'fish': () => import('./Fish'),
	'gears': () => import('./Gears'),
	'gluten': () => import('./Gluten'),
	'hamburger': () => import('./Hamburger'),
	'kk': () => import('./KK'),
	'laktose': () => import('./Lactose'),
	'mail': () => import('./Mail'),
	'not-found': () => import('./NotFound'),
	'nut': () => import('./Nut'),
	'oppskrift-loader': () => import('./OppskriftLoader'),
	'oppskrift-logo': () => import('./OppskriftLogo'),
	'oppskrift-mobile-logo': () => import('./OppskriftMobileLogo'),
	'pinterest': () => import('./Pinterest'),
	'play': () => import('./Play'),
	'pork': () => import('./Pork'),
	'skalldyr': () => import('./ShellFish'),
	'star': () => import('./Star'),
	'total-time': () => import('./TotalTime'),
	'twitter': () => import('./Twitter'),
	'user': () => import('./Avatar'),
	'vegan': () => import('./Vegan'),
	'vegetarian': () => import('./Vegetarian'),
	'youtube': () => import('./YouTube'),
	'default': () => <div />,
};

class SvgIcon extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { module: icons.default };
	}

	async componentWillMount() {
		try {
			const { name } = this.props;
			const resolveIcon = icons[name] || icons.default();
			const response = await resolveIcon();
			return Promise.resolve(this.setState({ module: response.default }));
		} catch (error) {
			return error;
		}
	}

	render() {
		const { module: Icon } = this.state;
		const {
			size, color, className, ...rest
		} = this.props;
		return (
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} color={color} className={className}>
				{ Icon ? <Icon {...this.props} /> : icons.default}
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
