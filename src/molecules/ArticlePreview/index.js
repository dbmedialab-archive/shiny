import React from 'react';
import Article from './Article';

const ArticlePreview = props => (
	<Article className="preview large-12 column" {...props}>
		<a href="https://www.dagbladet.no">
			<figure>
				<img
					src="https://1.dbstatic.no/70851273.jpg?imageId=70851273&width=1025&height=513&compression=80"
					alt=""
				/>
			</figure>
			<header className="article-preview--header">
				<h2 className="deck">SISTE:</h2>
				<h2 className="headline">SISTE: Oljefondet dropper olje- og gassprodusenter</h2>
				<p className="standfirst">Vil strømprisene stige enda mer mot sommeren?</p>
			</header>
		</a>
		<footer className="article-preview--footer" />
	</Article>
);

export default ArticlePreview;
