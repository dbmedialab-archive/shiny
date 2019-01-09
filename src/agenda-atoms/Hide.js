import styled, { css } from 'react-emotion';

const Hide = styled.div`
	display: none;

	${({ showForSmallOnly, theme }) => showForSmallOnly && css`
		@media ${theme.media.smallOnly} {
			display: block;
			display: flex;
		}
	`}

	${({ showForMediumUp, theme }) => showForMediumUp && css`
		@media ${theme.media.mediumUp} {
			display: block;
		}
	`}

	${({ showForMediumDown, theme }) => showForMediumDown && css`
		@media ${theme.media.mediumDown} {
			display: block;
		}
	`}

	${({ showForLargeUp, theme }) => showForLargeUp && css`
		@media ${theme.media.largeUp} {
			display: block;
		}
	`}

	${({ show }) => show && css`
		display: block;
	`}
`

export default Hide;
