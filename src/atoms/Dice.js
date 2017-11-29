import styled from 'styled-components';

const Dice = styled.div`
    background-image: url('https://graphics.dbstatic.no/Grafikk/dice/${props => props.value}.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: ${props => props.size.width};
    height: ${props => props.size.height};
`;

Dice.defaultProps = {
	size: {
		width: '100px',
		height: '100px',
	},
};

export default Dice;
