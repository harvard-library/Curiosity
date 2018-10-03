import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ProjectNameAvailabilityCheck.css';

const maxLength200 = maxLength(200);

class ProjectNameAvailabilityCheck extends React.Component {
	render() {
		return (
			<div className="projectNameAvailabilityCheck">
				<form
					className="projectNameAvailabilityForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="projectNameAvailabilityFormInputOuter projectNameAvailabilityFormTitleOuter">
						<label>
							What is your Organization&apos;s or Project&apos;s title?
						</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your Organization or Project"
							validate={[required, maxLength200]}
						/>
						<span className="projectNameAvailabilityFormHelp">?</span>
					</div>

					<div
						className={`
							projectNameAvailabilityFormInputOuter
							projectNameAvailabilityFormURLOuter
							${this.props.projectFound ? 'projectNameUnavailable' : ''}
						`}
					>
						<div>
							<label>
								At what URL would you like users to access your project?
							</label>
							<Field
								name="hostname"
								type="text"
								component="input"
								placeholder="example"
								validate={[required, maxLength200]}
							/>
							<div className="projectNameAvailabilityFormURL">
								<span>.orphe.us</span>
							</div>
							<span className="projectNameAvailabilityFormHelp">?</span>
						</div>
						<div>
							<span
								className={`nameNotAvailable ${
									this.props.projectFound ? 'nameNotAvailableVisible' : ''
								}`}
							>
								This URL is not available
							</span>
						</div>
					</div>

					<button
						type="submit"
						className={`
							projectNameAvaibilityButton
							${this.props.projectFound ? 'disabled' : ''}
						`}
					>
						Create
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'ProjectNameAvailabilityCheck'
})(ProjectNameAvailabilityCheck);
