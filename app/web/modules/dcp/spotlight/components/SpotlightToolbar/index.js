import React from 'react';
import Sticky from 'react-stickynode';
import Media from 'react-media';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import './SpotlightToolbar.scss';

class SpotlightToolbar extends React.Component {

	constructor(props){
		super(props);
		autoBind(this);
		this.state = {
			toolbarOpen: false,
		};
	}

	toggleToolbar() {
		this.setState({
			toolbarOpen: !this.state.toolbarOpen
		})
	}

	render() {
		const { exhibit } = this.props;


		return (
			<Media query="(max-width: 620px)">
				{matches =>
						 matches ? (
							 <Sticky className={`hl__collectionDetailsSticky ${this.state.toolbarOpen ? "toolbarOpen" : ""}`} enabled={true} top={60}>
								<div className="hl__collectionDetails__jumpLinks">
									<nav className="hl__collectionDetails__jumpLinkItems">
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}`} className="hl__linkTag">
												Collection Home
											</Link>
											<button
												onClick={this.toggleToolbar}
											><img src="/images/down-arrow.png" alt="down arrow"/></button>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}`} className="hl__linkTag">
												Explore the Collection
											</Link>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}/browse`} className="hl__linkTag">
												Browse by Topic
											</Link>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}/research`} className="hl__linkTag">
												Essays & Research
											</Link>
										</div>
									</nav>
								</div>
							</Sticky>
						 ) : (

							 <Sticky className="hl__collectionDetailsSticky" enabled={true} top={60} >
								<div className="hl__collectionDetails__jumpLinks">
									<nav className="hl__collectionDetails__jumpLinkItems">
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}`} className="hl__linkTag">
												Collection Home
											</Link>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}`} className="hl__linkTag">
												Explore the Collection
											</Link>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}/browse`} className="hl__linkTag">
												Browse by Topic
											</Link>
										</div>
										<div className="hl__collectionDetails__jumpLink">
											<Link to={`/${exhibit.slug}/research`} className="hl__linkTag">
												Essays & Research
											</Link>
										</div>
									</nav>
								</div>
							</Sticky>
						 )
					 }
			</Media>
		);
	}
}

export default SpotlightToolbar;
