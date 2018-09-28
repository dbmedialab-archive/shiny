import styled from 'react-emotion';

const YoutubeFrame = styled.div`
	position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    
    & iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
    }
`;

export { YoutubeFrame };
