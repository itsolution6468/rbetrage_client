import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Story from '@/components/story';
import 'swiper/css';
import 'swiper/css/navigation';

const stories = [
	{
		name: 'Kyle Brattan',
		image: '/images/people/person1.png',
		year: '2020',
		content:
			'I have done over $100K from Rbetrage and now have tools for video creation, Facebook targeting, landing page design as well as product research.',
	},
	{
		name: 'Yash Shah',
		image: '/images/people/person2.png',
		year: '2022',
		content:
			'I am projecting products I have found on the site to generate $40,000 in sales by the end of this month. Cheers to Rbetrage for serving as a platform to easily find winning products.',
	},
	{
		name: 'Nelson Muriuki',
		image: '/images/people/person3.png',
		year: '2019',
		content:
			'As I close another month with $10,000+ in sales, I cannot forget to thank Rbetrage. I want you to know that with persistence, commitment & patience, you can become a “Success Story” too.',
	},
];

function SuccessStory() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				fontSize: '20px',
				py: 5,
				px: 2,
			}}
		>
			<Typography variant="h2" component="h2" align="center" sx={{ paddingBottom: '30px' }}>
				Success Story
			</Typography>
			<Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={1} navigation={!isMobile}>
				{stories.map((story, index) => (
					<SwiperSlide key={`story-${index}`}>
						<Story story={story} isMobile={isMobile} />
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
}

export default SuccessStory;
