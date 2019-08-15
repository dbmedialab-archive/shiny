import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from 'styled-components';
import { getColor, getVariable } from '../utils';

const getRatio = ({ size }) => {
	switch (size) {
	case 'xsmall':
		return 0.5;
	case 'small':
		return 0.8;
	case 'large':
		return 1.5;
	default:
		return 1;
	}
};

const Dot = styled.div`
	${(props) => {
		const { color } = props;
		const horizontalBase = getVariable('horizontalBase')(props);
		const ratio = getRatio(props);
		const size = `calc(${ratio} * ${horizontalBase})`;
		return css`
			border-radius: 50%;
			background: ${color ? getColor(color)(props) : getColor('primary')(props)};
			width: ${size};
			height: ${size};
		`;
	}}
`;

Dot.defaultProps = {
	size: 'medium',
};

Dot.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
};
export { Dot };
