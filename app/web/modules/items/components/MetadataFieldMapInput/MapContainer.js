import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import autoBind from 'react-autobind';

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			place: null,
			position: null,
			autocomplete: ''
		};
	}

	componentDidMount() {
		this.renderAutoComplete();
	}

	componentDidUpdate(prevProps) {
		this.renderAutoComplete();
	}

	renderAutoComplete() {
		const { google, map } = this.props;

		if (!google || !map) return;

		var autocomplete = new google.maps.places.Autocomplete(
			this.state.autocomplete
		);
		autocomplete.bindTo('bounds', map);

		autocomplete.addListener('place_changed', () => {
			const place = autocomplete.getPlace();
			if (!place.geometry) {
				return;
			}

			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(17);
			}

			this.setState({
				place: place,
				position: place.geometry.location
			});
		});
	}

	render() {
		const { marker } = this.props;

		return (
			<Map
				google={this.props.google}
				containerStyle={{
					position: 'relative',
					height: '210px',
					width: '100%'
				}}
				center={this.props.position}
				centerAroundCurrentLocation={false}
				zoom={1}
			>
				{marker ? <Marker position={this.marker.position} /> : ''}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
