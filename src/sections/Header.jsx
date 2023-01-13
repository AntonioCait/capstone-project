// logo
import logo from '../assets/Logo.svg';
import { useState } from 'react';

// icon RiAlignJustify
import { RiAlignJustify } from 'react-icons/ri';

import '../styles/Navbar.css';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="nav-wrapper">
			<ul className="nav-list">
				<li>
					<img className="nav-logo" src={logo} alt="logo" border="0" />
				</li>
				<li>Home</li>
				<li>About</li>
				<li>Menu</li>
				<li>Reservations</li>
				<li>Order online</li>
				<li>Login</li>
			</ul>
			<div className="nav-mobile-style">
				<div className="logo-desktop">
					<img className="nav-logo" src={logo} alt="logo" border="0" />
				</div>
				<div className="nav-menu" onClick={handleMenuClick}>
					<RiAlignJustify className="nav-react-icon" />
				</div>
			</div>
			{isMenuOpen && (
				<ul className="nav-list-mobile">
					<li>Home</li>
					<li>About</li>
					<li>Menu</li>
					<li>Reservations</li>
					<li>Order online</li>
					<li>Login</li>
				</ul>
			)}
		</nav>
	);
};

export const Header = () => {
	return (
		<header>
			<Navbar />
		</header>
	);
};
