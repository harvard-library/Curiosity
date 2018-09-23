import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// redux
import { libraryCloudRequestApiDataDetail } from '../../actions';

// components
import ItemDetail from '../../../../items/components/ItemDetail';


class BlacklightItemContainer extends React.Component {

	componentDidMount() {
		this.props.dispatchRequestApiDataDetail(this.props.params.id);
	}

	render() {
		const { libraryCloudData } = this.props;
		let newItem = null;
		let exhibit = {
			title: '',
			slug: '',
		};

		if (
			libraryCloudData.detail
			&& libraryCloudData.detail.items
			&& libraryCloudData.detail.items.mods
		) {
			const item = libraryCloudData.detail.items.mods;
			console.log(item);

			newItem = {
				id: item.recordInfo.recordIdentifier['#text'],
			};

			if (Array.isArray(item.titleInfo)) {
				const titleParts = [];
				item.titleInfo.forEach(titlePart => {
					titleParts.push(titlePart.title);
				});
				newItem['citation-title_tesim'] = titleParts.join(' ');
				newItem.full_title_tesim = titleParts.join(' ');
			} else {
				newItem['citation-title_tesim'] = item.titleInfo.title;
				newItem.full_title_tesim = item.titleInfo.title;
				if (item.titleInfo.subTitle) {
					newItem.full_title_tesim = `${newItem.full_title_tesim}: ${item.titleInfo.subTitle}`;
				}
			}

			if (item.location) {

				// images
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
							&& urlLocation['@access'] === 'raw object'
						) {
							newItem.full_image_url_ssm = urlLocation['#text'];
						}
					});
				}

				// exhibit
				if (item.location && Array.isArray(item.location)) {
					item.location.forEach(locationObj => {
						if (locationObj.physicalLocation) {
							exhibit.title = locationObj.physicalLocation['#text'];
						}
					});
				} else {
					exhibit.title = item.location['#text'];
				}


			}

			if (!Array.isArray(item.originInfo.dateIssued)) {
				newItem.date_tesim = item.originInfo.dateIssued;

			} else if (Array.isArray(item.originInfo.dateIssued)){
				newItem.date_tesim = item.originInfo.dateIssued[0];
			}

			if (item.language && item.language.languageTerm) {
				let languageTerm = '';
				item.language.languageTerm.forEach(language => {
					if (language['@type'] === 'text') {
						languageTerm = language['#text'];
					}
				});
				newItem['exhibit_sample-exhibit_genre_tesim'] = languageTerm;
			}

			if (item.name) {
				const names = [];
				if (Array.isArray(item.name)) {
					item.name.forEach(name => {
						if (Array.isArray(name.namePart)) {
							const nameParts = [];
							name.namePart.forEach(namePart => {
								if (typeof namePart === 'string') {
									nameParts.push(namePart);
								} else if (namePart['#text']){
									nameParts.push(namePart['#text']);
								}
							});
							names.push(nameParts.join(', '));
						} else {
							names.push(name.namePart);
						}
					});
				} else {
					if (Array.isArray(item.name.namePart)) {
						const nameParts = [];
						item.name.namePart.forEach(namePart => {
							if (typeof namePart === 'string') {
								nameParts.push(namePart);
							} else if (namePart['#text']){
								nameParts.push(namePart['#text']);
							}
						});
						names.push(nameParts.join(', '));
					} else {
						names.push(item.name.namePart);
					}
				}
				newItem.contributor_ssim = names.join('; ');
			}

			if (item.physicalDescription) {
				newItem['spotlight_upload_description_tesim'] = item.physicalDescription.extent;
			}

			if (item.note && Array.isArray(item.note)) {
				const notes = [];

				item.note.forEach(note => {
					if (typeof note === 'string') {
						notes.push(note);
					} else if (note['#text']) {
						notes.push(note['#text']);
					} else {
						// console.error('Unknown note format');
						// console.error(item);
					}
				});
				newItem['exhibit_sample-exhibit_note_tesim'] = notes.join('<br /><br />');
			}

			// hollis record
			newItem.hollisRecordLink = 'https://hollis.harvard.edu';

			if (item.relatedItem && Array.isArray(item.relatedItem)) {
				item.relatedItem.forEach(relatedItem => {
					// finding aid
					if (relatedItem.titleInfo && relatedItem.titleInfo.title === 'Electronic Finding Aid') {
						newItem.findingAidLink = relatedItem.location.url;
					}

					// hollis images record
					if (relatedItem.titleInfo && relatedItem.titleInfo.title === 'HOLLIS Images record') {
						newItem.hollisImagesRecordLink = relatedItem.location.url;
					}
				});
			}

		} else {
			// TODO: Loading and Not Found states
			return null;
		}

		return (
			<ItemDetail
				{...newItem}
				exhibit={exhibit}
			/>
		);
	}
}

BlacklightItemContainer.propTypes = {
	libraryCloudData: PropTypes.object,
};

const mapStateToProps = state => ({ libraryCloudData: state.libraryCloudData });


const mapDispatchToProps = dispatch => ({
	dispatchRequestApiDataDetail: (id) => {
		dispatch(libraryCloudRequestApiDataDetail(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(BlacklightItemContainer);
