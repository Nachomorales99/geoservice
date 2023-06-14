'use client';

import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Header = () => {
	const slides = [
		{
			url: 'https://res.cloudinary.com/nacho-morales/image/upload/v1685385419/Geoservice/Header/Petrolera2_ygmgsg.png',
		},
		{
			url: 'https://res.cloudinary.com/nacho-morales/image/upload/v1685385420/Geoservice/Header/Mineria_jkdp8m.jpg',
		},
		{
			url: 'https://res.cloudinary.com/nacho-morales/image/upload/v1685385420/Geoservice/Header/diga-acqua_2400x1160_m7xevq.jpg',
		},
		{
			url: 'https://res.cloudinary.com/nacho-morales/image/upload/v1685385421/Geoservice/Header/1245799_w0cw5u.png',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<div className="w-full pb-8 relative group">
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className="w-full h-[56.25vw] max-h-[780px] sm:h-[75vw] sm:max-h-[600px] md:h-[40vw] md:max-h-[600px] lg:h-[40vw] lg:max-h-[500px] bg-center bg-cover duration-500 bg-no-repeat"
			></div>

			<div className="hidden group-hover:block absolute top-[40%] left-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black bg-opacity-20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>

			<div className="hidden group-hover:block absolute top-[40%] right-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black bg-opacity-20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
		</div>
	);
};

export default Header;
