import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getVariable } from '../../utils';
import { MediumHeading, XLargeHeading, HugeHeading } from '../../atoms/Heading';
import Byline from '../Bylines';
import { HeaderImage } from './Image';

const HeaderStyled = styled.header`
`;

const Meta = styled.div`
	* {
		margin-right: ${getVariable('horizontalBase')};
	}

	font-size: ${getVariable('uiSmallSize')};
	line-height: ${getVariable('uiSmallLineHeight')};
	text-transform: uppercase;
	margin-bottom: getVariable('verticalBase');
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
	intro: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
	imageText: PropTypes.string.isRequired,
	published: PropTypes.string.isRequired,
	modified: PropTypes.string,
	bylines: PropTypes.instanceOf(Array),
};

ArticleHeader.defaultProps = {
	intro: '',
	subtitle: '',
	modified: '',
	bylines: [],
};

export { ArticleHeader };
