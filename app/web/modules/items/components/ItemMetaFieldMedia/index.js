import React from 'react';
import autoBind from 'react-autobind';

import ThumbnailImages from '../ItemImageViewer/ThumbnailImages';

import './ItemMetaFieldMedia.css';

class ItemMetaFieldMedia extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeImage: null
		};

		autoBind(this);
	}

	setActiveFile(file) {
		this.setState({
			activeImage: file
		});
	}

	render() {
		const { label, value } = this.props;
		let files = [];
		let activeImage = this.state.activeImage;

		if (value) {
			files = JSON.parse(value);
		}

		if (!activeImage) {
			activeImage = files[0];
		}

		return (
			<div className="itemMetaField">
				<label>{label}</label>
				<ThumbnailImages
					files={files}
					activeImage={activeImage}
					setActiveFile={this.setActiveFile}
				/>
			</div>
		);
	}
}

export default ItemMetaFieldMedia;
