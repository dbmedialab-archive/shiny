import styled, { css } from 'react-emotion'

const FeedbackBox = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 15px;
	font-size: 14px;
	max-width: 300px;
	background-color: color;
	border-radius: 7px;

	${({ fail, theme }) =>
		fail &&
		css`
			background-color: ${p => theme.color.fail};
			color: #fff;
		`}

	${({ success, theme }) =>
		success &&
		css`
			background-color: ${p => theme.color.success};
			color: #fff;
		`}
`

export default FeedbackBox;
