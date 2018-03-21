import React from 'react';
import { LinkBarLinkBase } from './LinkBarLinkBase';

const LinkBarHeading = LinkBarLinkBase.withComponent('span');

export const XSmallLinkBarHeading = props => <LinkBarHeading size="xsmall" {...props} />;
export const SmallLinkBarHeading = props => <LinkBarHeading size="small" {...props} />;
export { LinkBarHeading };
export const LargeLinkBarHeading = props => <LinkBarHeading size="large" {...props} />;
