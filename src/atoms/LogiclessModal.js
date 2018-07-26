import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontIcon } from './FontIcon';
import { BorderedButton } from './BorderedButton';
import { getColor } from '../utils';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	border-bottom: .1rem solid #c0c0c0;
	align-items: center;
	margin-bottom: 1.6rem;
`;

const Heading = styled.h1`
	font-size: 1.6rem;
    font-weight: normal;
    display: block;
    padding: 0 0 1.28rem 0;
	line-height: 2.24rem;
`;

const CloseButton = styled(BorderedButton)`
	font-size: 1.1rem;
	margin: 0 0 1.28rem 0;
	background: transparent;
	border: 1px solid transparent;

	&:focus, &:hover {
		outline: none;
		background: transparent;
		border: 1px solid ${props => getColor('grayTint')};
		color: inherit;
	}
`;

const LogiclessModal = ({
	isOpen, closeModal, children, title, appElement, width,
}) => {
	Modal.setAppElement(appElement);
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.66)',
				},
				content: {
					width,
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
				},
			}}
		>
			<Header>
				<Heading>{title}</Heading>
				<CloseButton onClick={closeModal}><FontIcon name="close" size={1.8} /> LUKK</CloseButton>
			</Header>
			{children}
		</Modal>
	);
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
