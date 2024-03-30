import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
        fetch('https://task-no-01-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
	return (
		<section>
			<SectionTitle
				subHeading="What our Client day"
				heading={"Testimonials"}></SectionTitle>
			{/* <!-- testimonial section --> */}
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper">
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="mx-24 flex flex-col items-center my-16">
							<Rating
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>
							<p className="py-5">{review.details}</p>
							<h3 className="text-2xl text-orange-400">
								{review.name}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
