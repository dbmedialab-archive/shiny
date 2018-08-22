import React from 'react';
// import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// import { FontIcon } from './FontIcon';
import { BorderedButton } from './BorderedButton';
// import { getColor } from '../utils';

// const Header = styled.header`
// 	display: flex;
// 	justify-content: space-between;
// 	border-bottom: .1rem solid #c0c0c0;
// 	align-items: center;
// 	margin-bottom: 1.6rem;
// `;

// const Heading = styled.h1`
// 	font-size: 1.6rem;
//     font-weight: normal;
//     display: block;
//     padding: 0 0 1.28rem 0;
// 	line-height: 2.24rem;
// `;

// const CloseButton = styled(BorderedButton)`
// 	font-size: 1.1rem;
// 	margin: 0 0 1.28rem 0;
// 	background: transparent;
// 	border: 1px solid transparent;

// 	&:focus, &:hover {
// 		outline: none;
// 		background: transparent;
// 		border: 1px solid ${props => getColor('grayTint')};
// 		color: inherit;
// 	}
// `;

const LogiclessModal = ({
	isOpen, closeModal, children, title, appElement, width,
}) => {
	// Modal.setAppElement(appElement);
	return <BorderedButton>LUKK</BorderedButton>;
};

LogiclessModal.propTypes = {
	width: PropTypes.string,
	appElement: PropTypes.string,
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	title: PropTypes.node.isRequired,
};

LogiclessModal.defaultProps = {
	width: '60rem',
	appElement: '#__next',
};


export { LogiclessModal };
