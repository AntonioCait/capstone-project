import './App.css';
import { Footer } from './sections/Footer';
import { SectionHero } from './sections/SectionHero';
import { SectionSpecials } from './sections/SectionSpecials';
import { SectionTestimonials } from './sections/SectionTestimonials';
import { SectionAbout } from './sections/SectionAbout';

// this is the main home page

function App() {
	return (
		<>
			<SectionHero />
			<SectionSpecials />
			<SectionTestimonials />
			<SectionAbout />
			<Footer />
		</>
	);
}

export default App;
