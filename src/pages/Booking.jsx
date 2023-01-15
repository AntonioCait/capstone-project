import '../styles/Booking.css';
import { BookingForm } from '../components/BookingForm';
import { useState, useReducer, useEffect } from 'react';

export const Booking = () => {
	// const [availableTimes, setAvailableTimes] = useState([
	// 	'17:00',
	// 	'18:00',
	// 	'19:00',
	// 	'20:00',
	// 	'21:00',
	// 	'22:00',
	// ]);

	// change availableTimes to a reducer
	// const [availableTimes, setAvailableTimes] = useReducer((state, newState) => ({ ...state, ...newState }), {
	// 	'17:00': true,
	// 	'18:00': true,
	// 	'19:00': true,
	// 	'20:00': true,
	// 	'21:00': true,
	// 	'22:00': true,
	// });

	function updateTimes(time, value) {
		setAvailableTimes({ [time]: value });
	}

	// function called initializeTimes which will create the initial state for the availableTimes.
	function initializeTimes() {
		const times = {};
		for (let i = 17; i < 23; i++) {
			times[`${i}:00`] = true;
		}
		return times;
	}

	// useEffect(() => {
	// 	initializeTimes();
	// }, []);

	// change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.
	const [availableTimes, setAvailableTimes] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initializeTimes()
	);

	// const handleTime = (e) => {
	// 	setAvailableTimes(e.target.value);
	// };
	return (
		<>
			<section className="booking-wrapper">
				<h1>Book a table</h1>
				<div className="booking-container">
					<BookingForm availableTimes={availableTimes} handleTime={updateTimes} />
				</div>
			</section>
		</>
	);
};
