import React from 'react';
import PropTypes from 'prop-types';

import { Article } from '../atoms/Article';
import { Kicker } from '../atoms/Kicker';
import { Heading } from '../atoms/Heading';
import { Label } from '../atoms/Label';
import { BlockLink } from '../atoms/BlockLink';
import { LazyProgressiveImage } from '../molecules/LazyProgressiveImage';
import { Source } from '../molecules/Source';


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
	offset,
	sources,
}) => (
	<Article>
		<BlockLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{placeholderUrl &&
				<LazyProgressiveImage
					width={parseInt(width)}
					height={parseInt(height)}
					alt={title}
					src={placeholderUrl}
					offset={offset}
					fallbackSrc={image}
				>
					{sources.length === 0 &&
						<Source srcSet={image} />
					}
					{sources.map(source =>
						<Source srcSet={source.url} media={source.media} />)}
				</LazyProgressiveImage>
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
	image: PropTypes.string.isRequired,
	labels: PropTypes.arrayOf(PropTypes.string),
	url: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	placeholderUrl: PropTypes.string.isRequired,
	offset: PropTypes.number,
	sources: PropTypes.arrayOf(PropTypes.object),
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	labels: [],
	width: '',
	height: '',
	offset: 0,
	sources: [],
};

export { TrysilPlug };
