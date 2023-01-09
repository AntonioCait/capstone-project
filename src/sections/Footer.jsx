import logo from '../assets/Logo.svg';
import '../styles/Footer.css';

export const Footer = () => {
	return (
		<footer className="footer-wrapper">
			<div className="footer-container">
				<div className="footer-left">
					<img src={logo} alt="" srcset="" />
				</div>
				<div className="footer-left-center">
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Menu</li>
						<li>Reservations</li>
						<li>Order online</li>
						<li>Login</li>
					</ul>
				</div>
				<div className="footer-right-center">
					<ul>
						<li>Address</li>
						<li>Phone Number</li>
						<li>Email</li>
					</ul>
				</div>
				<div className="footer-right">
					<ul>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
