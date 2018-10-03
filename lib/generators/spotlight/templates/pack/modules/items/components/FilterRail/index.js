import React from 'react';
import { withRouter } from 'react-router';
import { Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import qs from 'qs-lite';
import { DebounceInput } from 'react-debounce-input';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './FilterRail.scss';

const facetsToCheckboxValues = facets => {
	const checkboxValues = {
		genre: {},
		language: {},
		place: {},
		repository: {},
		subjects: {},
	};

	if (facets && facets.facet_fields) {
  	facets.facet_fields.genre_tesim.forEach(facet => {
  		checkboxValues.genre[facet] = false;
  	});
  	facets.facet_fields.language_tesim.forEach(facet => {
  		checkboxValues.language[facet] = false;
  	});
  	facets.facet_fields.place_tesim.forEach(facet => {
  		checkboxValues.place[facet] = false;
  	});
  	facets.facet_fields.repository_tesim.forEach(facet => {
  		checkboxValues.repository[facet] = false;
  	});
  	facets.facet_fields.subjects_tesim.forEach(facet => {
  		checkboxValues.subjects[facet] = false;
  	});
	}

	return checkboxValues;
};



class FilterRail extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);

		const { facets } = props;

		const checkboxValues = facetsToCheckboxValues(facets);


		this.state = {
			checkboxValues,
			filterValue: '',
			filterDateActive: false,
			filterGenreActive: false,
			filterLanguageActive: false,
			filterPlaceActive: false,
			filterRepositoryActive: false,
			filterSubjectActive: false,
			mobileFilter: false,
		};
	}

	componentDidUpdate(prevProps, prevState) {
    /*
    TODO: implement check in the future to update from location change
		const queryParamsState = parseQueryParamsToState();
		if (JSON.stringify(queryParamsState) !== JSON.stringify(prevState)) {
			this.setState(queryParamsState);
		}
    */
		if (
        this.props.facets
      && this.props.facets.facet_fields
      && JSON.stringify(prevProps.facets) !== JSON.stringify(this.props.facets)
    ) {
			const { facets } = this.props;

			const checkboxValues = facetsToCheckboxValues(facets);

			this.setState({
				checkboxValues,
			});
		}
	}

	handleInputChange(key, e) {
		const query = qs.parse(window.location.search.replace('?', ''));
		if (e.target.value && e.target.value.length) {
			query[key] = e.target.value;
		} else if (typeof query[key] !== 'undefined') {
			delete query[key];
		}
		query.page = 1;

		this.props.router.push({
			pathname: window.location.pathname,
			query,
		});
	}

	handleSelectCheckbox(key, value) {
		const query = qs.parse(window.location.search.replace('?', ''));
		const { checkboxValues } = this.state;
		const facetCheckboxes = checkboxValues[key];

		for (const option in facetCheckboxes) {
			if (option !== value) {
				facetCheckboxes[option] = false;
			}
		}

		checkboxValues[key][value] = !checkboxValues[key][value];

		if (checkboxValues[key]) {
			query[key] = value;
		} else if (query[key]) {
			delete query[key];
		}

		query.page = 1;

		this.props.router.push({
			pathname: window.location.pathname,
			query,
		});
	}

	clearAllFilters() {
		this.props.router.push({
			pathname: window.location.pathname,
		});
	}

	toggleMobileFilter() {
		this.setState({
			mobileFilter: !this.state.mobileFilter
		});
	}

	toggleFilterArrow(param) {

		if(param === 'date') {
			this.setState({
				filterDateActive: !this.state.filterDateActive
			});
		}

		if(param === 'genre') {
			this.setState({
				filterGenreActive: !this.state.filterGenreActive
			})
		}

		if(param === 'language') {
			this.setState({
				filterLanguageActive: !this.state.filterLanguageActive
			})
		}

		if(param === 'place') {
			this.setState({
				filterPlaceActive: !this.state.filterPlaceActive
			})
		}

		if(param === 'repository') {
			this.setState({
				filterRepositoryActive: !this.state.filterRepositoryActive
			})
		}

		if(param === 'subject') {
			this.setState({
				filterSubjectActive: !this.state.filterSubjectActive
			})
		}

		this.setState({
			filterValue: param
		});

	}

	render() {
		const { facets } = this.props;
		const { dateFrom, dateTo, checkboxValues } = this.state;

		if (!facets || !checkboxValues) {
      // TODO: loading state;
			return null;
		}

		return (
			<Col className="hl__filterCollectionColLeft" md={3}>
				<div className={`hl__filter-rail ${this.state.mobileFilter === false ? 'hl__filter-rail--collapsed' : ''}`}>
					<div className="hl__filter-rail__header">
						<a
							className="hl__filter-rail__title narrow"
							onClick={this.toggleMobileFilter}
            >
               Filters

							<svg className={`${this.state.mobileFilter === false ? 'arrow--collapsed' : 'arrow--expanded'}`} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
								<g>
									<g opacity=".6" transform="translate(-296 -90)">
										<path fill="#fff" d="M301 95.5l4.86 5.5 1.14-1.3-3.7-4.2 3.7-4.2-1.14-1.3zm-5 0l4.86 5.5 1.14-1.3-3.7-4.2 3.7-4.2-1.14-1.3z"></path>
									</g>
								</g>
							</svg>
						</a>
						<h4 className="hl__filter-rail__title wide">
              Filter Rail
						</h4>
						<button className="hl__filter-rail__clearAllButton" tabIndex={0} onClick={this.clearAllFilters}>
               Clear All
						</button>
					</div>
					<Accordion accordion={false}>
						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'date')}>
								<AccordionItemTitle >
									<h3>Date Range</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterDateActive ? "filterItemActive" : ''}`} alt="down arrow"/>

									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div className="hl__dateInputContainer">
									<h4>From</h4>
									<DebounceInput
										type="number"
										className="date-input"
										value={dateFrom}
										minLength={3}
										debounceTimeout={300}
										onChange={this.handleInputChange.bind(this, 'dateFrom')}
                  />
									<h4>to</h4>
									<DebounceInput
										type="number"
										className="date-input"
										value={dateTo}
										minLength={3}
										debounceTimeout={300}
										onChange={this.handleInputChange.bind(this, 'dateTo')}
                  />
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'genre')}>
								<AccordionItemTitle>
									<h3>Genre</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterGenreActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{facets.facet_fields.genre_tesim.map((facet, i) => {
										const isEven = (i % 2) === 0;
										if (!isEven) {
											return null;
										}
										return (
											<button
												key={i}
												onClick={this.handleSelectCheckbox.bind(this, 'genre', facet)}
                      >
												<input
													type="checkbox"
													checked={checkboxValues.genre[facet]}
                        />
												{facet} ({facets.facet_fields.genre_tesim[i + 1]})
											</button>
										);
									})}
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'language')}>
								<AccordionItemTitle>
									<h3>Language</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterLanguageActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{facets.facet_fields.language_tesim.map((facet, i) => {
										const isEven = (i % 2) === 0;
										if (!isEven) {
											return null;
										}
										return (
											<button
												key={i}
												onClick={this.handleSelectCheckbox.bind(this, 'language', facet)}
                      >
												<input
													type="checkbox"
													checked={checkboxValues.language[facet]}
                        />
												{facet} ({facets.facet_fields.language_tesim[i + 1]})
											</button>
										);
									})}
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'place')}>
								<AccordionItemTitle>
									<h3>Place</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterPlaceActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{facets.facet_fields.place_tesim.map((facet, i) => {
										const isEven = (i % 2) === 0;
										if (!isEven) {
											return null;
										}
										return (
											<button
												key={i}
												onClick={this.handleSelectCheckbox.bind(this, 'place', facet)}
                      >
												<input
													type="checkbox"
													checked={checkboxValues.place[facet]}
                        />
												{facet} ({facets.facet_fields.place_tesim[i + 1]})
											</button>
										);
									})}
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'repository')}>
								<AccordionItemTitle>
									<h3>Repository</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterRepositoryActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{facets.facet_fields.repository_tesim.map((facet, i) => {
  										const isEven = (i % 2) === 0;
  										if (!isEven) {
  											return null;
  										}
  										return (
	<button
		key={i}
		onClick={this.handleSelectCheckbox.bind(this, 'repository', facet)}
                        >
		<input
			type="checkbox"
			checked={checkboxValues.repository[facet]}
                          />
		{facet} ({facets.facet_fields.repository_tesim[i + 1]})
	</button>
  										);
  									})}
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'subject')}>
								<AccordionItemTitle>
									<h3>Subject</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterSubjectActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{facets.facet_fields.subjects_tesim.map((facet, i) => {
  										const isEven = (i % 2) === 0;
  										if (!isEven) {
  											return null;
  										}
  										return (
	<button
		key={i}
		onClick={this.handleSelectCheckbox.bind(this, 'subjects', facet)}
                        >
		<input
			type="checkbox"
			checked={checkboxValues.subjects[facet]}
                          />
		{facet} ({facets.facet_fields.subjects_tesim[i + 1]})
	</button>
  										);
  									})}
								</div>
							</AccordionItemBody>
						</AccordionItem>

						{/*
						<div className="hl__filter-rail__moreContainer">
							<button className="hl__filter-rail__moreButton">
                 More
							</button>
							<img src="/images/chevron_right.svg" alt="chevron right icon"/>
						</div>
            */}
					</Accordion>
				</div>
			</Col>
	  );
	}
}

export default withRouter(FilterRail);
