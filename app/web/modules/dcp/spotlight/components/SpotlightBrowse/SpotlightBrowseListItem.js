import React from 'react';
import { Link } from 'react-router';
import { compose } from 'react-apollo';

import subjectItemsQuery from '../../graphql/queries/subjectItems';


const SpotlightBrowseListItem = ({ label, count, subjectItemsQuery, params })=> {
	let featuredImageUrl = "/images/asian-rubbings-cover.jpg";
	let featuredImageUrlSet = false;

	if (
      subjectItemsQuery
    && subjectItemsQuery.exhibit
    && subjectItemsQuery.exhibit.items
  ) {
		subjectItemsQuery.exhibit.items.records.forEach(item => {
			if (!featuredImageUrlSet && item.full_image_url_ssm) {
				if (Array.isArray(item.full_image_url_ssm)) {
					featuredImageUrl = item.full_image_url_ssm[0];
				} else {
					featuredImageUrl = item.full_image_url_ssm;
				}
				featuredImageUrlSet = true;
			}
		});
	}

	return (
		<div className="hl__spotlightBrowse__topicGridItem">
			<Link
				className="hl__spotlightBrowse__topicLink"
				tabIndex='0'
				style={{
					backgroundImage: `url(${featuredImageUrl})`,
				}}
				to={{
    			pathname: `/${params.exhibitSlug}`, 
    			query: {
    				subjects: label,
    				page: 1,
    			},
    		}}
			/>
			<div className="hl__spotlightBrowse__topicMeta">
				<h3 className="hl__spotlightBrowse__topicTitle">{label}</h3>
				<p className="hl__spotlightBrowse__topicCount">{count} items in this collection</p>
			</div>
		</div>
	);
};

export default compose(
  subjectItemsQuery,
)(SpotlightBrowseListItem);
