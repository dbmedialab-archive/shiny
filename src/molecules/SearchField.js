import styled from 'styled-components';
import React from 'react';
import propTypes from 'prop-types';

import {
	LoadingSearchIcon,
	FontIcon,
} from '../..';

const Search = styled.div`
  position: relative;
  margin-bottom: calc(1 / 2 * ${props => props.theme.variables.verticalBase});
  background-color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
  box-shadow: 0 0.3rem 0.3rem ${props => props.theme.colors.grayTint};
  overflow: hidden;
  box-sizing: border-box;

  * {
  	box-sizing: border-box;
  }
`;

const SearchIcon = styled(FontIcon)`
	color: ${props => props.theme.colors[props.color]}
`;

const SearchFieldInput = styled.input`
	 width: 80%;
	 padding: ${props => props.theme.variables.horizontalBase};
	 border: 0;
	 outline: none;
	 font-size: inherit;
`;

const IconContainer = styled.button`
	 width: 20%;
	 height: 100%;
	 padding: ${props => props.theme.variables.horizontalBase};
	 border: 0;
	 outline: none;
	 background-color: ${props => props.theme.colors.primary};
	 font-size: inherit;
	 cursor: pointer;
`;

class SearchField extends React.Component {
	static propTypes = {
		searchText: propTypes.string.isRequired,
		handleSearchTextChange: propTypes.func.isRequired,
		handleUserTypedSearch: propTypes.func.isRequired,
		searchTextVisible: propTypes.bool.isRequired,
		isLoading: propTypes.bool.isRequired,
	};

	handleTextChange = (event) => {
		const {
			handleSearchTextChange,
		} = this.props;

		handleSearchTextChange(event.target.value);
	};

	searchNow = () => {
		const {
			searchText,
			handleUserTypedSearch,
		} = this.props;

		handleUserTypedSearch(searchText);
	};

	searchNowIfEnter = (event) => {
		if (event.keyCode === 13) {
			this.searchNow();
		}
	};

	render() {
		const {
			searchTextVisible,
			searchText,
			isLoading,
		} = this.props;

		const value = (searchTextVisible) ? searchText : '';

		return (
			<Search>
				<SearchFieldInput
					type="text"
					value={value}
					placeholder="Søk..."
					onChange={this.handleTextChange}
					onKeyDown={this.searchNowIfEnter}
				/>

				<IconContainer
					onClick={this.searchNow}
				>
					{isLoading ? <LoadingSearchIcon color="white" /> : <SearchIcon name="search" color="white" />}
				</IconContainer>
			</Search>
		);
	}
}

export { SearchField };
