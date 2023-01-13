import '../styles/SectionSpecials.css';
import food1img from '../assets/bruchetta.svg';
import food2img from '../assets/salad.jpg';
import food3img from '../assets/lemon.jpg';

import { SpecialCard } from '../components/SpecialCard';
import { Button } from '../components/Button';

export const SectionSpecials = () => {
	return (
		<section className="specials-wrapper">
			<div className="specials-container">
				<div className="specials-header">
					<h2>This weeks speacials</h2>
					<Button text="Online menu" />
				</div>
				<main className="specials-cards">
					<SpecialCard
						img={food1img}
						title="Bruchetta"
						price="$12.99"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
					/>
					<SpecialCard
						img={food2img}
						title="Salad"
						price="$16.99"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
					/>
					<SpecialCard
						img={food3img}
						title="Lemon"
						price="$9.99"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
					/>
				</main>
			</div>
		</section>
	);
};
