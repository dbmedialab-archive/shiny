
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SvgIcon } from './SvgIcon';

const Container = styled.span`
	cursor: ${({ editable }) => (editable ? 'pointer' : 'inherit')};
	display: inline-block;
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
				editable={editable}
				onClick={handleMouseClick}
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
	editable: PropTypes.bool.isRequired,
	percent: PropTypes.number.isRequired,
	onClick: PropTypes.func,
};

RatingSymbol.defaultProps = {
	onClick: () => undefined,
};
export { RatingSymbol };
