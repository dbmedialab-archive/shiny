import React from 'react';
import PropTypes from 'prop-types';

// import Button from '../src/atoms/Button';
import FullWidthLinkBar from '../../src/molecules/HorizontalLinkBar/FullWidthLinkBar';
import Button from '../../src/molecules/HorizontalLinkBar/LinkBarButton';

import ThemeSelector from './ThemeSelector';
import themes from '../../src/themes';


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
			theme: themes[window.localStorage.getItem('theme')] || themes.defaultTheme,
		});
	}

	handleButtonClick(e) {
		window.localStorage.setItem('theme', e.target.value);
		this.setState({
			selected: (e.target.value || null),
			theme: (themes[e.target.value] || themes.defaultTheme),
		});
	}

	render() {
		const { children } = this.props;
		const { selected }=this.state;

		return (
			<ThemeSelector>
				<FullWidthLinkBar fixed background={this.state.theme.colors.grayTintLighter}>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === null} value="">
            -
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'dagbladet'} value="dagbladet">
            Dagbladet
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'dinside'} value="dinside">
            Dinside
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'kk'} value="kk">
            KK
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'seher'} value="seher">
            Seher
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'sol'} value="sol">
            SOL
					</Button>
					<Button onClick={e => this.handleButtonClick(e)} isActive={selected === 'topp'} value="topp">
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

export default SiteSelection;
