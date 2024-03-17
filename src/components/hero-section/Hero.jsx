import "./hero-style.css";

function Hero({ cName, heroImg, title, text, url, btnClass, buttonText }) {
	return (
		<>
			<div className={cName}>
				<img src={heroImg} alt="Heroimage" />
				<div className="hero-text">
					<h1>{title}</h1>
					<p>{text}</p>
					<a href={url} className={btnClass}>
						{buttonText}
					</a>
				</div>
			</div>
		</>
	);
}

export default Hero;
