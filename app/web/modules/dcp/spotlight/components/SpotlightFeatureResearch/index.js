import React from 'react';
import { Link, withRouter } from 'react-router';

// components
import SpotlightToolbarContainer from '../../containers/SpotlightToolbarContainer';
import SpotlightPageHeaderContainer from '../../containers/SpotlightPageHeaderContainer';

import './SpotlightFeatureResearch.scss';

const SpotlightFeatureResearch = (props) => {


	return (
		<section className="hl__spotlightFeatureContainer">
			<SpotlightPageHeaderContainer
				params={{
					exhibitSlug: props.router.params.exhibitSlug,
				}}
			/>
			<SpotlightToolbarContainer
				params={{
					exhibitSlug: props.router.params.exhibitSlug,
				}}
			/>

			<section className="hl__spotlightFeatureContentContainer">
				<h4 className="hl__spotlightFeatureContent__heading">Bibliography</h4>
				<p className="hl__spotlightFeatureContent__body">
					H[enri] O[mont]. “Fragment d’un manuscript anglo-saxon des Étymolgies d’Isidore de Sévile,” Bibliothèque de l’Ecole de Chartres 91 (1930), 405 n. 1.  <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
					Short citation of the former Fischer fragments used in Lindsay’s edition of Isidore as perhaps analogous to Paris, Bibliothéque national MS latin 4871.

				</p>
				<p className="hl__spotlightFeatureContent__body">
					Bernhard Bischoff.  Die südostdeutschen Schreibschulen und Bibliotheken in der Karolingerzeit.  Leipzig: Harrasowitz, 1940-1980. MS cited I, 257 and II, 246-247. <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
MS cited under its Phillipps number 20,688, ff. 1-8 and ascribed to St. Emmeram in the diocese of Regensberg.
				</p>
				<p className="hl__spotlightFeatureContent__body">
					Hubert Mordek.  Kirchenrecht und Reform im Frankenreich: Die Collectio vetus Gallica, die älteste systematische Kanonessammlung des fränkischen Gallien: Studien und Edition.  Beiträge zur Geschichte und Quellenkunde des Mittelalters 1.  Berlin: 1975.  MS cited 282.  <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
MS cited by its Munich shelf mark.
				</p>
				<div className="hl__spotlightFeatureContent__imageFullContainer">
					<div className="hl__spotlightFeatureContent__imageFull" />
					<h6 className="hl__spotlightFeatureContent__imageFullCaption">
						Harvard University, Houghton Library, medms_ms_lat_187-METS
					</h6>
					<Link className="hl__spotlightFeatureContent__imageFullLink">
						<img
							src="/images/camera.svg"
							alt="viewer icon"
							className="viewerIcon"
						/>View item detail
					</Link>
				</div>


				<p className="hl__spotlightFeatureContent__body">
					Bernhard Bischoff.  Die südostdeutschen Schreibschulen und Bibliotheken in der Karolingerzeit.  Leipzig: Harrasowitz, 1940-1980. MS cited I, 257 and II, 246-247. <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
MS cited under its Phillipps number 20,688, ff. 1-8 and ascribed to St. Emmeram in the diocese of Regensberg.
				</p>
				<p className="hl__spotlightFeatureContent__body">
					Hubert Mordek.  Kirchenrecht und Reform im Frankenreich: Die Collectio vetus Gallica, die älteste systematische Kanonessammlung des fränkischen Gallien: Studien und Edition.  Beiträge zur Geschichte und Quellenkunde des Mittelalters 1.  Berlin: 1975.  MS cited 282.  <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
MS cited by its Munich shelf mark.
				</p>
				<p className="hl__spotlightFeatureContent__body">
					H[enri] O[mont]. “Fragment d’un manuscript anglo-saxon des Étymolgies d’Isidore de Sévile,” Bibliothèque de l’Ecole de Chartres 91 (1930), 405 n. 1.  <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
					Short citation of the former Fischer fragments used in Lindsay’s edition of Isidore as perhaps analogous to Paris, Bibliothéque national MS latin 4871.

				</p>
				<p className="hl__spotlightFeatureContent__body">
					Bernhard Bischoff.  Die südostdeutschen Schreibschulen und Bibliotheken in der Karolingerzeit.  Leipzig: Harrasowitz, 1940-1980. MS cited I, 257 and II, 246-247. <a href="" className="hl__spotlightFeatureContent__link">HOLLIS</a> <br />
MS cited under its Phillipps number 20,688, ff. 1-8 and ascribed to St. Emmeram in the diocese of Regensberg.
				</p>
				<h4 className="hl__spotlightFeatureContent__heading">For Further Study</h4>

				<p className="hl__spotlightFeatureContent__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor venenatis lacus, sit amet porttitor enim. Sed rhoncus quis tellus a faucibus. Suspendisse tincidunt enim sed ipsum iaculis mollis. Aliquam eget congue dui. Nullam fringilla congue sapien, id maximus massa vestibulum id. Curabitur tortor nisl, ullamcorper dignissim mauris id, ultrices lobortis felis. Nulla dictum suscipit nulla eget mattis. Morbi in nunc vehicula, tempus libero et, tincidunt libero. Nunc condimentum sollicitudin lorem. Aliquam euismod mollis est, a volutpat ante lacinia non.

				</p>
				<p className="hl__spotlightFeatureContent__body">Sed rutrum magna ut ipsum efficitur egestas. Sed porta fermentum sapien a fermentum. Vivamus ut nulla turpis. Vivamus vitae nisi justo. Curabitur et sem sed lectus tempor lobortis sit amet sit amet quam. Donec sed maximus dolor, eget varius orci. Fusce at accumsan ipsum. Mauris porttitor scelerisque est, sed posuere nibh tempus ac. In dapibus orci quis orci elementum placerat. Integer quis fringilla turpis, accumsan tristique tortor. Pellentesque laoreet nunc odio, ac faucibus purus tincidunt sit amet. Sed porta at tortor ut dignissim.
				</p>
				<div className="hl__spotlightFeatureContent__imageRightContainer">
					<div className="hl__spotlightFeatureContent__imageSmall"></div>
					<h6 className="hl__spotlightFeatureContent__imageFullCaption">
						Harvard University, Houghton Library, medms_ms_lat_187-METS
					</h6>
					<Link className="hl__spotlightFeatureContent__imageFullLink">
						<img
							src="/images/camera.svg"
							alt="viewer icon"
							className="viewerIcon"
						/>View item detail
					</Link>
				</div>
				<p className="hl__spotlightFeatureContent__body">Donec justo turpis, venenatis id congue ut, elementum ac nibh. Fusce id velit nisi. Aliquam sit amet enim ac lacus vulputate mollis sit amet quis eros. Sed ante eros, venenatis quis odio eu, elementum tempor arcu. Praesent laoreet faucibus consequat. Aliquam tellus dolor, efficitur sed lectus ac, dictum consectetur orci. Nunc non nisl quis turpis blandit efficitur non ut dolor. Aliquam tempor vel dui id malesuada. Vivamus suscipit erat elit, sit amet condimentum lectus pulvinar quis. Pellentesque fringilla, dolor placerat ullamcorper ullamcorper, nisi lacus luctus magna.
				</p>
				<p className="hl__spotlightFeatureContent__body">Donec justo turpis, venenatis id congue ut, elementum ac nibh. Fusce id velit nisi. Aliquam sit amet enim ac lacus vulputate mollis sit amet quis eros. Sed ante eros, venenatis quis odio eu, elementum tempor arcu. Praesent laoreet faucibus consequat. Aliquam tellus dolor, efficitur sed lectus ac, dictum consectetur orci. Nunc non nisl quis turpis blandit efficitur non ut dolor. Aliquam tempor vel dui id malesuada. Vivamus suscipit erat elit, sit amet condimentum lectus pulvinar quis. Pellentesque fringilla, dolor placerat ullamcorper ullamcorper, nisi lacus luctus magna.
				</p>
				<p className="hl__spotlightFeatureContent__body">Donec justo turpis, venenatis id congue ut, elementum ac nibh. Fusce id velit nisi. Aliquam sit amet enim ac lacus vulputate mollis sit amet quis eros. Sed ante eros, venenatis quis odio eu, elementum tempor arcu. Praesent laoreet faucibus consequat. Aliquam tellus dolor, efficitur sed lectus ac, dictum consectetur orci. Nunc non nisl quis turpis blandit efficitur non ut dolor. Aliquam tempor vel dui id malesuada. Vivamus suscipit erat elit, sit amet condimentum lectus pulvinar quis. Pellentesque fringilla, dolor placerat ullamcorper ullamcorper, nisi lacus luctus magna.
				</p>
				<div className="hl__spotlightFeatureContent__imageLeftContainer">
					<div className="hl__spotlightFeatureContent__imageSmall"></div>
					<h6 className="hl__spotlightFeatureContent__imageFullCaption">
						Harvard University, Houghton Library, medms_ms_lat_187-METS
					</h6>
					<Link className="hl__spotlightFeatureContent__imageFullLink">
						<img
							src="/images/camera.svg"
							alt="viewer icon"
							className="viewerIcon"
						/>View item detail
					</Link>
				</div>
				<p className="hl__spotlightFeatureContent__body">Suspendisse pulvinar lorem eu augue fringilla facilisis. Vivamus vel mi consequat neque sollicitudin tristique et id augue. Integer at sagittis massa. Phasellus pulvinar pharetra turpis. Cras nec mi nec ipsum elementum tempor. Vestibulum pretium felis in euismod lobortis. Ut leo ligula, auctor vitae rutrum eget, finibus a lorem. Donec feugiat nunc non justo varius egestas. Maecenas tincidunt turpis ut diam consequat, vel porta massa venenatis. Duis ullamcorper elit a finibus placerat. Nunc quis mattis quam. Donec hendrerit, tellus ut bibendum rutrum, justo nisi tincidunt risus, ac elementum velit lectus vel orci. Integer feugiat ut nisi ac rutrum. Cras fermentum purus lectus, et porttitor urna ornare eget. Integer in pharetra mi. Sed cursus tortor velit, sit amet scelerisque lacus facilisis sit amet.
				</p>


			</section>
			<section className="hl__spotlightFeature__collectionHighlights">
				<div className="hl__spotlightFeature__divider"></div>
				<h4 className="hl__spotlightFeature__sectionTitle">From the collection</h4>
				<div className="hl__blacklightHome__moreHighligthsFeaturedContainer">
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured bough"
						tabIndex='0'
					>

					</Link>
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured eclogues"
						tabIndex='0'
					>
					</Link>
					<Link
						className="hl__blacklightHome__moreHighlightsFeatured colosseum"
						tabIndex='0'

					>
					</Link>
				</div>
				<div className="hl__blacklightHome__seeAllContainer">
					<button className="hl__blacklightHome__seeAll">explore the collection <img className="seeAllIcon" src="images/arrow_right.svg" alt=""/></button>
				</div>
			</section>







			{/*}<p>Spotlight Feature page</p>
			<p>{props.features.id}</p>
			<p className="hl__spotlightFeature__content">{props.heading}</p> */}

		</section>

	);
}


export default withRouter(SpotlightFeatureResearch);
