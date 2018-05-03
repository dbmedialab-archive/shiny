import React from 'react';
import propTypes from 'prop-types';
import { getVariable } from '../utils';
import { Col, XLargePlugHeading, SmallHeading, Button, SvgIcon } from '..';

const ErrorWrapper = Col.extend`
	text-align: center;
	font-family: Cabin,sans-serif;
	padding: 3rem;
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

const Error = ({
	icon, message, additionalInfo, onRetryButtonClick, color
}) => {
	return (
		<React.Fragment>
			<ErrorWrapper center="xs">
				<SvgIcon name={icon} size={4} size-sm={5} color={color} />
				<XLargePlugHeading>{message}</XLargePlugHeading>
				{additionalInfo && <Message>{additionalInfo}</Message>}
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
	additionalInfo: propTypes.string,
	onRetryButtonClick: propTypes.func,
	icon: propTypes.string,
	color: propTypes.string,
};

Error.defaultProps = {
	message: 'Det har oppstått en feil',
	additionalInfo: '',
	icon: 'exclamation-mark',
	onRetryButtonClick: undefined,
	color: 'type',
};

export { Error };
