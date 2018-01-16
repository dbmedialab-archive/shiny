import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = AdWrapper.extend`
  position: sticky;
  top: 0;
`;

const StickyWrapper = styled.div`
	position: absolute;
	top: 0;
	left: calc(50% + 490px + 15px);
	height: 100%;
	width: 300px;
`;


class StickyAd extends Component {
	static propTypes = {
		width: PropTypes.string,
		height: PropTypes.string,
		sticky: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
	}

	static defaultProps = {
		width: '320px',
		height: '250px',
	}

	constructor(props) {
		super(props);

		this.props = props;
	}

	componentDidMount() {
		if (this.node) {
			import('../utils/sticky-fill').then((module) => {
				this.stickyFill = module;
				this.stickyFill.addOne(this.node);
			}).catch((e) => {
			});
		}
	}

	componentWillUnmount() {
		if (this.stickyFill && this.node) {
			this.stickyFill.removeOne(this.node);
		}
	}

	render() {
		const {
			children, width, height, sticky,
		} = this.props;

		return (
			<StickyWrapper sticky={sticky}>
				<StyledAdWrapper height={height} width={width} innerRef={(node) => { this.node = node; }}>
					{children}
				</StyledAdWrapper>
			</StickyWrapper>
		);
	}
}


export { StickyAd };
