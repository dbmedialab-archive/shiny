import styled from 'styled-components';

import {
	BlockLink,
	LinkBarLinkBase,
} from '..';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarLinkBase.withComponent(Button);
export const LinkBarButtonBase = styled(SomewhatPrettyButton)`
	position: relative;
	cursor: pointer;
	`;
