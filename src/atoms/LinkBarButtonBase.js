import {
	BlockLink,
	LinkBarLinkBase,
} from '..';

const Button = BlockLink.withComponent('button');
const SomewhatPrettyButton = LinkBarLinkBase.withComponent(Button);
export const LinkBarButtonBase = SomewhatPrettyButton.extend`
	position: relative;
	cursor: pointer;
	`;
