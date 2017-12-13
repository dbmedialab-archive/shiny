import React from 'react';
import styled from 'styled-components';

const DotLoaderContainer = styled.div`
	height: 6.5rem;

	@keyframes load7 {
		0%,
		80%,
		100% {
			box-shadow: 0 2.5em 0 -1.3em;
		}

		40% {
			box-shadow: 0 2.5em 0 0;
		}
	}
`;

const DotLoader = styled.div`
	position: relative;
	width: 2.5em;
	height: 2.5em;
	margin: 0 auto;
	transform: translateZ( 0 );
	border-radius: 50%;
	color: ${props => props.theme.colors.typeDisabled};
	font-size: 10px;
	text-indent: -9999em;
	content: '';
	animation-fill-mode: both;
	animation: load7 1.8s infinite ease-in-out;
	animation-delay: -.16s;

	&::before,
	&::after {
		position: absolute;
		top: 0;
		width: 2.5em;
		height: 2.5em;
		border-radius: 50%;
		content: '';
		animation-fill-mode: both;
		animation: load7 1.8s infinite ease-in-out;
	}

	&::before {
		left: -3.5em;
		animation-delay: -.32s;
	}

	&::after {
		left: 3.5em;
	}
`;

const RealDotLoader = () => (
	<DotLoaderContainer>
		<DotLoader />
	</DotLoaderContainer>
);

export { RealDotLoader as DotLoader };
