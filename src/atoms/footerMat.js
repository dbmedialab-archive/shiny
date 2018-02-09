import styled from 'styled-components';

const FooterMat = styled.div`
    background-color: #4a4a4a;
    color: ${props => props.theme.colors.white};
    & p {
        font-size: ${props => props.theme.variables.uiSmallSize};
    }
    
    .Aller-logo {
        margin-bottom: ${props => props.theme.variables.uiSmallSize};
    }
    
    @media (max-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
        p, img {
            text-align: center;
        }
    }
`;

export { FooterMat };
