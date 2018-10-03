import React from 'react';
import { withRouter } from 'react-router';
import autoBind from 'react-autobind';
import { DebounceInput } from 'react-debounce-input';
import qs from 'qs-lite';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// lib
import parseQueryParamsToState from '../../lib/parseQueryParamsToState';
import repositories from '../../lib/repositories';

import './BlacklightFilterRail.scss';

class BlacklightFilterRail extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);

		const _repositories = {};
		repositories.forEach(repository => {
			_repositories[repository.title] = false;
		});

		this.state = {
			...parseQueryParamsToState(),
			repositoriesCheckboxesValues: _repositories,
			filterValue: '',
			filterDateActive: false,
			filterTypeActive: false,
			filterFormatActive: false,
			filterRepoActive: false,
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
			pathname: '/search',
			query,
		});
	}

	handleSelectRepository(repositoryTitle) {
		const query = qs.parse(window.location.search.replace('?', ''));
		const { repositoriesCheckboxesValues } = this.state;

		for (const key in repositoriesCheckboxesValues) {
			if (key !== repositoryTitle) {
				repositoriesCheckboxesValues[key] = false;
			}
		}

		repositoriesCheckboxesValues[repositoryTitle] = !repositoriesCheckboxesValues[repositoryTitle];

		if (repositoriesCheckboxesValues[repositoryTitle]) {
			query.repository = repositoryTitle;
		} else if (query.repository) {
			delete query.repository;
		}
		query.page = 1;

		this.props.router.push({
			pathname: '/search',
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

		if(param === 'type') {
			this.setState({
				filterTypeActive: !this.state.filterTypeActive
			});
		}

		if(param === 'format') {
			this.setState({
				filterFormatActive: !this.state.filterFormatActive
			});
		}

		if(param === 'repo') {
			this.setState({
				filterRepoActive: !this.state.filterRepoActive
			});
		}

		this.setState({
			filterValue: param
		});
	}


	render() {
		const { dateFrom, dateTo, type, repositoriesCheckboxesValues, format } = this.state;

		return (
			<div className="hl__filterCollectionColLeft">
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
								<AccordionItemTitle>
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
							<a onClick={this.toggleFilterArrow.bind(this, 'type')}>
								<AccordionItemTitle>
									<h3>Type</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterTypeActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{/*
                  <button>
										<input
                      type="checkbox"
                    />
										Sample Content
									</button>
                  */}
									<DebounceInput
										type="text"
										placeholder="Enter a resource type . . . "
										className="searchFilterTextInput"
										value={type}
										minLength={3}
										debounceTimeout={300}
										onChange={this.handleInputChange.bind(this, 'type')}
  								/>
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'format')}>
								<AccordionItemTitle>
									<h3>Format</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterFormatActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{/*
									<button>
										<input type="checkbox" />
										Sample Content
									</button>
                  */}
									<DebounceInput
										type="text"
										placeholder="Enter a format . . . "
										className="searchFilterTextInput"
										value={format}
										minLength={3}
										debounceTimeout={300}
										onChange={this.handleInputChange.bind(this, 'format')}
  								/>
								</div>
							</AccordionItemBody>
						</AccordionItem>

						<AccordionItem>
							<a onClick={this.toggleFilterArrow.bind(this, 'repo')}>
								<AccordionItemTitle>
									<h3>Repository</h3>
									<div>
										<img src="/images/down_arrow.png" className={`hl__filter-rail__arrow ${ this.state.filterRepoActive ? "filterItemActive" : ''}`} alt="down arrow"/>
									</div>
								</AccordionItemTitle>
							</a>
							<AccordionItemBody>
								<div>
									{repositories.map(repository => (
										<button
											key={repository.title}
											onClick={this.handleSelectRepository.bind(this, repository.title)}
                    >
											<input
												type="checkbox"
												checked={repositoriesCheckboxesValues[repository.title]}
                      />
											{repository.title}
										</button>
                  ))}
								</div>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
				</div>

			</div>
		);

	}
}

export default withRouter(BlacklightFilterRail);
