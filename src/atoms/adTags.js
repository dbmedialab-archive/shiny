import styled from 'styled-components';

const Line = styled.span`
	display: inline-block;
	margin-left: 20px;
	width: 445px;
	height: 2px;
    vertical-align: middle;
    background: #ff790a;
`;

const LineShort = styled.span`
	display: inline-block;
	margin-left: 20px;
	width: 360px;
	height: 2px;
    vertical-align: middle;
    background: #ff790a;
`;

const Tags = styled.div`
	width: 550px;
	& p {
		display: inline-block;
		margin-left: 30px;
		font-size: 16px;
	}
	& p:nth-child(7n+1) {
		margin-left: 5px;
	}
`;

const Social = styled.div`
	& span {
		display: inline-block;
		border-radius: 50%;
	}
`;

export {
	Line, LineShort, Tags, Social,
};
