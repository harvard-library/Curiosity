import React from 'react';
import _s from 'underscore.string';

import Button from '../../../../components/common/buttons/Button';

import './CollectionDescription.css';

const CollectionDescription = props => (
	<div className="collectionDescription">
		<p>{_s.prune(props.description, 210)}</p>
		{props.aboutLink ? (
			<Button href={props.aboutLink} light outline>
				Read more
			</Button>
		) : (
			''
		)}
	</div>
);

export default CollectionDescription;
