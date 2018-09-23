import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const ItemMetaFieldMap = ({ google, value, label }) => {
	let position = null;
	let parsedValue = JSON.parse(value);

	if (parsedValue) {
		position = parsedValue.position;
	}

	if (!position) {
		return null;
	}

	return (
		<div className="itemMetaField">
			<label>{label}</label>
			<Map
				google={google}
				containerStyle={{
					position: 'relative',
					height: '290px',
					width: '100%'
				}}
				center={position}
				centerAroundCurrentLocation={false}
				zoom={15}
			>
				<Marker position={position} />
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(ItemMetaFieldMap);
