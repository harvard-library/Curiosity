import React from 'react';
import autoBind from 'react-autobind';
import { Link, withRouter } from 'react-router';
import { DebounceInput } from 'react-debounce-input';

import './HomeCover.scss';

class HomeCover extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			searchTextInput: '',
		};
		autoBind(this);
	}

	handleSearchTextInput(e) {
		this.setState({
			searchTextInput: e.target.value,
		});
	}

	handleSearchFormSubmit(e) {
		e.preventDefault();

		this.props.router.push({
			pathname: '/search',
			query: {
				subject: this.state.searchTextInput,
			},
		});
	}

	render() {
		const { searchTextInput } = this.state;

		return (
			<div className="hl__page-header">
				<div className="hl__page-header__background-screen"></div>
				<div className="hl__page-header__container">
					<h1 className="hl__page-title">Harvard</h1>
					<h3 className="hl__page-subtext">Digital Collections</h3>
					<form onSubmit={this.handleSearchFormSubmit}>
						<div className="hl__searchContainer">
							<div className="hl__searchInputOuter">
								<i className="mdi mdi-magnify mdi-36px hl__searchIcon" />
								<DebounceInput
									type="text"
									placeholder="Try “lantern slides” or “colonial north america”"
									minLength={3}
									debounceTimeout={300}
									value={searchTextInput}
									onChange={this.handleSearchTextInput}
								/>
								<button type="submit">
									Search
									<img className="seeAllIcon" src="images/arrow_right.svg" alt=""/>
								</button>
							</div>
						</div>
					</form>
				</div>
				<Link to="/" className="hl__viewDetails">
					<img src="images/collection.svg" alt=""/>
					<span href="">View Item Details</span>
				</Link>
				<div className="hl__overlayContainer">
					<h3>WE’RE IN BETA!</h3>
					<p>Thanks for trying out our new site. There might be a few glitches, but we wanted to let you test it out ASAP. Please <a href="">let us know what you think</a>.</p>
				</div>
			</div>
		);
	}
}

export default withRouter(HomeCover);
