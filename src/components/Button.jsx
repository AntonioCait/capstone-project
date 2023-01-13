export const Button = ({ text }) => {
	return (
		<button
			className="btn"
			style={{
				backgroundColor: '#f4ce14',
				color: '#333333',
				padding: '10px 20px',
				border: 'none',
				borderRadius: '16px',
				fontSize: '16px',
				fontWeight: 'regular',
				cursor: 'pointer',
				maringTop: '20px',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
		>
			{text}
		</button>
	);
};
