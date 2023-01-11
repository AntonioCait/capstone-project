export const SpecialCard = (props) => {
	return (
		<article className="special-card">
			<div className="special-card-img">
				<img src={props.img} alt="" srcset="" />
			</div>
			<div className="special-card-text">
				<h3>{props.title}</h3>
				<p>{props.price}</p>
			</div>
			<div className="special-card-description">
				<p>{props.description}</p>
			</div>
			<div className="special-card-link">
				<a href="/#">Order a delivery</a>
			</div>
		</article>
	);
};
