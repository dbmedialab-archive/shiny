import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Sticker from 'react-stickyfill';

import { getColor } from '../utils';
import { AdWrapper } from '../atoms/AdWrapper';

const LeftAndRight = AdWrapper.extend`
	position: absolute;
	height: 100%;
	width: 455px; /* Used for positioning of background ad so we use px */

	top: ${props => props.top};
  	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.xs}em) {
		${props => (
		props.left
			? 'right: 100%;'
			: 'left: 100%;'
	)}}
	${props => ['sm', 'md', 'lg'].map(size => css`
		@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints[size]}em) {
			${props => (
		props.left
			? `right: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`
			: `left: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`
	)}}

		`)}

	& a {
		${props => (props.sticky ? 'position:sticky;top:0;' : '')} background-repeat: no-repeat;
		background-image: url(${props => props.backgroundImage});
		background-position: ${props => (props.left ? '' : 'right top')};
		display: block;
		height: 1200px; /* Use px instead of rem beause this is used to position */
		width: 455px; /*  a background image from DFP so we need absolute values */
	}

	&&::before {
		opacity: 1;
		padding: 0;
		position: absolute;
		color: ${getColor('adWrapperBackgroundColor')};
		background: ${getColor('adWrapperBackgroundColor')};
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
		top: '2.6rem',
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

	onMediaQueryChange(data) {
		if (data.media === '(min-width: 1280px)' && !data.matches) {
			this.setState({
				isWallpaper: false,
			});
		}
	}

	setWallpaper(data) {
		const frame = document.querySelector(`iframe[name="${data.frame}"]`);
		const main = document.querySelector('main');

		if (frame === null) {
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
		const {
			height, shouldHideAttribution, itemType, itemScope,
		} = this.props;

		/* eslint-disable jsx-a11y/anchor-has-content */
		const left = (
			<LeftAndRight
				key={'left'}
				backgroundImage={this.state.backgroundImage}
				top={this.state.top}
				sticky={this.state.sticky}
				left
			>
				<Sticker>
					<a href={this.state.href} />
				</Sticker>
			</LeftAndRight>
		);

		const right = (
			<LeftAndRight
				key={'right'}
				backgroundImage={this.state.backgroundImage}
				top={this.state.top}
				sticky={this.state.sticky}
			>
				<Sticker>
					<a href={this.state.href} />
				</Sticker>
			</LeftAndRight>
		);
		/* eslint-enable jsx-a11y/anchor-has-content */

		return (
			<Fragment>
				{this.state.isWallpaper && [left, right]}
				<WallpaperWrapper
					height={height}
					width={this.state.isWallpaper ? '1010px' : '980px'}
					shouldHideAttribution={shouldHideAttribution}
					itemType={itemType}
					itemScope={itemScope}
				>
					{React.cloneElement(this.props.children, {
						onMediaQueryChange: this.onMediaQueryChange.bind(this),
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
	shouldHideAttribution: PropTypes.bool.isRequired,
	itemType: PropTypes.string.isRequired,
	itemScope: PropTypes.bool.isRequired,
};

WallpaperAd.defaultProps = {
	height: '250px',
};

export { WallpaperAd };
