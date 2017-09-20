import React from 'react'
import styled from 'styled-components'

import Header from '../atoms/Header'

const Primary = styled.div`
	height: 60px;
	line-height: 60px;
	background-color: ${props =>
		props.theme && props.theme.colors && props.theme.colors.primary
			? props.theme.colors.primary.primary
			: '#fff'};
	color: #fff;
`
const Secondary = styled.section``

export default () => (
	<Header>
		<Primary>
			<h1>Dagbladet</h1>
		</Primary>
	</Header>
)
