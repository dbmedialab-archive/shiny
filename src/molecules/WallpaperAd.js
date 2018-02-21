import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sticky from 'react-sticky-fill';

import { AdWrapper } from '../atoms/AdWrapper';

const LeftAndRight = styled.div`
	position: absolute;
	height: 100%;
	width: 455px;

	top: ${props => props.top};
	left: calc(${props => (props.left ? '50% - (101rem / 2) - 45.5rem' : '50% + 50.5rem')});

	& a {
		${props => (props.sticky ? 'position:sticky;top:0;' : '')} background-repeat: no-repeat;
		background-image: url(${props => props.backgroundImage});
		background-position: ${props => (props.left ? '' : 'right top')};
		display: block;
		height: 1200px;
		width: 455px;
	}

	&:before {
		content: 'Annonse';
		text-transform: uppercase;
		color: #ececec;
		font-size: 1.1rem;
		text-align: center;
		display: block;
		width: 100%;
		background: #ececec;
		line-height: 2.63rem;
		padding: 0;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-2.63rem);
	}
`;

LeftAndRight.propTypes = {
	backgroundImage: PropTypes.string.isRequired,
	top: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

const WallpaperWrapper = AdWrapper.extend`
	height: calc(300px + 2.63rem);
  position: relative;
`;

class WallpaperAd extends Component {
	state = {
		backgroundImage: '',
		top: '2.63rem',
		href: '',
		sticky: false,
		isWallpaper: false,
	}


	componentDidMount() {
		window.addEventListener('message', this.handlePostMessage.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('message', this.handlePostMessage.bind(this));
	}

	/* eslint-disable react/no-unused-state */
	onSlotRenderEnded(slot) {
		if (slot.size && slot.size[0] === 980) {
			this.setState({
				showSkyscraper: true,
			});
		}
	}
	/* eslint-enable react/no-unused-state */

	setWallpaper(data) {
		const frame = document.querySelector(`iframe[name="${data.frame}"]`);
		const main = document.querySelector('main');

		if (frame === null) {
			// console.warn('am.libs.ads.setWallpaper > Adunit iframe missing name attribute.');
			return;
		}

		main.childNodes[0].style.padding = 0;

		frame.parentNode.style.backgroundImage = `url(${data.src})`;
		frame.parentNode.style.backgroundPosition = 'top center';
		frame.parentNode.style.height = '300px';


		this.setState({
			isWallpaper: true,
			backgroundImage: data.src,
			href: data.url,
			sticky: data.sticky === 'Yes',
		});
	}

	handlePostMessage(event) {
		if (event.data.callback === 'db.libs.ads.setWallpaper') {
			this.setWallpaper(event.data);
		}
	}

	render() {
		const { height } = this.props;


		/* eslint-disable */
		const left = (
			<LeftAndRight
				key={'left'}
				backgroundImage={this.state.backgroundImage}
				top={this.state.top}
				sticky={this.state.sticky}
				left
			>
        <Sticky>
				  <a href={this.state.href} />
        </Sticky>
			</LeftAndRight>
		);

		const right = (
			<LeftAndRight
				key={'right'}
				backgroundImage={this.state.backgroundImage}
				top={this.state.top}
				sticky={this.state.sticky}
			>
        <Sticky>
				  <a href={this.state.href} />
        </Sticky>
			</LeftAndRight>
    );
    /* eslint-enable */

		return (
			<Fragment>
				{this.state.isWallpaper && [left, right]}
				<WallpaperWrapper height={height} width={this.state.isWallpaper ? '1010px' : '980px'}>
					{React.cloneElement(this.props.children, {
						onSlotRenderEnded: this.onSlotRenderEnded.bind(this),
						width: this.state.isWallpaper ? '1010px' : '980px',
					})}
				</WallpaperWrapper>
			</Fragment>
		);
	}
}

WallpaperAd.propTypes = {
	height: PropTypes.string,
	children: PropTypes.node.isRequired,
};

WallpaperAd.defaultProps = {
	height: '250px',
};

export { WallpaperAd };
