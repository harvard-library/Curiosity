import React from 'react';
import { Link } from 'react-router';
import HomeCollectionHighlightsListItem from '../HomeCollectionHighlightsListItem';
import './HomeCollectionHighlightsList.scss';

const HomeCollectionHighlightsList = ({collections}) => {
	return (
		<section className="hl__blacklightHome__highlights">
			<h2 className="hl__blacklightHome__sectionTitle">Collection Highlights</h2>
			<button className="hl__blacklightHome__moreHighlights"><img className="moreHighlightsIcon" src="images/moreHighlights.svg" alt=""/>More Highlights</button>
			<div className="hl__blacklightHome__moreHighligthsFeaturedContainer">

				{ collections ?

					<div>
						{collections.slice(0, 3).map((collection, i) => (
							<HomeCollectionHighlightsListItem
								key={collection.id}
								{...collection}
								/>
				   		))}
					</div>

					: '' }

			</div>
			<div className="hl__blacklightHome__seeAllContainer">
				<Link
					to={'/collections'}
					className="hl__blacklightHome__seeAll"
				>
					See all collections <img className="seeAllIcon" src="images/arrow_right.svg" alt=""/>
				</Link>
			</div>


		</section>

	);
}

export default HomeCollectionHighlightsList;
