import React from 'react';
import { Link } from 'react-router';

import './HomeRelated.scss';

const HomeRelated = () => (
	<section className="hl__blacklightHome__related">
		<h2 className="hl__blacklightHome__sectionTitle">Related Services & Tools</h2>
		<div className="hl__blacklightHome__relatedContainer">
			<Link
				to="/"
				className="hl__blacklightHome__relatedTeaser"
				tabIndex='0'
			>
				<div className="hl__blacklightHome__iconContainer">
					<img src="images/gear.svg" alt="gear icon"/>
				</div>
				<div className="hl__blacklightHome__relatedTeaser__content">
					<h3 className="hl__blacklightHome__relatedTeaser__class">Service</h3>
					<h3 className="hl__blacklightHome__relatedTeaser__name">Reproductions</h3>
					<p className="hl__blacklightHome__relatedTeaser__desc">A single short sentence describing what this service or tool is, and why it’s valuable to our target audience.</p>
				</div>
			</Link>
			<Link
				to="/"
				className="hl__blacklightHome__relatedTeaser"
				tabIndex='0'
			>
				<div className="hl__blacklightHome__iconContainer">
					<img src="images/tool.svg" alt="tool icon"/>
				</div>
				<div className="hl__blacklightHome__relatedTeaser__content">
					<h3 className="hl__blacklightHome__relatedTeaser__class">Tool</h3>
					<h3 className="hl__blacklightHome__relatedTeaser__name">HOLLIS Images</h3>
					<p className="hl__blacklightHome__relatedTeaser__desc">A single short sentence describing what this service or tool is, and why it’s valuable to our target audience.</p>
				</div>
			</Link>
			<Link
				to="/"
				className="hl__blacklightHome__relatedTeaser"
				tabIndex='0'
			>
				<div className="hl__blacklightHome__iconContainer">
					<img src="images/tool.svg" alt="tool icon"/>
				</div>
				<div className="hl__blacklightHome__relatedTeaser__content">
					<h3 className="hl__blacklightHome__relatedTeaser__class">Tool</h3>
					<h3 className="hl__blacklightHome__relatedTeaser__name">Archival Discovery</h3>
					<p className="hl__blacklightHome__relatedTeaser__desc">A single short sentence describing what this service or tool is, and why it’s valuable to our target audience.</p>
				</div>
			</Link>
		</div>
	</section>
);


export default HomeRelated;
