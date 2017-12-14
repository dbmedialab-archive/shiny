import React from 'react';
import PropTypes from 'prop-types';

import { merge } from 'aurora-deep-slice-merge';

// import { Button } from '../../src/atoms/Button';
import { FullWidthLinkBar } from '../../src/molecules/HorizontalLinkBar/FullWidthLinkBar';
import { LinkBarButton as Button } from '../../src/molecules/HorizontalLinkBar/LinkBarButton';

import { ThemeSelector } from './ThemeSelector';
import { themes } from '../../src/themes';

class SiteSelection extends React.Component {
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
						isActive={selected === 'dagbladet'}
						value="dagbladet"
					>
						Dagbladet
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
						isActive={selected === 'topp'}
						value="topp"
					>
						Topp
					</Button>
				</FullWidthLinkBar>
				<div>{children}</div>
			</ThemeSelector>
		);
	}
}
SiteSelection.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
SiteSelection.defaultProps = {
	children: [],
};

export { SiteSelection };
