import React from 'react';
import propTypes from 'prop-types';
import styled from 'react-emotion';
import { Image } from '../atoms/Image';
import { Row } from '../atoms/Row';

const Bylines = styled.div`
	margin-bottom: 4rem;
	display: flex;
	width: 100%;
`;

const Author = styled.span`
	box-sizing: border-box;
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
			content: " og ";
			margin-left: 1rem;
		}
	}
`;

const AuthorImage = styled(Image)`
	border-radius: 999px;
	width: 40px;
	height: 40px;
	margin: 0 1rem;
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
				const image = byline.imageURL === '' ? null : <AuthorImage itemProp="image" src={byline.imageURL} alt={fullName} />;
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
	bylines: propTypes.instanceOf(Array),
};

Byline.defaultProps = {
	bylines: [],
};

export default Byline;
