import styled, { css } from 'react-emotion';

const PostLink = styled.a`
	display: flex;
	position: relative;
	align-items: center;
	margin-top: ${p => p.theme.grid.gutter / 2}rem;
	text-decoration: none;

	&:hover * {
		text-decoration: underline;
	}

	h3 {
		font-size: 1.4rem;
		overflow-x: hidden;
		text-overflow: ellipsis;
		font-weight: 600;
		position: absolute;
		left: 43%;
		padding-right: 20px;
		@media ${p => p.theme.media.mediumUp} {
			font-size: 1.8rem;
		}
	}

	${({ editing }) =>
		editing &&
		css`
			margin-bottom: 1rem;
		`}

	button {
		position: absolute;
		top: ${p => p.theme.grid.gutter / 2}rem;
		right: ${p => p.theme.grid.gutter / 2}rem;
	}

	.site {
		position: absolute;
		right: 0;
		color: ${p => p.theme.color.grey};
		font-size: 1.1rem;
		bottom: -8px;

		@media ${p => p.theme.media.mediumUp} {
			bottom: 0px;
		}

	}
`;

export default PostLink;
