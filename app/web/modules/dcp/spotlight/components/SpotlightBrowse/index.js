import React from 'react';
import { withRouter } from 'react-router';
import { Row } from 'react-bootstrap'

// components
import SpotlightToolbarContainer from '../../containers/SpotlightToolbarContainer';
import SpotlightPageHeaderContainer from '../../containers/SpotlightPageHeaderContainer';
import SpotlightBrowseListItem from './SpotlightBrowseListItem';

import './SpotlightBrowse.scss';

const SpotlightBrowse = (props) => {
	const { page, subjects } = props;

	return (
		<section className="hl__spotlightBrowseContainer">
			<SpotlightPageHeaderContainer
				params={{
					exhibitSlug: props.router.params.exhibitSlug,
				}}
			/>
			<section className="hl__spotlightBrowse__toolbarContainer">
				<SpotlightToolbarContainer
					params={{
						exhibitSlug: props.router.params.exhibitSlug,
					}}
				/>
			</section>
			<section className="hl__spotlightBrowse__topicContainer">
				<div
					className="hl__spotlightBrowse__topicDesc"
					dangerouslySetInnerHTML={{ __html: page.html }}
				/>
				<Row className="hl__spotlightBrowse__topicGridContainer">
					{subjects.map((subject, i) => (
						<SpotlightBrowseListItem
							key={subject.label}
							params={{
								exhibitSlug: props.router.params.exhibitSlug,
							}}
							{...subject}
						/>
					))}
				</Row>
			</section>
		</section>

	);
}


export default withRouter(SpotlightBrowse);
