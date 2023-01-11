import { TestimonialCard } from '../components/TestimonialCard';
import '../styles/SectionTestimonials.css';

export const SectionTestimonials = () => {
	return (
		<section className="testimonials-wrapper">
			<div className="testimonials-header">
				<h2>What our customers say</h2>
			</div>
			<div className="testimonials-container">
				<TestimonialCard
					rating="5"
					img="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					name="John Doe"
					review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
				/>
				<TestimonialCard
					rating="5"
					img="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					name="John Doe"
					review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
				/>
				<TestimonialCard
					rating="5"
					img="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					name="John Doe"
					review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
				/>
			</div>
		</section>
	);
};
