import React from 'react';

import Tags from '../../../tags/components/Tags';
import ArticleTitle from '../ArticleTitle';
import Discussion from '../../../comments/components/Discussion';
import ArticleTextEditor from '../ArticleTextEditor';

import './ArticleDetail.css';

const ArticleDetail = ({
	_id,
	title,
	slug,
	content,
	tags,
	commentsCount,
	comments,
	userIsAdmin,
	handleRemove
}) => {
	if (!_id) {
		// TODO: loading or no results
		return null;
	}

	const parsedContent = JSON.parse(content);

	return (
		<div className="articleDetail">
			<div className="articleDetailColumn">
				<ArticleTitle
					title={title}
					editLink={userIsAdmin ? `/articles/${_id}/${slug}/edit` : null}
					handleRemove={userIsAdmin ? handleRemove.bind(this, _id) : null}
				/>
				<Tags tags={tags} />

				<ArticleTextEditor
					editorState={parsedContent}
					config={{
						read_only: true,
						body_placeholder: ''
					}}
				/>
			</div>
			<Discussion />
		</div>
	);
};

export default ArticleDetail;
