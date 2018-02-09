import styled from 'styled-components';

const FooterMat = styled.div`
    background-color: #4a4a4a;
    color: #fff;
    & p {
        font-size: 14px;
    }
    
    .Aller-logo {
        margin-bottom: 15px;
    }
    
    @media (max-width: 800px) {
        p, img {
            text-align: center;
        }
    }
    & .ddd {
        
    }
`;


export { FooterMat };
