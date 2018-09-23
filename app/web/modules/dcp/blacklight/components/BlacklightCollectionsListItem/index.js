import React from 'react';
import { Link } from 'react-router';
import _s from 'underscore.string';

import './BlacklightCollectionsListItem.scss';

const BlacklightCollectionsListItem = (props) => {

	const exhibitUrl = `/${props.slug}`;

	return (

		<section className="hl__blacklightBrowseCol__collectionList">
			<Link className="hl__blacklightBrowseCol__link"
				to={exhibitUrl}
			>
				<div className="hl__blacklightBrowseCol__listItemContainer">

					<div className="hl__blacklightBrowseCol__listItemMeta">
						<h2 className="hl__blacklightBrowseCol__listItemTitle">{props.title}</h2>
						<p className="hl__blacklightBrowseCol__listItemCount">{_s.numberFormat(props.itemCount)}</p>
						<p className="hl__blacklightBrowseCol__listItemDesc">{props.description}</p>
						<h4 className="hl__blacklightBrowseCol__curatorMetaField">Curator</h4>
						<p className="hl__blacklightBrowseCol__curator">
							{props.contacts.length ?

								props.contacts.map((contact, i) => (
									<li key={contact.id} {...contact}>{contact.name}</li>
								))
								: '' }

						 </p>

						<h4 className="hl__blacklightBrowseCol__repositoryMetaField">Repository</h4>
						<Link className="hl__blacklightBrowseCol__repository"></Link>
					</div>

				</div>
				<div className="hl__blacklightBrowseCol__listItemImage">

				</div>
			</Link>

		</section>

	) ;

}

export default BlacklightCollectionsListItem;
