import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import dorrisIcons from './dorris';
import defaultIconSet from './default';

import { SvgIconWrapper } from './SvgIconWrapper';

const iconSets = {
	default: defaultIconSet,
	dorris: dorrisIcons,
};

class SvgIcon extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { LazyIcon: () => null };
	}

	UNSAFE_componentWillMount() {
		const { set, name } = this.props;
		const setName = set || 'default';
		const iconName = name || 'default';
		const LazyIcon = iconSets[setName][iconName];
		return this.setState({ LazyIcon });
	}

	render() {
		const { LazyIcon } = this.state;
		const {
			size, className, ...rest
		} = this.props;
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
