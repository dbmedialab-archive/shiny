import React from 'react';
import styled from 'react-emotion';
import { MediumHeading } from '../Heading';
import { SvgIcon } from '../SvgIcon';

const MoreStyle = styled.div`
	text-align: center;
	text-transform: uppercase;
	width: 14rem;
	cursor: pointer;
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		width: 16rem;
	} 
	
	& h1 {
		margin-bottom: 0.5rem;
		@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
			font-size: 1.6rem;
			margin-bottom: 0.5rem;
		}
	}
	
	& .icon-wrapper {
		width: 100%;
		margin-bottom: 1rem;
	}
		& .icon-wrapper:before {
			content: "";
			width: 100%;
			border-bottom: 0.3rem solid #ff790a;
			display: block;
			margin-bottom: 1.7rem;
			@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
				margin: 0 auto;
				border-bottom: 0.2rem solid #ff790a;
				width: 60%;
				margin-bottom: 0.5rem;
			}
		}
`;

const MoreComponent = props => (
	<MoreStyle>
		<MediumHeading className="heading">Vis flere</MediumHeading>
		<div className="icon-wrapper">
			<SvgIcon name="double-arrow" color="#ff790a" size={1.6} />
		</div>
	</MoreStyle>
);

export { MoreComponent };
