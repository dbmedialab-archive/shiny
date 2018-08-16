import styled from 'styled-components';

import { BlockLink } from './BlockLink';
import { LinkBarLinkBase } from './LinkBarLinkBase';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarLinkBase.withComponent(Button);
export const LinkBarButtonBase = styled(SomewhatPrettyButton)`
	position: relative;
	cursor: pointer;
	`;
