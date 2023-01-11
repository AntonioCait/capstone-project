import img1 from '../assets/about1.jpg';
import img2 from '../assets/restaurant.jpg';
import '../styles/SectionAbout.css';

export const SectionAbout = () => {
	return (
		<section className="about-wrapper">
			<div className="about-container">
				<div className="about-text">
					<h2>Little lemon</h2>
					<h3>Chicago</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla.
					</p>
				</div>
				<div className="about-imgs">
					<img className="img1" src={img1} alt="about1" />
					<img className="img2" src={img2} alt="about2" />
				</div>
			</div>
		</section>
	);
};
