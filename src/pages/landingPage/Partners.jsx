import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import amazonLogo from '@/assets/images/logo/svg/amazon-ar21.svg';
import alibabaLogo from '@/assets/images/logo/svg/alibaba-ar21.svg';
import walmartLogo from '@/assets/images/logo/svg/walmart-ar21.svg';
import ebayLogo from '@/assets/images/logo/svg/ebay-ar21.svg';
import aliexpressLogo from '@/assets/images/logo/svg/aliexpress-ar21.svg';

function Partners() {
	const imageList = [
		{
			src: amazonLogo,
			url: '/products/amazon',
		},
		{
			src: alibabaLogo,
			url: '/products/alibaba',
		},
		{
			src: walmartLogo,
			url: '/products/walmart',
		},
		{
			src: aliexpressLogo,
			url: '/products/aliexpress',
		},
		{
			src: ebayLogo,
			url: '/products/ebay',
		},
	];
	return (
		<Swiper
			modules={[Autoplay]}
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
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			loop="true"
		>
			{imageList.map((item, index) => (
				<SwiperSlide key={index} className="landing-swiper">
					<Link to={item.url}>
						<picture>
							<source type="image/webp" srcSet={item.src} />
							<img src={item.src} alt="amazon_logo" />
						</picture>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Partners;
