
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SvgIcon } from './SvgIcon';

const direction = ({ direction }) => {
	switch (direction) {
	case 'column-reverse': return 'rotate(270deg)';
	case 'column': return 'rotate(90deg)';
	case 'row-reverse': return 'scale(-1, 1)';
	default: return 'rotate(0deg)';
	}
};

const Container = styled.span`
	cursor: ${({ editable }) => (editable ? 'pointer' : 'inherit')};
	display: inline-block;
	transform:${direction};
	width: ${props => props.size}rem;
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}
`;

const FilledContainer = styled.span`
	display: inline-block;
	overflow: hidden;
	top: 0;
	width: ${({ percent }) => percent}%;
`;

class RatingSymbol extends React.PureComponent {
	render() {
		const {
			percent,
			onClick,
			editable,
			direction,
			onMouseLeave,
			onMouseMove,
			...props
		} = this.props;

		function handleMouseClick(e) {
			if (editable && onClick) {
				e.preventDefault();
				onClick(e);
			}
		}

		return (
			<Container
				direction={direction}
				role="button"
				editable={editable}
				onClick={handleMouseClick}
				onMouseMove={onMouseMove}
				onMouseLeave={onMouseLeave}
				size={props.size}
				size-sm={props['size-sm']}
			>
				<FilledContainer percent={percent}>
					<SvgIcon
						{...props}
					/>
				</FilledContainer>
			</Container>
		);
	}
}
RatingSymbol.propTypes = {
	'editable': PropTypes.bool.isRequired,
	'percent': PropTypes.number.isRequired,
	'onClick': PropTypes.func,
	'onMouseLeave': PropTypes.func,
	'onMouseMove': PropTypes.func,
	'direction': PropTypes.string,
	'size': PropTypes.number,
	'size-sm': PropTypes.number,
};

RatingSymbol.defaultProps = {
	'direction': 'row',
	'onClick': () => undefined,
	'onMouseLeave': () => undefined,
	'onMouseMove': () => undefined,
	'size': 3.2,
	'size-sm': null,
};
export { RatingSymbol };
