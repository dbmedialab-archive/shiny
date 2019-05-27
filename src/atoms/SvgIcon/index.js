import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

const iconSets = {
	default: () => import('./default').then(c => c.default),
};

class SvgIcon extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { module: () => null };
	}

	async componentWillMount() {
		try {
			const { name, set } = this.props;

			const resolveIconSet = iconSets[set] || iconSets.default;
			const icons = await resolveIconSet();

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
			size, className, ...rest
		} = this.props;
		return (
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} className={className}>
				<Icon {...rest} />
			</SvgIconWrapper>
		);
	}
}

SvgIcon.propTypes = {
	'set': PropTypes.oneOf(['default', 'doris']),
	'size': PropTypes.number,
	'size-sm': PropTypes.number,
	'name': PropTypes.string,
	'className': PropTypes.string,
};
SvgIcon.defaultProps = {
	'set': 'default',
	'size': 3.2,
	'size-sm': null,
	'name': '',
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
