import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { merge } from 'aurora-deep-slice-merge';

import { themes } from '../themes';

import { LinkBarButton as Button } from '../atoms/LinkBarButton';
import { ThemeSelector as ShinyThemeProvider } from '../atoms/ThemeSelector';
import { FullWidthLinkBar } from './FullWidthLinkBar';

const ThemeSelector = styled(ShinyThemeProvider)`
	padding-top: calc(2 * ${props => (props.theme.variables || {}).verticalBase});
`;

class ThemeSwitcher extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: null,
			theme: themes.defaultTheme,
		};
	}

	componentWillMount() {
		this.setState({
			selected: window.localStorage.getItem('theme') || null,
			theme: merge(themes.defaultTheme, themes[window.localStorage.getItem('theme')]) || themes.defaultTheme,
		});
	}

	handleButtonClick(e) {
		window.localStorage.setItem('theme', e.target.value);
		this.setState({
			selected: (e.target.value || null),
			theme: (merge(themes.defaultTheme, themes[e.target.value]) || themes.defaultTheme),
		});
	}

	render() {
		const { children } = this.props;
		const {
			selected,
			theme: {
				colors,
			},
		} = this.state;

		return (
			<ThemeSelector>
				<FullWidthLinkBar
					fixed
					background={colors[colors.skinColors.splashBackground]}
				>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === null}
						value=""
					>
						Default
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'aller'}
						value="aller"
					>
						Aller
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'lightTheme'}
						value="lightTheme"
					>
						Light
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'dagbladet'}
						value="dagbladet"
					>
						Dagbladet
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'dagbladetDark'}
						value="dagbladetDark"
					>
						Dagbladet Dark
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'dinside'}
						value="dinside"
					>
						Dinside
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'kk'}
						value="kk"
					>
						KK
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'seher'}
						value="seher"
					>
						Seher
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'sol'}
						value="sol"
					>
						SOL
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'start'}
						value="start"
					>
						Start
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'topp'}
						value="topp"
					>
						Topp
					</Button>
					<Button
						textColor={colors.skinColors.splashText}
						onClick={e => this.handleButtonClick(e)}
						isActive={selected === 'mat'}
						value="mat"
					>
						Oppskrift
					</Button>
				</FullWidthLinkBar>
				<div>{children}</div>
			</ThemeSelector>
		);
	}
}

ThemeSwitcher.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
ThemeSwitcher.defaultProps = {
	children: [],
};

export { ThemeSwitcher };
