import React from 'react';

// Blacklight
import blacklightRoutes from '../modules/dcp/blacklight/routes';

// Spotlight
import spotlightRoutes from '../modules/dcp/spotlight/routes';

// Articles
import authRoutes from '../modules/auth/routes';

export default (
	<div>
		{/* Routes for authentication */}
		{authRoutes}

		{/* Blacklight & spotlight */}
		{blacklightRoutes}
		{spotlightRoutes}
	</div>
);
