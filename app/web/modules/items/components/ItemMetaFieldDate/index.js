import React from 'react';
import moment from 'moment-timezone';

const ItemMetaFieldDate = ({ value, label }) => {
	let dateStr = '';
	let date = null;

	if (value) {
		date = new moment(value);
		dateStr = date.format('LL');
	}

	return (
		<div className="itemMetaField itemMetaFieldDate">
			<label>{label}</label>
			<span>{dateStr}</span>
		</div>
	);
};

export default ItemMetaFieldDate;
