export const TestimonialCard = (props) => {
	return (
		<article
			className="testimonial-card"
			style={{
				width: '250px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#edefee',
				padding: '20px',
				borderRadius: '16px',
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
			}}
		>
			<div
				className="testimonial-rating"
				style={{
					width: '100%',
					padding: '10px',
					fontSize: '1.1rem',
					fontWeight: 'bold',
				}}
			>
				<p>Rating: {props.rating}</p>
			</div>
			<div
				className="testimonial-user"
				style={{
					width: '100%',
					padding: '10px',
					display: 'flex',
				}}
			>
				<img
					src={props.img}
					alt=""
					srcset=""
					style={{
						width: '50px',
						height: '50px',
						borderRadius: '50%',
						marginRight: '10px',
					}}
				/>
				<p>{props.name}</p>
			</div>
			<div
				className="testimonial-review"
				style={{
					width: '100%',
					padding: '10px',
				}}
			>
				<p>{props.review}</p>
			</div>
		</article>
	);
};
