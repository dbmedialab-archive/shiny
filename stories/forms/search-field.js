import React from 'react';
import { SearchField } from '../../src/molecules/SearchField';
import { Row, Col } from '../../src';

export default () => (
	<section>
		<SearchField
			searchText="Search…"
			handleSearchTextChange={() => {}}
			handleUserTypedSearch={() => {}}
			isLoading={false}
			searchTextVisible
		/>
		<SearchField
			searchText="Search…"
			handleSearchTextChange={() => {}}
			handleUserTypedSearch={() => {}}
			searchTextVisible
			isLoading
		/>
		<Row>
			<Col xs={6}>
				<SearchField
					searchText="Search…"
					handleSearchTextChange={() => {}}
					handleUserTypedSearch={() => {}}
					isLoading={false}
					searchTextVisible
				/>
			</Col>
		</Row>
		<Row>
			<Col xs={4}>
				<SearchField
					searchText="Search…"
					handleSearchTextChange={() => {}}
					handleUserTypedSearch={() => {}}
					isLoading={false}
					searchTextVisible
				/>
			</Col>
		</Row>
		<Row>
			<Col xs={2}>
				<SearchField
					searchText="Search…"
					handleSearchTextChange={() => {}}
					handleUserTypedSearch={() => {}}
					isLoading={false}
					searchTextVisible
				/>
			</Col>
		</Row>
	</section>
);
