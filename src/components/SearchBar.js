import React from "react";

class SearchBar extends React.Component {
	state = { searchTerm: "" };

	// Updates state when user types in search bar
	onInputChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	// Function calls when user hits enter on search bar
	onFormSubmit = (event) => {
		// Prevents page from reloading
		event.preventDefault();
		// Calls parent callback function passing in the state search term
		this.props.onFormSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.searchTerm}
							onChange={this.onInputChange}></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
