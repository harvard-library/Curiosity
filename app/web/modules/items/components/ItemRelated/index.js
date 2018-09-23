import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ItemRelated.css';


class ItemRelated extends React.Component {

	state = {
		hover: false,
	};

	hoverOn() {
		this.setState ({ hover: true })
	}

	hoverOff() {
		this.setState({ hover: false })
	}

	render() {

		//const itemUrl = `/items/${this.props.id}`;

		return (

			<Link
				className={`hl__itemDetail__relatedItemFeatured ${this.state.hover ? "itemActive" : "relatedItemImage"}`}
				onMouseEnter={this.hoverOn.bind(this)}
				onMouseLeave={this.hoverOff.bind(this)}
				tabIndex='0'
      >

				{
        this.state.hover ?

	<div className="hl__itemDetail__relatedItemMetaContainer">
		<h3 className="hl__itemDetail__relatedItemTitle">{this.props.title}</h3>
	</div>
      : '' }

			</Link>

		);
	}
}

ItemRelated.propTypes = {
	title: PropTypes.string,
};

export default ItemRelated;
