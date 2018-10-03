import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import CollectionEditor from '../../components/CollectionEditor';
import collectionDetailQuery from '../../graphql/queries/detail';
import collectionListQuery from '../../graphql/queries/list';
import collectionCreateMutation from '../../graphql/mutations/create';
import collectionUpdateMutation from '../../graphql/mutations/update';
import collectionRemoveMutation from '../../graphql/mutations/remove';

class CollectionEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			coverImage: null,
			selectedItems: []
		};
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.collectionQuery &&
			nextProps.collectionQuery.project &&
			nextProps.collectionQuery.project.collection
		) {
			const collection = nextProps.collectionQuery.project.collection;
			this.setState({
				selectedItems: collection.items
			});
		}
	}

	handleSubmit(_values) {
		const values = Object.assign({}, _values);
		const { collectionCreate, collectionUpdate, router } = this.props;
		const { coverImage, selectedItems } = this.state;

		let selectedItemIds = [];
		selectedItems.forEach(selectedItem => {
			selectedItemIds.push(selectedItem._id);
		});

		// remove unused values
		delete values.__typename;
		delete values.items;
		delete values.itemSelectorTextsearch;
		delete values.itemsCount;

		// set cover image from state
		if (coverImage) {
			values.coverImage = coverImage.name;
		}

		// create or update
		if ('_id' in values) {
			collectionUpdate(values, selectedItemIds)
				.then(response => {
					router.replace(`/collections/${values._id}/${values.slug}`);
				})
				.catch(err => {
					console.error(err);
				});
		} else {
			collectionCreate(values, selectedItemIds)
				.then(response => {
					router.replace('/collections/');
				})
				.catch(err => {
					console.error(err);
				});
		}
	}

	handleRemove(collectionId) {
		const { collectionRemove, router } = this.props;

		collectionRemove(collectionId)
			.then(response => {
				router.replace('/collections');
			})
			.catch(err => {
				console.error(err);
			});
	}

	changeImageValue(coverImage) {
		this.setState({
			coverImage
		});
	}

	toggleSelectedItem(item) {
		const selectedItems = this.state.selectedItems.slice();

		if (selectedItems.some(selectedItem => selectedItem._id === item._id)) {
			selectedItems.splice(
				selectedItems.findIndex(selectedItem => selectedItem._id === item._id),
				1
			);
		} else {
			selectedItems.push(item);
		}

		this.setState({
			selectedItems
		});
	}

	render() {
		const { selectedItems } = this.state;

		// Get collection from query
		let collection;
		if (this.props.collectionQuery && this.props.collectionQuery.project) {
			collection = this.props.collectionQuery.project.collection;
		}

		// set cover image from state or pre-existing collection coverImage
		let coverImage = null;
		if (this.state.coverImage && this.state.coverImage !== null) {
			coverImage = this.state.coverImage;
		} else if (collection && collection.coverImage) {
			coverImage = {
				path: `//iiif.orphe.us/${
					collection.coverImage
				}/full/1400,/0/default.jpg`
			};
		}

		return (
			<CollectionEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				changeImageValue={this.changeImageValue}
				coverImage={coverImage}
				initialValues={collection}
				selectedItems={selectedItems}
				toggleSelectedItem={this.toggleSelectedItem}
			/>
		);
	}
}

export default compose(
	collectionCreateMutation,
	collectionUpdateMutation,
	collectionRemoveMutation,
	collectionDetailQuery,
	collectionListQuery
)(CollectionEditorContainer);
