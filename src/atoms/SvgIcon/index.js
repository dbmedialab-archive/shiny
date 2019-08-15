import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dorrisIcons from './dorris';
import defaultIconSet from './default';

import { SvgIconWrapper } from './SvgIconWrapper';

const iconSets = {
	default: defaultIconSet,
	dorris: dorrisIcons,
};

class SvgIcon extends React.PureComponent {
	render() {
		const {
			set,
			name,
			className,
			size,
			...rest
		} = this.props;
		const setName = set || 'default';
		const iconName = name || 'default';
		const LazyIcon = iconSets[setName][iconName];
		return (
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} className={className}>
				<LazyIcon {...rest} />
			</SvgIconWrapper>
		);
	}
}

SvgIcon.propTypes = {
	'set': PropTypes.oneOf(['default', 'dorris']),
	'size': PropTypes.oneOfType([PropTypes.number,  PropTypes.func]),
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
