import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const winningProducts = [
	{
		title: 'Amazon',
		url: '/images/products/landing/Card.png',
		description: 'Nexus Fruit Salad Cutting Bowl',
	},
	{
		title: 'Nexus',
		url: '/images/products/landing/Card(1).png',
		description: 'Nexus Fruit Salad Cutting Bowl',
	},
	{
		title: 'AliExpress',
		url: '/images/products/landing/Card(2).png',
		description: 'Nexus Fruit Salad Cutting Bowl',
	},
	{
		title: 'CJD',
		url: '/images/products/landing/Card.png',
		description: 'Nexus Fruit Salad Cutting Bowl',
	},
	{
		title: 'Tiktok',
		url: '/images/products/landing/Card(1).png',
		description: 'Nexus Fruit Salad Cutting Bowl',
	},
];

function WinningProducts() {
	return (
		<Box
			sx={{
				fontSize: '20px',
			}}
		>
			<h2
				style={{
					textAlign: 'center',
				}}
			>
				Find Winning Products
			</h2>
			<Swiper
				spaceBetween={10}
				breakpoints={{
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 2,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 3,
					},
					// when window width is >= 1024px
					1024: {
						slidesPerView: 4,
					},
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{winningProducts.map((data, index) => (
					<SwiperSlide
						key={`product-slide-${index}`}
						style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
					>
						<Link to="/trending">
							<img src={data.url} alt={`product-${data.title}`} />
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
}

export default WinningProducts;
