import styled from 'styled-components';

import { BlockLink } from '..';
import { LinkBarLinkBase } from '..';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarLinkBase.withComponent(Button);
export const LinkBarButtonBase = styled(SomewhatPrettyButton)`
	position: relative;
	cursor: pointer;
	`;
