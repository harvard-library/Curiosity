import React from 'react';
import { compose } from 'react-apollo';
import _s from 'underscore.string';

// component
import SpotlightBrowse from '../../components/SpotlightBrowse';

// graphql
import featureQuery from '../../graphql/queries/feature';
import itemListQuery from '../../../../items/graphql/queries/list';

// lib
import sirTrevorToHTML from '../../lib/sirTrevorToHTML';


const SpotlightBrowseContainer = props => {
	let page = null;
	let facets = null;
	let subjects = [];

	if (
			props.featureQuery
		&& props.featureQuery.page
	) {
		page = Object.assign({}, props.featureQuery.page);
		page.content = JSON.parse(page.content);
		page.html = sirTrevorToHTML(page.content);
	}

	if (
		props.itemListQuery
		&& !props.itemListQuery.loading
		&& props.itemListQuery.exhibit
	) {
		facets = props.itemListQuery.exhibit.items.facets;
		facets.facet_fields.subjects_tesim.forEach((facet, i) => {
			const isEven = (i % 2) === 0;
			if (!isEven) {
				return null;
			}
			subjects.push({
				label: _s.capitalize(facet),
				count: facets.facet_fields.subjects_tesim[i + 1],
			});
		});
	}

	if (!page || !subjects.length) {
		return null;
	}

	return (
		<SpotlightBrowse
			page={page}
			subjects={subjects}
		/>
	);
};

export default compose(
	featureQuery,
	itemListQuery,
)(SpotlightBrowseContainer);
