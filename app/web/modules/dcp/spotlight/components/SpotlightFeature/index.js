import React from 'react';
import { withRouter } from 'react-router';

// components
import SpotlightToolbarContainer from '../../containers/SpotlightToolbarContainer';
import SpotlightPageHeaderContainer from '../../containers/SpotlightPageHeaderContainer';

import './SpotlightFeature.scss';

const SpotlightFeature = (props) => {
	const { page } = props;

	if (!page) {
		return null;
	}

	return (
		<section className="hl__spotlightFeatureContainer">
			<SpotlightPageHeaderContainer
				params={{
					exhibitSlug: props.router.params.exhibitSlug,
				}}
			/>
			<SpotlightToolbarContainer
				params={{
					exhibitSlug: props.router.params.exhibitSlug,
				}}
			/>

			<section className="hl__spotlightFeatureContentContainer">
				<h1 className="hl__spotlightFeatureContent__heading">{page.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: page.html }} />
			</section>
			{/*
			<section className="hl__spotlightFeature__collectionHighlights">
				<div className="hl__spotlightFeature__divider"></div>
				<h4 className="hl__spotlightFeature__sectionTitle">From the collection</h4>
				<div className="hl__blacklightHome__moreHighligthsFeaturedContainer">
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured bough"
						tabIndex='0'
					>

					</Link>
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured eclogues"
						tabIndex='0'
					>
					</Link>
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured colosseum"
						tabIndex='0'

					>
					</Link>
				</div>
				<div className="hl__blacklightHome__seeAllContainer">
					<button className="hl__blacklightHome__seeAll">explore the collection <img className="seeAllIcon" src="images/arrow_right.svg" alt=""/></button>
				</div>
			</section>
			*/}
		</section>

	);
}


export default withRouter(SpotlightFeature);
