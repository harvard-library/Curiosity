import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import CoverImageUploader from '../../../dashboard/components/CoverImageUploader';
import ItemSelectorField from '../../../dashboard/components/ItemSelectorField';
import { required, maxLength } from '../../../../lib/formHelpers';

import './CollectionEditor.css';

const maxLength200 = maxLength(200);
const maxLength2100 = maxLength(2100);

class CollectionEditor extends React.Component {
	render() {
		const { collection, items, selectedItems } = this.props;

		return (
			<div className="collectionEditor">
				<h1>{collection ? 'Edit' : 'Create'} Collection</h1>

				<CoverImageUploader
					changeValue={this.props.changeImageValue}
					image={this.props.coverImage}
				/>

				<form
					className="collectionEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="collectionEditorFormInputOuter collectionEditorFormTitleOuter">
						<label>Enter the title of the collection.</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your collection title"
							validate={[required, maxLength200]}
						/>
						<span className="collectionEditorFormHelp">?</span>
					</div>

					<div className="collectionEditorFormInputOuter collectionEditorFormDescriptionOuter">
						<label>Enter a brief description of your collection.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of collection . . . "
							validate={[maxLength2100]}
						/>
						<span className="collectionEditorFormHelp">?</span>
					</div>

					<div className="collectionEditorFormInputOuter ">
						<ItemSelectorField
							items={items}
							selectedItems={selectedItems}
							toggleSelectedItem={this.props.toggleSelectedItem}
						/>
					</div>
					<button
						type="submit"
						className={`
							collectionEditorButton
						`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

CollectionEditor.propTypes = {
	collection: PropTypes.object,
	items: PropTypes.array,
	selectedItems: PropTypes.array,
	toggleSelectedItem: PropTypes.func
};

CollectionEditor.defaultProps = {
	collection: null,
	items: [],
	selectedItems: []
};

export default reduxForm({
	form: 'CollectionEditor'
})(CollectionEditor);
