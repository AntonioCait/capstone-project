import './App.css';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import { SectionHero } from './sections/SectionHero';
import { SectionSpecials } from './sections/SectionSpecials';

function App() {
	return (
		<>
			<Header />
			<SectionHero />
			<SectionSpecials />
			<Footer />
		</>
	);
}

export default App;
