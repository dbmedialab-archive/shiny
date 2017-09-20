import React from 'react';
import styled from 'styled-components';

import Button from '../src/atoms/Button';
import ThemeSelector from './ThemeSelector';

const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: null,
    };
  }
  buttonClick(e) {
    window.localStorage.setItem('theme', e.target.value);
    this.setState({ selected: e.target.value });
  }
  render() {
    return (
      <ThemeSelector>
        <Sticky>
          <Button onClick={this.buttonClick.bind(this)} value="">
						-
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="dagbladet">
						Dagbladet
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="dinside">
						Dinside
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="kk">
						KK
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="seher">
						Seher
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="sol">
						SOL
          </Button>
          <Button onClick={this.buttonClick.bind(this)} value="topp">
						Topp
          </Button>
        </Sticky>
        <div>{this.props.children}</div>
      </ThemeSelector>
    );
  }
}
