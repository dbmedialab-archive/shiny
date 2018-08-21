import styled from 'styled-components';

const TopBar = styled.div`
	background-color: #4a4a4a;
	padding: .8rem 1.9rem;

	&:after {
		content: '';
		clear: both;
		display: block;
	}
`;

export { TopBar };
