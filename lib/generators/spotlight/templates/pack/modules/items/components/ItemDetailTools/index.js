import React from 'react';
import { Link } from 'react-router';

import './ItemDetailTools.css';

const ItemDetailTools = ({ exhibit, findingAidLink, hollisRecordLink, hollisImagesRecordLink }) => {

	if (!exhibit) {
		return null;
	}

	return (
		<div className="hl__itemDetail__tools">
			<h3 className="hl__itemDetail__toolTitle">Tools and Related Links</h3>
			<button>Download this item <img src="/images/arrow-down.svg" alt="down arrow"/></button>
			<h4>This Item Appears in</h4>
			<div className="hl__itemDetail__toolAppearsContainer">
				<Link
					to={`/${exhibit.slug}`}
					className="hl__itemDetail__toolAppearsLink"
					tabIndex="0"
        >
					{exhibit.title}
				</Link>
			</div>

			<h4 className="hl__itemDetail__toolMoreDetails">More Item Details</h4>
			<span className="hl__itemDetail__moreDetailsType">
				<img src="/images/subject.svg" alt="icon"/>
				<a
					className="hl__itemDetail__moreDetailsLink"
					tabIndex="0"
					href={findingAidLink}
        >
          Finding aid
				</a>
			</span>
			<span className="hl__itemDetail__moreDetailsType">
				<img src="/images/subject.svg" alt=""/>
				<a
					className="hl__itemDetail__moreDetailsLink"
					tabIndex="0"
					href={hollisRecordLink}
        >
          Item record
				</a> in HOLLIS
			</span>
			<span className="hl__itemDetail__moreDetailsType">
				<img src="/images/subject.svg" alt=""/>
				<a
					className="hl__itemDetail__moreDetailsLink"
					tabIndex="0"
					href={hollisImagesRecordLink}
        >
          Image record
				</a> in HOLLIS Images
			</span>

		</div>

	);
}

export default ItemDetailTools;
