import React from 'react';
import PropTypes from 'prop-types';

import { Article } from '../atoms/Article';
import { Kicker } from '../atoms/Kicker';
import { Heading } from '../atoms/Heading';
import { Label } from '../atoms/Label';
import { BlockLink } from '../atoms/BlockLink';
import { Image } from '../atoms/Image';
import { LazyProgressiveImage } from '../molecules/LazyProgressiveImage';

const TrysilPlug = ({
	kicker,
	title,
	subtitle,
	image,
	labels,
	url,
	width,
	height,
	placeholderUrl,
}) => (
	<Article>
		<BlockLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{(image && !placeholderUrl) && <Image src={image} />}
			{(placeholderUrl && image && width && height)
				&& <LazyProgressiveImage width={width} height={height} imageUrl={image} placeholderUrl={placeholderUrl} />
			}
			<Heading headline>{title}</Heading>
			{subtitle && <p itemProp="description">{subtitle}</p>}
			{labels &&
				labels.map(label => (
					<Label key={label.text} color={label.color}>
						{label.text}
					</Label>
				))
			}
		</BlockLink>
	</Article>
);

TrysilPlug.propTypes = {
	kicker: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string,
	labels: PropTypes.arrayOf(PropTypes.string),
	url: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	placeholderUrl: PropTypes.string,
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	image: '',
	labels: [],
	width: '',
	height: '',
	placeholderUrl: '',
};

export { TrysilPlug };
