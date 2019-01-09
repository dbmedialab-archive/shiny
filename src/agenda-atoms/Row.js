import styled from "react-emotion"

const Row = styled.div`
	display: flex;
	flex-wrap: ${p => (p.wrap ? p.wrap : "wrap")};
	flex-direction: ${p => (p.direction ? p.direction : "initial")};
	margin: 0 auto;
	max-width: 105rem;

	& & {
		margin: 0 -1.5rem;
	}
`;
export default Row
