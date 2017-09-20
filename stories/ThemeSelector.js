import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import GlobalStyle from '../src/atoms/GlobalStyle'
import themes from '../src/themes'

import sol from '../src/themes/sol'

injectGlobal`
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
	}
`

export default ({ children }) => {
	let theme = {}
	let Global = GlobalStyle

	if (window.localStorage && window.localStorage.getItem('theme')) {
		let themeName = window.localStorage.getItem('theme')
		if (themeName) {
			theme = sol

			if (theme && theme.global) {
				Global = GlobalStyle.extend`${theme.global};`
			}
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Global>{children}</Global>
		</ThemeProvider>
	)
}
