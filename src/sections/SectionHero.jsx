import hero from '../assets/restauranfood.jpg';
import '../styles/SectionHero.css';
import { Button } from '../components/Button';

export const SectionHero = () => {
	return (
		<section className="hero-wrapper">
			<div className="hero-container">
				<div className="hero-text">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies
						lacinia, nisl nisl aliquet nisl, nec aliquet nisl lorem non nisl. Sed euismod, nisl nec ultricies
						lacinia, nisl nisl aliquet nisl, nec aliquet nisl lorem non nisl. Sed euismod.
					</p>
					<Button text="Start free trial" />
				</div>
				<div className="hero-img">
					<img src={hero} alt="" srcset="" />
				</div>
			</div>
		</section>
	);
};
