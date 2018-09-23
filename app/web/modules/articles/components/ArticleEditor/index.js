import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import ArticleTextEditor from '../ArticleTextEditor';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ArticleEditor.css';

const maxLength2000 = maxLength(2000);

class ArticleEditor extends React.Component {
	render() {
		return (
			<div className="articleEditor">
				<form className="articleEditorForm" onSubmit={this.props.handleSubmit}>
					<div className="articleEditorFormInputOuter articleEditorFormTitleOuter">
						<Field
							name="title"
							type="text"
							component="textarea"
							placeholder="Enter title"
							validate={[required, maxLength2000]}
						/>
						<span className="articleEditorFormHelp">?</span>
					</div>

					<ArticleTextEditor
						editorState={this.props.editorState}
						config={{
							data_storage: {
								url: '/articles/x',
								method: 'POST',
								success_handler: null,
								failure_handler: null,
								interval: 500,
								save_handler: this.props.handleEditorChange
							}
						}}
					/>

					<div className="articleEditorFormInputOuter">
						<button
							className={`
								articleEditorButton
								articleEditorButtonSubmit
							`}
							type="submit"
						>
							Publish
						</button>
					</div>
				</form>
			</div>
		);
	}
}

ArticleEditor.propTypes = {
	article: PropTypes.object,
	files: PropTypes.array,
	metadata: PropTypes.array,
	addMetadata: PropTypes.func,
	removeMetadata: PropTypes.func,
	editorState: PropTypes.object
};

const ArticleEditorForm = reduxForm({
	form: 'ArticleEditor'
})(ArticleEditor);

export default withRouter(ArticleEditorForm);
