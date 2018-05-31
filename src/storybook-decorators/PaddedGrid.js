import React from 'react';
import styled from 'styled-components';

import { Grid } from '..';

export const PaddedGrid = styled(Grid)`
	padding-top: calc(2*${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2*${props => props.theme.variables.verticalBase});
`;

const StorybookPaddedGrid = stories => <PaddedGrid>{stories()}</PaddedGrid>;

export { StorybookPaddedGrid };
