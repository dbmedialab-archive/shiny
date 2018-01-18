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
	placeholderUrl,
	offset,
	sources,
	ratio,
}) => (
	<Article>
		<BlockLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{placeholderUrl &&
				<LazyProgressiveImage
					alt={title}
					src={placeholderUrl}
					offset={offset}
					fallbackSrc={image}
					ratio={ratio}
				>
					{sources.length === 0 &&
						<Source srcSet={image} />
					}
					{sources.map((source, i) =>
						<Source srcSet={source.url} media={source.media} key={`source-${i}`} />)}
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
	placeholderUrl: PropTypes.string.isRequired,
	offset: PropTypes.number,
	sources: PropTypes.arrayOf(PropTypes.object),
	ratio: PropTypes.number.isRequired,
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	labels: [],
	offset: 0,
	sources: [],
};

export { TrysilPlug };
