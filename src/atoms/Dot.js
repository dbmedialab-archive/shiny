import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { getColor, getVariable } from '../utils'

const getRatio = ({ size }) => {
	switch (size) {
		case 'xsmall':
			return 0.5
		case 'small':
			return 0.7
		case 'large':
			return 1.5
		default:
			return 1
	}
}

const Dot = styled.div`
	${props => {
		const { color } = props
		const horizontalBase = getVariable('horizontalBase')(props)
		const ratio = getRatio(props)
		const size = `calc(${ratio} * ${horizontalBase})`
		return css`
			border-radius: 50%;
			background: ${color ? getColor(color)(props) : getColor('primary')(props)};
			width: ${size};
			height: ${size};
		`
	}}
`

Dot.defaultProps = {
	size: '.9rem'
}

Dot.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large'])
}
export { Dot }
