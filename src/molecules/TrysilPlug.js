import React from 'react';
import PropTypes from 'prop-types';

import Article from '../atoms/Article';
import Kicker from '../atoms/Kicker';
import Heading from '../atoms/Heading';
import Label from '../atoms/Label';
import BlockLink from '../atoms/BlockLink';
import Image from '../atoms/Image';

const TrysilPlug = ({
	kicker,
	title,
	subtitle,
	image,
	labels,
	url,
}) => (
	<Article>
		<BlockLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{image && <Image src={image} />}
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
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	image: '',
	labels: [],
};

export default TrysilPlug;
