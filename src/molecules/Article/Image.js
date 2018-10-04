import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Figure = styled.figure``;

class HeaderImage extends React.Component {
	static propTypes = {
		alt: PropTypes.string,
		imageURL: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}

	static defaultProps = {
		alt: '',
	}

	constructor(props) {
		super(props);

		this.state = {
			hide: true,
		};

		this.hide = this.hide.bind(this);
	}

	trigger() {
		const { hide } = this.state;
		return (
			<button type="button" onClick={this.hide} className={hide ? 'hide' : ''}>{hide ? 'Vis mer' : 'Skjul'}</button>
		);
	}

	hide() {
		const { hide } = this.state;
		this.setState({
			hide: !hide,
		});
	}

	title() {
		const { hide } = this.state;
		const { title } = this.props;

		if (hide && title.length >= 200) {
			return `${title.slice(0, 197)}...`;
		}

		return title;
	}

	render() {
		const { alt, imageURL, title } = this.props;
		const alter = alt === '' ? title : alt;
		const showMore = title.length >= 200 ? this.trigger() : null;
		return (
			<Figure itemProp="image" itemScope="" itemType="http://schema.org/ImageObject">
				<img itemProp="contentUrl url" title={title} alt={alter} src={imageURL} />

				<figcaption className="caption" itemProp="caption" data-expand="">
					{this.title()} {showMore}
				</figcaption>
				<meta itemProp="representativeOfPage" content="true" />
				<meta itemProp="width" content="980" />
				<meta itemProp="height" content="590" />
			</Figure>
		);
	}
}

export { HeaderImage };
