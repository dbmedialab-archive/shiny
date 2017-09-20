import React from 'react';
import styled from 'styled-components';

// import Button from '../src/atoms/Button';
import HorizontalLinkBar from '../src/molecules/HorizontalLinkBar/HorizontalLinkBar';
import Button from '../src/molecules/HorizontalLinkBar/LinkBarButton';

import ThemeSelector from './ThemeSelector';
import themes from '../src/themes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: null,
      theme: themes.defaultTheme,
    };
  }

  handleButtonClick(e) {
    window.localStorage.setItem('theme', e.target.value);
    this.setState({
      selected: (e.target.value || null),
      theme: (themes[e.target.value] || themes.defaultTheme),
    });
  }
  render() {
    return (
      <ThemeSelector>
        <HorizontalLinkBar background={this.state.theme.colors.grayTintLighter}>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === null} value="">
            -
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'dagbladet'} value="dagbladet">
            Dagbladet
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'dinside'} value="dinside">
            Dinside
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'kk'} value="kk">
            KK
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'seher'} value="seher">
            Seher
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'sol'} value="sol">
            SOL
          </Button>
          <Button onClick={e => this.handleButtonClick(e)} isActive={this.state.selected === 'topp'} value="topp">
            Topp
          </Button>
        </HorizontalLinkBar>
        <div>{this.props.children}</div>
      </ThemeSelector>
    );
  }
}
