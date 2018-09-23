import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// redux
import { libraryCloudRequestApiDataList } from '../../actions';

// component
import ItemList from '../../../../items/components/ItemList';


class BlacklightItemListContainer extends React.Component {
	componentDidMount() {
		this.props.dispatchRequestApiDataList();
	}

	componentDidUpdate(prevProps) {
		if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
			this.props.dispatchRequestApiDataList();
		}
	}

	render() {
		const { libraryCloudData } = this.props;
		const items = [];

		if (
				libraryCloudData.list
			&& libraryCloudData.list.items
			&& libraryCloudData.list.items.mods
		) {
			libraryCloudData.list.items.mods.forEach(item => {
				const newItem = {
					id: item.recordInfo.recordIdentifier['#text'],
				};

				if (Array.isArray(item.titleInfo)) {
					const titleParts = [];
					item.titleInfo.forEach(titlePart => {
						titleParts.push(titlePart.title);
					});
					newItem['citation-title_tesim'] = titleParts.join(' ');
				} else {
					newItem['citation-title_tesim'] = item.titleInfo.title;
					newItem['spotlight_upload_description_tesim'] = item.titleInfo.subtitle;
				}

				if (item.location) {
					let locationObj;
					if (item.location && Array.isArray(item.location)) {
						item.location.forEach(_locationObj => {
							if (
								typeof _locationObj.url !== 'undefined'
								&& Array.isArray(_locationObj.url)
							) {
								locationObj = _locationObj;
							}
						});
					} else if (item.location.url) {
						locationObj = item.location;
					}

					if (locationObj) {
						locationObj.url.forEach(urlLocation => {
							if (
									urlLocation['@access']
								&& urlLocation['@access'] === 'preview'
							) {
								newItem.full_image_url_ssm = urlLocation['#text'];
								newItem.thumbnail_url_ssm = urlLocation['#text'];
							}
						});
					}

				}

				if (!Array.isArray(item.originInfo.dateIssued)) {
					newItem.date_tesim = item.originInfo.dateIssued;

				} else if (Array.isArray(item.originInfo.dateIssued)){
					newItem.date_tesim = item.originInfo.dateIssued[0];
				}

				items.push(newItem);
			});
		}

		return (
			<ItemList
				items={items}
				{...this.props}
			/>
		);
	}
}

BlacklightItemListContainer.propTypes = {
	libraryCloudData: PropTypes.object,
};

const mapStateToProps = state => ({ libraryCloudData: state.libraryCloudData });


const mapDispatchToProps = dispatch => ({
	dispatchRequestApiDataList: () => {
		dispatch(libraryCloudRequestApiDataList());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(BlacklightItemListContainer);
