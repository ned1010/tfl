import "./banner-style.css";
import PropTypes from "prop-types";


function BannerData({ cName, heading, text, image1, image2 }) {
	return (
		<div className={cName}>
			<div className="desc-text">
				<h2>{heading}</h2>
				<p>{text} </p>
			</div>
			<div className="image">
				<img src={image1} alt="image" />
				<img src={image2} alt="image" />
			</div>
		</div>
	);
}

export default BannerData;

//Proptypes validation
BannerData.propTypes = {
	cName: PropTypes.string,
	heading: PropTypes.string,
	text: PropTypes.string,
	image1: PropTypes.string,
	image2: PropTypes.string,
};
