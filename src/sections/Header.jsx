// logo
import logo from '../assets/Logo.svg';
const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<img src={logo} alt="logo" border="0" />
				</li>
				<li>Home</li>
				<li>About</li>
				<li>Menu</li>
				<li>Reservations</li>
				<li>Order online</li>
				<li>Login</li>
			</ul>
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
