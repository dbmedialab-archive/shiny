import styled from '@emotion/styled';

export const CarouselSection = styled.section`
	width: 100%;
	position: relative;
	height: ${props => (props.vertical ? props.verticalHeight : '')};
	article {
		margin: 0;
	}
`;
