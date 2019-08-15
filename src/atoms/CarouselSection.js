import styled from 'styled-components';

export const CarouselSection = styled.section`
	width: 100%;
	position: relative;
	height: ${props => (props.vertical ? props.verticalHeight : '')};
	display: flex;
	flex-direction: column;
	/* important for determining height (IOS 10) */
	flex: 1;
	flex-basis: auto;
`;
