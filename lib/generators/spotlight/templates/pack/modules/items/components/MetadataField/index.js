import React from 'react';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Field } from 'redux-form';

import { required, maxLength } from '../../../../lib/formHelpers';
import MetadataFieldValueInput from '../MetadataFieldValueInput';

import './MetadataField.css';

const maxLength200 = maxLength(200);

class MetadataField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			type: props.type ? props.type : 'text'
		};
		autoBind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.type && this.state.type !== nextProps.type) {
			this.setState({
				type: nextProps.type
			});
		}
	}

	toggleFieldType(e) {
		this.setState({
			type: e.target.options[e.target.selectedIndex].value
		});
	}

	render() {
		const { field, initialValue } = this.props;

		return (
			<div className="itemEditorMetadataField">
				<Row key={field}>
					<Col md={2}>
						<Field
							name={`${field}.type`}
							component="select"
							onChange={this.toggleFieldType}
						>
							<option value="text">Text</option>
							<option value="number">Number</option>
							<option value="date">Date</option>
							<option value="place">Place</option>
							<option value="media">Media</option>
							<option value="item">Item</option>
						</Field>
					</Col>
					<Col md={2}>
						<Field
							name={`${field}.label`}
							type="text"
							component="input"
							placeholder="Label . . ."
							validate={[required, maxLength200]}
						/>
					</Col>
					<Col md={7}>
						<MetadataFieldValueInput
							field={field}
							type={this.state.type}
							initialValue={initialValue}
							handleUpdateMetadata={this.props.handleUpdateMetadata}
						/>
					</Col>
					<Col md={1}>
						<button
							className="itemEditorRemoveMetadata"
							onClick={this.props.handleRemove}
						>
							<i className="mdi mdi-close" />
						</button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default MetadataField;
