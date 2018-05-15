import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
    font-family: 'Helveticons';
    src: url('https://styleguide.dagbladet.no/fonts/helveticons.woff');
  }
`;

const ArrowBullet = styled.a`
    color: ${props => props.theme.colors.darkGrey};
    font-size: ${props => props.theme.variables.headingMediumSize};
    font-family: ${props => props.theme.variables.mainFont};
    transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    display: inline-block;
    cursor: pointer;
    
    &:before {
        font-family: 'Helveticons';
        font-size: .7em;
        margin-right: .8em;
        content: "\\e880";
    }
    
    &:hover {
        color: ${props => props.theme.colors.primary};
        transform: translateX(1em);
    }
`;

export { ArrowBullet };
