import { Helmet } from 'react-helmet';

import { Box, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';

import backgroundImage from '@/assets/images/header/banner_light.png';
// import ImageCard from '@/components/ImageCard';
import image1 from '@/assets/images/help/1.png';
import image2 from '@/assets/images/help/2.png';
import image3 from '@/assets/images/help/3.png';
import image4 from '@/assets/images/help/4.png';
import image5 from '@/assets/images/help/5.png';
import image6 from '@/assets/images/help/6.png';
import image7 from '@/assets/images/help/7.png';
import image8 from '@/assets/images/help/8.png';

const helpContents = [
	{
		title: '1. Setting Up Your Account',
		subTitle: 'Creating Your Account',
		image: image1,
		content:
			'To get started, create an account by signing up with your email or social media. Having an account unlocks all the personalize features like notifications, saved searches, and tasks management.',
		description: {
			title: 'Accessing Your Account Dashboard',
			content:
				'Once logged in, you’ll be taken to your personalized dashboard. Here’s what you’ll find and how you can use each section:',
			list: [
				<span>
					<b>Notifications:</b> Stay updated with the latest price drops, new trends, or changes in your
					favorite products. Notifications will appear at the top of your dashboard. Click on a notification
					to view more details or take action, such as buying a product or reviewing a trend.
				</span>,
				<span>
					<b>Messages:</b> Use the built-in messaging system to communicate with other Rbetrage users. You can
					message buyers, sellers, or even connect with other users in the community. Simply click on the
					Messages tab, select a contact, and start a conversation.
				</span>,
				<span>
					<b>Tasks:</b> Track your buying or selling activities with the Tasks section. Here, you can create
					tasks, such as setting reminders for checking prices, following up with sellers, or managing product
					listings. This is a great way to stay organized and ensure you don’t miss key actions.
				</span>,
				<span>
					<b>Comments:</b> You can leave comments on product pages or join discussions in forums. Whether it’s
					giving feedback on a product or engaging in discussions, click the Comments section on any page to
					share your thoughts.
				</span>,
			],
		},
	},
	{
		title: '2. Navigating the Homepage and Trending Products',
		subTitle: 'Exploring Trending Products',
		image: image2,
		content: '',
		list: [
			<span>
				<b>Trending Products Feed:</b> The homepage showcases a live feed of products trending on social media.
				Scroll through to discover the hottest items, and click on any product tile for more details.
			</span>,
			<span>
				<b>Interactive Product Tiles:</b> Each product is displayed in an interactive tile format. Hover over a
				tile to see quick metrics such as social media mentions or user ratings. Clicking on a tile opens the
				product details page, where you can explore more.
			</span>,
		],
		description: {
			title: 'Viewing Product Details',
			content: '',
			list: [
				<span>
					<b>Product Page Overview:</b> On the product page, you’ll find an overview that includes detailed
					information like specs, social media posts, reviews, and pricing from different marketplaces.
				</span>,
				<span>
					<b>Social Media and Reviews:</b> Scroll down to see what people are saying about the product on
					social media or read reviews from other Rbetrage users to make an informed decision.
				</span>,
			],
		},
	},
	{
		title: '3. Comparing Prices and Analyzing Trends',
		subTitle: 'Using the Rbetrage AI for Price Comparison',
		image: image3,
		content: '',
		list: [
			<span>
				<b>AI-Driven Price Comparison:</b> Rbetrage’s AI scans multiple marketplaces to fetch the best prices.
				You can see a Price Comparison Chart that visually shows how prices vary across Amazon, eBay, Walmart,
				and more.
			</span>,
			<span>
				<b>Exploring Seller Info:</b> For each marketplace, the listing includes important data like price,
				shipping costs, delivery times, and seller reputation. Use this information to choose the best deal.
			</span>,
			<span>
				<b>Similar Product Recommendations:</b> Don’t just stop at one product! Rbetrage’s AI also recommends
				similar items, so you can browse through other options to find the perfect match.
			</span>,
		],
		description: {
			title: 'Leveraging Historical Price Data',
			content: '',
			list: [
				<span>
					<b>Price History Graphs:</b> Each product page features a Price History Graph that shows how prices
					have fluctuated over time. This graph helps you track past trends and determine the best time to
					buy.
				</span>,
				<span>
					<b>Trend Analysis:</b> Under the Trend Analysis section, get insights on market trends that may
					affect the product’s price, helping you make more informed decisions.
				</span>,
			],
		},
	},
	{
		title: '4. Making Purchases and Managing Sales',
		subTitle: 'How to Buy',
		image: image4,
		content: '',
		list: [
			<span>
				<b>Buy Now Option:</b> When you find the product you want, click the Buy Now button. This will take you
				directly to the marketplace offering the best price.
			</span>,
			<span>
				<b>Compare Delivery Options:</b> You can also compare delivery times and shipping costs to ensure the
				product meets your timeline.
			</span>,
		],
		description: {
			title: 'How to Sell Strategically',
			content: '',
			list: [
				<span>
					<b>Sell Strategy Insights:</b> If you’re selling, use the Sell Strategy Insights feature to compare
					the lowest buy price with the highest selling price across marketplaces. This helps you determine
					the best platform to sell for maximum profit.
				</span>,
			],
		},
	},
	{
		title: '5. Filtering and Sorting for Precision',
		subTitle: 'Using Advanced Filters',
		image: image5,
		content: '',
		list: [
			<span>
				<b>Filter Options:</b> You can narrow down your search results with filters such as price range, brand,
				product condition (new, used, refurbished), seller ratings, and location. Access the filter menu at the
				top of the search results page.
			</span>,
			<span>
				<b>Customizing Filters:</b> Tailor the filters to your specific needs by selecting multiple criteria.
				For instance, you can filter for products under $50 with a seller rating of 4.5 stars or higher.
			</span>,
		],
	},
	{
		title: '6. Engaging with the Community',
		subTitle: 'Joining Discussion Forums',
		image: image6,
		content: '',
		list: [
			<span>
				<b>Explore Forums:</b> Connect with other Rbetrage users by joining our community forums. Ask questions,
				share tips, or discuss the latest trends. You’ll find categories based on product types, selling
				strategies, and more.
			</span>,
		],
		description: {
			title: 'User Profiles and Social Sharing',
			content: '',
			list: [
				<span>
					<b>Create Your Profile:</b> Build your profile and start following trusted users. This way, you can
					exchange ideas, follow their buying/selling tips, and get notifications when they find good deals.
				</span>,
				<span>
					<b>Share Content:</b> Found an amazing deal or a unique buying tip? Share it directly on social
					media using our built-in sharing feature.
				</span>,
			],
		},
	},
	{
		title: '7. Going Mobile',
		subTitle: 'Using Rbetrage On-The-Go',
		image: image7,
		content: '',
		list: [
			<span>
				<b>Mobile App:</b> Download the Rbetrage mobile app for a seamless experience. The app includes all the
				features of the website, and you’ll get real-time push notifications for price alerts, new trends, and
				updates on your tasks or comments.
			</span>,
		],
	},
	{
		title: '8. Premium Features for Power Users',
		subTitle: 'Unlock Advanced Tools',
		image: image8,
		content: '',
		list: [
			<span>
				<b>Premium Subscription:</b> For power users, we offer premium features like personalized alerts,
				in-depth analytics, and priority support. Upgrade your account to gain access to these exclusive
				features and boost your buying and selling game.
			</span>,
		],
	},
];

function HelpPage() {
	return (
		<Box>
			<Helmet>
				<title>How to use Page | Rbetrage</title>
				<meta name="description" content="Help page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/help" />
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
					<h1>How to Use Rbetrage</h1>
				</Stack>
				<Box
					sx={{
						px: '100px',
						color: '#193D34',
					}}
				>
					<Typography>
						Welcome to Rbetrage! This step-by-step guide will help you navigate the platform and maximize
						its features for smart buying and selling decisions. Let&apos;s dive into how you can use every
						part of Rbetrage
					</Typography>
					{helpContents.map((item, index) => (
						<Stack
							sx={{
								maxWidth: '1036px',
								mt: '100px',
							}}
							key={index}
						>
							<Typography sx={{ fontSize: '20px', fontWeight: '800' }}>{item.title}</Typography>

							<Stack
								sx={{
									px: 5,
									py: 3,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									background: '#E9F2F4',
									mt: 5,
								}}
							>
								<Stack spacing={2} sx={{ maxWidth: '558px' }}>
									<Typography sx={{ fontSize: '13px', lineHeight: '23px', fontWeight: '600' }}>
										{item.subTitle}
									</Typography>
									<Typography sx={{ fontSize: '13px', lineHeight: '23px' }}>
										{item.content}
									</Typography>
									{item.list && (
										<List sx={{ listStyleType: 'disc', pl: 2 }}>
											{item.list.map((list, key) => (
												<ListItem sx={{ display: 'list-item', p: 0 }} key={key}>
													<ListItemText>{list}</ListItemText>
												</ListItem>
											))}
										</List>
									)}
								</Stack>
								<img src={item.image} alt="help 1" />
							</Stack>
							{item.description && (
								<Stack sx={{ gap: 1, mt: 6 }}>
									<Typography>{item.description.title}</Typography>
									<Typography>{item.description.content}</Typography>

									<List sx={{ listStyleType: 'disc', pl: 2 }}>
										{item.description.list.map((list, key) => (
											<ListItem sx={{ display: 'list-item', p: 0 }} key={key}>
												<ListItemText>{list}</ListItemText>
											</ListItem>
										))}
									</List>
								</Stack>
							)}
						</Stack>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default HelpPage;
