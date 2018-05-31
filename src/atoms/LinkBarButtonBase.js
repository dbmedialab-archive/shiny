import styled from 'styled-components';

import {
	BlockLink,
	LinkBarLinkBase,
} from '..';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarLinkBase.withComponent(Button);
export const LinkBarButtonBase = styled(SomewhatPrettyButton)`
	position: relative;
	padding-top: calc(1/2*${props => props.theme.variables.verticalBase});
	padding-bottom: calc(1/2*${props => props.theme.variables.verticalBase});
	cursor: pointer;
	`;
