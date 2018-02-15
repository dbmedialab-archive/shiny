import React from 'react';
import styled from 'styled-components';
import { MediumHeading } from '../Heading';

const MoreStyle = styled.div`
	text-align: center;
	text-transform: uppercase;
	width: 14rem;
	& .svg {
		width: 100%;
	}
		& .svg:before {
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
		<div className="svg">
			<svg width="12%" height="12%" viewBox="0 0 16 16" >
				{/* eslint-disable max-len */}
				<g stroke="none" strokeWidth="1">
					<g fill="#ff790a">
						<path d="M 1.7246094 2.0175781 L 1.0253906 2.7324219 L 7.5 9.0742188 L 13.974609 2.7324219 L 13.275391 2.0175781 L 7.5 7.6757812 L 1.7246094 2.0175781 z M 1.7246094 6.0175781 L 1.0253906 6.7324219 L 7.5 13.074219 L 13.974609 6.7324219 L 13.275391 6.0175781 L 7.5 11.675781 L 1.7246094 6.0175781 z" />
					</g>
				</g>
				{/* eslint-enable max-len */}
			</svg>
		</div>
	</MoreStyle>
);
