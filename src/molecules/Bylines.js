import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getVariable } from '../utils';
import { Image } from '../atoms/Image';

const Bylines = styled.div`
	margin-bottom: calc(2 * ${getVariable('verticalBase')});
	display: flex;
	width: 100%;
`;

const Author = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	:first-child {
		:before {
			content: "Av ";
		}
	}

	:not(:first-child) {
		:before {
			content: "og";
			margin: 0 1em;
		}
	}
`;

const AuthorImage = styled(Image)`
	border-radius: 50%;
	width: calc(3/2 * ${getVariable('verticalBase')});
	height: calc(3/2 * ${getVariable('verticalBase')});
	margin: 0 ${getVariable('horizontalBase')};
`;

const Byline = (props) => {
	const {
		bylines,
	} = props;
	return (
		<Bylines>
			{bylines.map((byline, key) => {
				const mailto = `mailto:${byline.email}`;
				const fullName = `${byline.firstName} ${byline.lastName}`;
				const image = byline.imageURL === ''
					? null
					: <AuthorImage itemProp="image" src={byline.imageURL} alt={fullName} />;

				return (
					<Author key className="person" itemScope="" itemType="http://schema.org/Person" itemProp="author">
						{image}
						<a rel="author" itemProp="url" href={mailto}>
							<span className="name" itemProp="name">
								{fullName}
							</span>
						</a>
					</Author>
				);
			})
			}
		</Bylines>
	);
};

Byline.propTypes = {
	bylines: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			imageURL: PropTypes.string,
		})
	),
};

Byline.defaultProps = {
	bylines: [],
};

export default Byline;
