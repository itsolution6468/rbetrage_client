import { Helmet } from 'react-helmet';

import { Box, Stack } from '@mui/material';

import backgroundImage from '@/assets/images/header/banner_light.png';
import StoryCard from '@/components/story/card';
import image1 from '@/assets/images/success1.png';
import image2 from '@/assets/images/success2.png';

const cardContents = [
	{
		contents: [
			{
				subTitle: 'Scaling from Dropshipping to Brand Ownership',
				lines: [
					"Alex Nguyen's journey in e-commerce began with a laptop. Like many aspiring entrepreneurs, he started by exploring dropshipping opportunities through platforms like AliExpress. Initially, Alex faced common challenges associated with dropshipping: long shipping times, inconsistent product quality, and fierce competition.",
					'Undeterred, Alex recognized the potential to carve out a niche in the electronics market. Armed with a passion for technology and a keen eye for emerging trends, he meticulously researched trending products and consumer preferences. This research led him to identify a gap in the market for premium tech accessories that combined functionality with style.',
					'Determined to offer superior products and customer service, Alex decided to transition from dropshipping to establishing his own brand. This shift allowed him greater control over product quality, shipping times, and customer satisfaction. He forged partnerships with reliable suppliers who shared his commitment to excellence.',
					"To drive initial sales and brand awareness, Alex leveraged digital marketing strategies, particularly Facebook ads and influencer partnerships. By targeting tech enthusiasts and early adopters, he quickly gained traction in the competitive electronics market. The combination of compelling product offerings, strategic marketing, and exceptional customer support propelled Alex's brand to success.",
					'Within a year of launching his brand, Alex surpassed $500,000 in revenue. His products gained recognition for their innovative designs and premium quality, attracting a loyal customer base. Today, Alex continues to expand his product line and explore new opportunities in the tech industry. His journey from dropshipping novice to successful brand owner underscores the transformative power of strategic pivots and unwavering dedication in e-commerce.',
				],
			},
		],
		flg: true,
		imageUrl: image1,
	},
	{
		contents: [
			{
				subTitle: 'Harnessing Video Marketing for Niche Products',
				lines: [
					"Sarah Johnson's entrepreneurial journey began with a passion for fitness and a keen interest in innovative workout gear. As a fitness enthusiast herself, Sarah noticed a gap in the market for high-performance fitness equipment that catered to serious athletes and fitness enthusiasts. Starting small with retail arbitrage to test product demand, Sarah quickly identified promising opportunities in niche e-commerce. She recognized that traditional marketing methods alone wouldn't suffice in showcasing the unique features and benefits of her products. This realization led Sarah to explore the untapped potential of video marketing.",
					"Sarah embarked on a strategic video marketing campaign aimed at highlighting her products' functionality, durability, and user testimonials. Collaborating with fitness influencers and producing high-quality video content, she effectively conveyed the value of her fitness equipment to her target audience. Platforms like Instagram and YouTube became her primary channels for engaging with fitness enthusiasts and potential customers.",
					"The impact of Sarah's video marketing strategy was profound. Not only did it drive significant traffic to her online store, but it also positioned her brand as a leader in the niche fitness market. By showcasing real-world applications of her products and fostering genuine connections with her audience, Sarah remarkably increased sales and brand loyalty.",
					"Within two years of launching her e-commerce venture, Sarah's business surpassed $250,000 in annual revenue. Her success underscores the transformative potential of video marketing in niche markets, demonstrating how compelling storytelling and authentic engagement can drive substantial growth in e-commerce.",
				],
			},
		],
		flg: true,
		imageUrl: image2,
	},
];

function SuccessStoryPage() {
	return (
		<Box>
			<Helmet>
				<title>Success Story Page | Rbetrage</title>
				<meta name="description" content="Dropshipping page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/success_story" />
			</Helmet>
			<Box
				sx={{
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<Stack
					sx={{
						justifyContent: 'center',
						display: 'flex',
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						color: '#193D34',
						width: '100%',
						height: '160px',
						marginBottom: '40px',
						borderRadius: '10px',
					}}
				>
					<h1>Success Story</h1>
				</Stack>
				{cardContents.map((card, index) => (
					<StoryCard key={`card-${index}`} data={card} order={index + 1} />
				))}
			</Box>
		</Box>
	);
}

export default SuccessStoryPage;
