import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { AuthorWrapper } from '../../atoms/MainRecipe/AuthorWrapper';
import { AuthorPhoto } from '../../atoms/MainRecipe/AuthorPhoto';

const Author = props => (
	<AuthorWrapper>
		<Row>
			<Col md={3}>
				<AuthorPhoto src={props.authorData.ProfileImage.MediumPortrait} />
			</Col>
			<Col md={9}>
				<Row>
					<Col>{props.authorData.Name}</Col>
				</Row>
				<Row>
					<Col>{props.authorData.Email}</Col>
				</Row>
			</Col>
		</Row>
	</AuthorWrapper>
);

Author.defaultProps = {
	authorData: {},
};

Author.propTypes = {
	authorData: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		profileImage: PropTypes.shape({
			title: PropTypes.string,
			seoFilename: PropTypes.string,
			mediumPortrait: PropTypes.string,
		}),
	}),
};

export { Author };
