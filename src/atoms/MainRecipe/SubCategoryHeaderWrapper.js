import Styled from 'styled-components';

const SubCategoryHeaderWrapper = Styled.div`
	white-space:nowrap;
    overflow:hidden;
	
	& h3 {
		display: inline-block;
	}
	
	& h3:after {
		content: '';
		width: 100%;
		margin-left: 10px;
		display: inline-block;
		border: 2px solid #ff790a;
	}
`;

export { SubCategoryHeaderWrapper };
