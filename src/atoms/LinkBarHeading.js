import React from 'react';
import { LinkBarElementBase } from './LinkBarElementBase';

const LinkBarHeading = LinkBarElementBase.withComponent('span');

export const XSmallLinkBarHeading = props => <LinkBarHeading size="xsmall" {...props} />;
export const SmallLinkBarHeading = props => <LinkBarHeading size="small" {...props} />;
export { LinkBarHeading };
export const LargeLinkBarHeading = props => <LinkBarHeading size="large" {...props} />;
