import React from 'react';
import { Grid } from '..';

const PaddedGrid = Grid.extend`
	padding-top: calc(2*${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2*${props => props.theme.variables.verticalBase});
`;

const StorybookPaddedGrid = stories => <PaddedGrid>{stories()}</PaddedGrid>;

export { StorybookPaddedGrid };
