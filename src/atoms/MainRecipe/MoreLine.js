import React from 'react';
import styled from 'styled-components';
import { MediumHeading } from '../Heading';
import { SvgIcon } from '../SvgIcon';

const MoreStyle = styled.div`
	text-align: center;
	text-transform: uppercase;
	width: 14rem;
	& .icon-wrapper {
		width: 100%;
	}
		& .icon-wrapper:before {
			content: "";
			width: 100%;
			border-bottom: 0.2rem solid #ff790a;
			display: block;
			margin-bottom: 1.7rem;
		}
`;

export const MoreComponent = props => (
	<MoreStyle>
		<MediumHeading className="heading">Vis flere</MediumHeading>
		<div className="icon-wrapper">
			<SvgIcon name="double-arrow" color="#ff790a" size={2} />
		</div>
	</MoreStyle>
);
