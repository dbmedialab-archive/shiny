import styled, {css} from 'react-emotion';

const H1 = styled.h1`
    font-size: 3rem;
    margin-top: 0;
	color: ${p => p.theme.color.black};
`;

const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 1.2rem 0;
	color: ${p => p.theme.color.black};

	${({ border }) => border && css`
		border-bottom: 1px solid ${p => p.theme.color.lightGrey};
	`}
`;

const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 .5rem 0;
    color: ${p => p.theme.color.black};
`;

const H4 = styled.h4`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: ${p => p.theme.color.black};
`;


export {H1, H2, H3, H4};
