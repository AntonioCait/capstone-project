import './App.css';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import { SectionHero } from './sections/SectionHero';
import { SectionSpecials } from './sections/SectionSpecials';
import { SectionTestimonials } from './sections/SectionTestimonials';
import { SectionAbout } from './sections/SectionAbout';

function App() {
	return (
		<>
			<Header />
			<SectionHero />
			<SectionSpecials />
			<SectionTestimonials />
			<SectionAbout />
			<Footer />
		</>
	);
}

export default App;
