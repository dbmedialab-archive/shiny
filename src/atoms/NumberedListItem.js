import styled from 'styled-components';
import PropTypes from 'prop-types';

const NumberedListItem = styled.li`
	list-style: none;
	padding: 0;
	font-family: Cabin;
	counter-increment: item;
	margin-bottom: ${props => props.theme.variables.headingMediumLineHeight};
	line-height: ${props => props.theme.variables.headingMediumLineHeight};
	position: relative;
	padding-left: 5rem;

	::before {
		content: counter(item);
		font-family: Cabin;
		font-size: ${props => props.theme.variables.headingHugeSize};
		line-height: ${props => props.theme.variables.headingHugeSize};
		display: inline-block;
		position: absolute;
		left: 0.05rem;
		top: 0.5rem;
	}
`;

NumberedListItem.propTypes = {
	children: PropTypes.node.isRequired,
};

export { NumberedListItem };
