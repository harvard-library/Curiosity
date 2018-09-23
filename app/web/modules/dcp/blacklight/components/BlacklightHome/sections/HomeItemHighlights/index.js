import React from 'react';
import { Link } from 'react-router';
import _s from 'underscore.string';

import './HomeItemHighlights.scss';


const HomeItemHighlights = ({ items }) => (
	<section className="hl__blacklightHome__itemHighlights">
		<h2 className="hl__blacklightHome__sectionTitle">Item Highlights</h2>
		<button className="hl__blacklightHome__moreHighlights">
			<img className="moreHighlightsIcon" src="images/moreHighlights.svg" alt=""/>
			More Highlights
		</button>
		<div className="hl__blacklightHome__itemHighlightsContainer">
			{items.map((item, i) => (
				<Link
					className="hl__blacklightHome__itemHighlightsFeatured"
					tabIndex='0'
				>
					<div
						className="hl__blacklightHome__itemHighlightsFeaturedImage"
						style={{
							backgroundImage: `url(${item.full_image_url_ssm})`,
						}}
					/>
					<div className="hl__itemHighlightsMetaContainer">
						<Link to={`/items/${item.id}`}>
							<h3 className="hl__itemHightlightsTitle">{_s.prune(item['citation-title_tesim'], 80)}</h3>
						</Link>
					</div>
				</Link>
			))}
		</div>
		<div className="hl__blacklightHome__seeAllContainer  itemSeeAll">
			<Link
				to="/search"
				className="hl__blacklightHome__seeAll"
			>
				See all items <img className="seeAllIcon" src="images/arrow_right.svg" alt=""/>
			</Link>
		</div>


	</section>
);


export default HomeItemHighlights;
