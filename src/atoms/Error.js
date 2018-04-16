import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { getColor, getVariable } from '../utils';
import { Col, XLargePlugHeading, SmallHeading, Button } from '..';

const ErrorWrapper = Col.extend`
	text-align: center;
	font-family: Cabin,sans-serif;
	padding: 3rem;
`;

const ExclamationPoint = styled.div`
	color: ${getColor('primary')};
	font-size: 7rem;
	line-height: 7rem;
`;

const Message = SmallHeading.extend`
	font-weight: 400;
`;

const ReloadButton = Button.extend`
	border: none;
	border-radius: 0.3rem;
	padding: 1.5rem;
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	margin-top: 2rem;
	text-transform: uppercase;
	outline: none;
`;

const Error = ({ message, onRetryButtonClick }) => {
	return (
		<React.Fragment>
			<ErrorWrapper center="xs">
				<ExclamationPoint> ! </ExclamationPoint>
				<XLargePlugHeading>Det har oppstått en feil</XLargePlugHeading>
				{message && <Message>{message}</Message>}
				{onRetryButtonClick &&
				<ReloadButton
					textColor="white"
					background="primary"
					onClick={onRetryButtonClick}
				>
					Prøv igjen
				</ReloadButton>
				}
			</ErrorWrapper>
		</React.Fragment>
	);
};

Error.propTypes = {
	message: propTypes.string,
	onRetryButtonClick: propTypes.func,
};

Error.defaultProps = {
	message: undefined,
	onRetryButtonClick: undefined,
};

export { Error };
