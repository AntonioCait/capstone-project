import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookingForm.css';

export const BookingForm = (props) => {
	const [date, setDate] = useState('');
	const [guests, setGuests] = useState('');
	const [occasion, setOccasion] = useState('');

	const handleDate = (e) => {
		setDate(e.target.value);
	};

	const handleGuests = (e) => {
		// setGuests(e.target.value);
		// value cant be less than 1
		if (e.target.value < 1) {
			setGuests(1);
		} else {
			setGuests(e.target.value);
		}
	};

	const handleOccasion = (e) => {
		setOccasion(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="form-form" onSubmit={handleSubmit}>
			<label for="res-date">Choose date</label>
			<input required type="date" id="res-date" name="res-date" value={date} onChange={handleDate} />
			<label for="res-time">Choose time</label>
			<select required name="res-time" id="res-time" onChange={props.handleTime}>
				{Object.keys(props.availableTimes).map((time) => (
					<option key={time} value={time}>
						{time}
					</option>
				))}
			</select>

			<label for="guests">Number of guests</label>
			<input
				required
				type="number"
				placeholder="1"
				min="1"
				max="10"
				id="guests"
				value={guests}
				onChange={handleGuests}
			/>
			<label for="occasion">Occasion</label>
			<select required id="occasion" value={occasion} onChange={handleOccasion}>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			{/* <input type="submit" value="Make Your reservation" /> */}

			{date && guests && occasion ? (
				<Link to="/confirmed-booking">
					<button
						style={{
							margin: '2rem 0',
							backgroundColor: '#f5a623',
							color: 'white',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '16px',
							cursor: 'pointer',
							fontSize: '15px',
							fontWeight: 'medium',
							transition: 'all 0.3s ease-in-out',
						}}
					>
						Make Your reservation
					</button>
				</Link>
			) : (
				<button
					style={{
						margin: '2rem 0',
						backgroundColor: '#ffffff',
						color: '#cecece',
						border: 'none',
						padding: '10px 20px',
						borderRadius: '16px',
						fontSize: '15px',
						fontWeight: 'medium',
						transition: 'all 0.3s ease-in-out',
					}}
					disabled
				>
					Make Your reservation
				</button>
			)}
		</form>
	);
};
