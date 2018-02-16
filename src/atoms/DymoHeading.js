import React from 'react';
import styled from 'styled-components';

import {
	Heading,
} from './Heading';

const Dymo= styled(Heading)`
	display: inline;
	padding:
		calc(1/4 * ${props => props.theme.variables.verticalBase})
		calc(1/2 * ${props => props.theme.variables.horizontalBase})
	;
	background: ${props => props.theme.colors[props.theme.colors.skinColors[props.backgroundColor]]};
	color: ${props => props.theme.colors[props.theme.colors.skinColors[props.textColor]]};
`;

Dymo.defaultProps = {
	textColor: 'splashText',
	backgroundColor: 'splashBackground',
};


const Hgroup = styled.hgroup`
	background: palevioletred;
	margin-bottom: .8rem;
`;

const Span = styled.a`
	display: inline;
	padding-left: ${props => props.theme.variables.horizontalBase};
	background: black;
`;

export const DymoHeading       = ({ ...rest }) => <Hgroup><Span><Dymo {...rest} /></Span></Hgroup>;
export const SmallDymoHeading  = ({ ...rest }) => <Hgroup><Span><Dymo size="small" {...rest} /></Span></Hgroup>;
export const MediumDymoHeading = ({ ...rest }) => <Hgroup><Span><Dymo size="medium" {...rest} /></Span></Hgroup>;
export const LargeDymoHeading  = ({ ...rest }) => <Hgroup><Span><Dymo size="large" {...rest} /></Span></Hgroup>;
export const XLargeDymoHeading = ({ ...rest }) => <Hgroup><Span><Dymo size="xlarge" {...rest} /></Span></Hgroup>;
export const HugeDymoHeading   = ({ ...rest }) => <Hgroup><Span><Dymo size="huge" {...rest} /></Span></Hgroup>;
