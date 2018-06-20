import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { getVariable } from '../utils';
import { Col } from '..';
import { XLargePlugHeading } from '..';
import { Button } from '..';
import { SvgIcon } from '..';

const ErrorWrapper = styled(Col)`
	text-align: center;
	font-family: Cabin,sans-serif;
	padding: 3rem;
`;

const ReloadButton = styled(Button)`
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
	icon, message, AdditionalInfo, onRetryButtonClick, iconColor,
}) => {
	return (
		<React.Fragment>
			<ErrorWrapper center="xs">
				<SvgIcon name={icon} size={4} size-sm={5} color={iconColor} />
				<XLargePlugHeading>{message}</XLargePlugHeading>
				{AdditionalInfo && <AdditionalInfo />}
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
	AdditionalInfo: propTypes.func,
	onRetryButtonClick: propTypes.func,
	icon: propTypes.string,
	iconColor: propTypes.string,
};

Error.defaultProps = {
	message: 'Det har oppstått en feil',
	AdditionalInfo: () => null,
	icon: 'exclamation-mark',
	onRetryButtonClick: undefined,
	iconColor: 'primary',
};

export { Error };
