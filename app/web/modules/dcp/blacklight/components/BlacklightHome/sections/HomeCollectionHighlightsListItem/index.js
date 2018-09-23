import React from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';
import _s from 'underscore.string';

import './HomeCollectionHighlightsListItem.scss';

class HomeCollectionHighlightsListItem extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);
		this.state = {
			highlightActive: false,
		};
	}

	toggleHighlight() {
		this.setState ({ highlightActive: !this.state.highlightActive })
	}

	render() {

		const collectionUrl = `/${this.props.slug}`;

		return (

			<Link
				to={collectionUrl}
				className={`hl__blacklightHome__moreHighlightsFeatured ${this.state.highlightActive ? "moreHighlightsFeaturedActive highlightActive" : "eclogues"}`}
				onMouseEnter={this.toggleHighlight}
				onMouseLeave={this.toggleHighlight}
				tabIndex='0'
      >
				<div className="hl__blacklightHome__collectionHighlights__meta">

					<h3 className="hl__blacklightHome__highlightTitle">{_s.prune(this.props.title, 26)}</h3>
					<p className="hl__blacklightHome__highlightCount">{this.props.itemCount} items in this collection</p>
					<p className="hl__blacklightHome__highlightDesc">{_s.prune(this.props.description, 105)}</p>

				</div>
			</Link>

		) ;

	}

}

export default HomeCollectionHighlightsListItem;
