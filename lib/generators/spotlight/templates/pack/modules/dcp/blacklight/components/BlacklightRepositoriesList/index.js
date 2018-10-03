import React from 'react';
import BlacklightRepositoriesListItem from '../BlacklightRepositoriesListItem';

import './BlacklightRepositoriesList.scss';

const BlacklightRepositoriesList = ({repositories}) => {


	return (
		<div className="hl__blacklightBrowse__repoContainer">
			{repositories.map((repository, i) => (
				<BlacklightRepositoriesListItem
					key={i}
					{...repository}
        />
      ))}
		</div>
	) ;
}

export default BlacklightRepositoriesList;
