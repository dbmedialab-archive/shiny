import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

import defaultIconSet from './default';
import dorris from './dorris';

const iconSets = {
	default: defaultIconSet,
	dorris,
};

class SvgIcon extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { module: () => null };
	}

	async componentWillMount() {
		try {
			console.log('will mount start')
			const { name, set } = this.props;

			const icons = iconSets[set];

			const resolveIcon = icons[name] || icons.default();
			const response = await resolveIcon();
			console.log(response.default)
			console.log('will mount end')
			return Promise.resolve(this.setState({ module: response.default }));
		} catch (error) {
			return error;
		}
	}

	render() {
		const { module: Icon } = this.state;
		console.log('render')
		const {
			size, className, ...rest
		} = this.props;
		console.log(Icon({ ...rest }))
		return (
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} className={className}>
				<Icon {...rest} />
			</SvgIconWrapper>
		);
	}
}

SvgIcon.propTypes = {
	'set': PropTypes.oneOf(['default', 'dorris']),
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
