import styled from 'react-emotion';

import { BlockLink } from './BlockLink';
import { LinkBarElementBase } from './LinkBarElementBase';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarElementBase.withComponent(Button);
export const LinkBarButtonBase = styled(SomewhatPrettyButton)`
	position: relative;
	cursor: pointer;
	`;
