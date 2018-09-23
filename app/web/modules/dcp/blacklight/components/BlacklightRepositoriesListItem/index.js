import React from 'react';
import { Link } from 'react-router';
import _s from 'underscore.string';

import './BlacklightRepositoriesListItem.scss';

const BlacklightRepositoriesListItem = (props) => {


	return (


		<div className="hl__blacklightBrowseRepo__listItemContainer">
			<div className="hl__blacklightBrowseRepo__listItemMetaContainer">

				<div className="hl__blacklightBrowseRepo__listItemMeta">
					<h2 className="hl__blacklightBrowseRepo__listItemTitle">{props.title}</h2>
					<p className="hl__blacklightBrowseRepo__listItemCount">{_s.numberFormat(props.count)}</p>
					<Link className="hl__blacklightBrowseRepo__repository">{props.repository}</Link>
				</div>

			</div>
			<div className="hl__blacklightBrowseRepo__listItemImageContainer">
				<div
					className="hl__blacklightBrowseRepo__listItemImage"
					style={{
						backgroundImage: `url(${props.imageUrl})`,
					}}
				>
				</div>
			</div>


		</div>
    /*<section className="hl__blacklightBrowseRepo__repoList">

  </section> */

	) ;

}

export default BlacklightRepositoriesListItem;
