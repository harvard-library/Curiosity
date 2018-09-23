import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import itemsQuery from '../../../items/graphql/queries/list';
import ItemSelectorItemList from '../../components/ItemSelectorItemList';

class ItemSelectorItemListContainer extends React.Component {
	render() {
		const { selectedItems } = this.props;
		const _selectedItems = selectedItems.slice();
		let items = [];

		if (
			this.props.itemListQuery &&
			this.props.itemListQuery.project &&
			this.props.itemListQuery.project.items
		) {
			items = this.props.itemListQuery.project.items.slice();

			// add join values from the database for item selector fields on forms with
			// initial values
			const projectItems = this.props.itemListQuery.project.items;
			for (let i = 0; i < _selectedItems.length; i += 1) {
				let selectedItem = _selectedItems[i];
				if (selectedItem && typeof selectedItem === 'string') {
					projectItems.forEach(item => {
						if (item._id === selectedItem) {
							_selectedItems[i] = item;
						}
					});
				}
			}
		}

		// don't show the items that are common between lists
		_selectedItems.forEach(selectedItem => {
			items.forEach(item => {
				if (item && selectedItem && item._id === selectedItem._id) {
					items.splice(items.findIndex(_i => _i._id === item._id), 1);
				}
			});
		});

		return (
			<ItemSelectorItemList
				items={items}
				selectedItems={_selectedItems}
				toggleSelectedItem={this.props.toggleSelectedItem}
			/>
		);
	}
}

ItemSelectorItemListContainer.propTypes = {
	toggleSelectedItem: PropTypes.func.isRequired,
	selectedItems: PropTypes.array
};

ItemSelectorItemListContainer.defaultProps = {
	selectedItems: []
};

export default compose(itemsQuery)(ItemSelectorItemListContainer);
