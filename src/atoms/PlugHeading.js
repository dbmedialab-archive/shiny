import React from 'react';

import { Heading } from './Heading';

const PlugHeading = props => <Heading marginTopFactor={1/4} marginBottomFactor={1/2} {...props} />;

export { PlugHeading };
export const SmallPlugHeading  = props => <PlugHeading size="small" {...props} />;
export const MediumPlugHeading = props => <PlugHeading size="medium" {...props} />;
export const LargePlugHeading  = props => <PlugHeading size="large" {...props} />;
export const XLargePlugHeading = props => <PlugHeading size="xlarge" {...props} />;
export const HugePlugHeading   = props => <PlugHeading size="huge" {...props} />;
