import React from 'react';
import { Link } from 'react-router';
import _s from 'underscore.string';

import './ItemBreadcrumb.css';

const ItemBreadcrumb = (props) => {

	return (

		<section className="hl__itemDetail__breadcrumbSection">
			<div className="hl__itemDetail__breadcrumbContainer">
				<Link
					to={`/${props.exhibit.slug}`}
					className="hl__itemDetail__breadcrumbLink overviewLink underline"
					tabIndex="0"
        >
					{props.exhibit.title} Overview
				</Link>
				<Link
					to={`/${props.exhibit.slug}`}
					className="hl__itemDetail__breadcrumbLink exploreLink underline"
					tabIndex="0"
        >
          Explore Collection
				</Link>
				<Link
					className="hl__itemDetail__breadcrumbLink itemLink underline"
					tabIndex="0"
        >
					{_s.prune(props.item.full_title_tesim, 50)}
				</Link>
			</div>

		</section>

	);
}

export default ItemBreadcrumb;
