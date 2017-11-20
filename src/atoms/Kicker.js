import styled from 'styled-components';

const Kicker = styled.h1`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding: 0.6rem 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors[props.theme.colors.skinColors[props.color]] || props.theme.colors.primary};
`;

export default Kicker;

