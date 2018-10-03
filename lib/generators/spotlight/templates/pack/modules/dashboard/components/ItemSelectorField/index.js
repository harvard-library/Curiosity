import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import ItemSelectorItemList from '../ItemSelectorItemList';
import ItemSelectorItemListContainer from '../../containers/ItemSelectorItemListContainer';

import './ItemSelectorField.css';

const ItemSelectorField = ({ selectedItems, toggleSelectedItem }) => (
	<div className="itemSelector">
		<Row>
			<Col md={6}>
				<div className="itemSelectorItems">
					<label>
						<span>
							Items <Link to="/items/create">Create a new item</Link>
						</span>
					</label>
					<ItemSelectorItemListContainer
						selectedItems={selectedItems}
						toggleSelectedItem={toggleSelectedItem}
					/>
				</div>
			</Col>
			<Col md={6}>
				<div className="itemSelectorItems">
					<label>Selected</label>
					<ItemSelectorItemList
						items={selectedItems}
						toggleSelectedItem={toggleSelectedItem}
						showUnselect
					/>
				</div>
			</Col>
		</Row>
	</div>
);

export default ItemSelectorField;
