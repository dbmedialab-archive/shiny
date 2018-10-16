import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';

import { MediumHeading, XLargeHeading, HugeHeading } from '../../atoms/Heading';
import Byline from '../Bylines';
import { HeaderImage } from './Image';

const HeaderStyled = styled.header`
`;

const Meta = styled.div`
	* {
		margin-right: 1rem;
	}

	font-size: 1.2rem;
	text-transform: uppercase;
	margin-bottom: 3rem;
`;

const ArticleHeader = (props) => {
	const {
		intro, imageURL, imageText, title, subtitle, bylines, published, modified,
	} = props;

	const isModified = modified ? <meta itemProp="dateModified" content={modified} /> : null;
	return (
		<HeaderStyled>
			<HeaderImage
				title={imageText}
				intro={intro}
				imageURL={imageURL}
			/>
			<XLargeHeading marginTopFactor={0} marginBottomFactor={0}>{intro}</XLargeHeading>
			<HugeHeading marginTopFactor={0} marginBottomFactor={0}>- {title}</HugeHeading>
			<MediumHeading>{subtitle}</MediumHeading>
			<Meta>
				<time
					itemProp="datePublished"
					dateTime={published}
					className="published"
					title="Publisert 4. oktober 2018 kl. 7.02"
					data-from-now=""
				> 4. oktober 2018 kl. 7.02
				</time>
				{isModified}
				<a className="facebook-share" href="http://example.com">Del på Facebook</a>
			</Meta>

			<Byline bylines={bylines} />
		</HeaderStyled>
	);
};

ArticleHeader.propTypes = {
	intro: propTypes.string,
	subtitle: propTypes.string,
	title: propTypes.string.isRequired,
	imageURL: propTypes.string.isRequired,
	imageText: propTypes.string.isRequired,
	published: propTypes.string.isRequired,
	modified: propTypes.string,
	bylines: propTypes.instanceOf(Array),
};

ArticleHeader.defaultProps = {
	intro: '',
	subtitle: '',
	modified: '',
	bylines: [],
};

export { ArticleHeader };
