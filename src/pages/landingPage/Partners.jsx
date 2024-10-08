import amazonLogo from '@/assets/images/logo/svg/amazon-ar21.svg';
import alibabaLogo from '@/assets/images/logo/svg/alibaba-ar21.svg';
import walmartLogo from '@/assets/images/logo/svg/walmart-ar21.svg';
import ebayLogo from '@/assets/images/logo/svg/ebay-ar21.svg';
import aliexpressLogo from '@/assets/images/logo/svg/aliexpress-ar21.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function Partners() {
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
			<SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={amazonLogo} alt="amazon_logo" />
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={alibabaLogo} alt="alibaba_logo" />
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={walmartLogo} alt="walmart_logo" />
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={aliexpressLogo} alt="aliexpress_logo" />
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={ebayLogo} alt="ebay_logo" />
			</SwiperSlide>
		</Swiper>
	);
}

export default Partners;
