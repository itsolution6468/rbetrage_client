import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import ImageCard from '@/components/ImageCard';
import image1 from '@/assets/images/image1.png';
import image2 from '@/assets/images/image2.png';
import image3 from '@/assets/images/image3.png';

const cardContents = [
	{
		contents: [
			{
				subTitle: 'Why Choose Rbetrage?',
				subContent:
					'Rbetrage uses advanced AI algorithms to help dropshippers maximize their profits by identifying the best products to buy at low prices and sell at higher prices across multiple marketplaces. Unlike competitors that focus on a few platforms, Rbetrage covers a wide range of well-known marketplaces including Amazon, Alibaba, Etsy, eBay, Walmart, and AliExpress.',
			},
			{
				subTitle: 'Features',
				subContent:
					'Comprehensive Market Analysis: Compare prices of trending products across different marketplaces. Strong AI Algorithms: Advanced AI filters to identify the best dropshipping opportunities. Multi-Market Integration: Access product data from Amazon, Alibaba, Etsy, eBay, Walmart, and AliExpress. User-Friendly Interface: Intuitive and easy-to-navigate platform. Real-Time Updates: Stay updated with the latest trends and price changes.',
			},
		],
		imageUrl: image1,
	},
	{
		contents: [
			{
				subTitle: 'Getting Started with Rbetrage',
				lines: [
					'1. Sign Up: Create an account to get started.',
					'2. Connect Marketplaces: Integrate your chosen marketplaces.',
					'3. Set Preferences: Customize your product filters and price range.',
					'4. Start Analyzing: Use our AI algorithms to find the best dropshipping opportunities.',
				],
			},
			{
				subTitle: 'Contents',
				lines: [
					'1. What Is Dropshipping And How Is It Different?',
					'2. How Does Dropshipping Work?',
					'3. Is Dropshipping Worth The Effort?',
					'4. Who Should Adopt Dropshipping?',
					'5. Getting Started With The Dropshipping Model',
					'6. Finding Suppliers',
					'7. How to select suppliers',
					'8. Shipping Options',
					'9. Deadly Mistakes That Can Kill Your Dropshipping Business',
					'10. Conclusion',
				],
			},
		],
		imageUrl: image2,
	},
	{
		contents: [
			{
				subTitle: 'What Is Dropshipping And How Is It Different?',
				subContent:
					'Dropshipping is a supply chain management method where products are shipped directly from the manufacturer or supplier to the customer. This eliminates the need for stocking inventory, reducing overhead costs and risks.',
			},
			{
				subTitle: 'How Does Dropshipping Work?',
				subContent:
					'Set Up Storefront: Use Rbetrage or other platforms like Shopify. Find Suppliers: Locate suppliers on platforms such as AliExpress and CJ Dropshipping. Import Products: Copy product information from suppliers’ websites. Set Pricing: Determine your retail price. Order Fulfillment: Forward customer orders to the supplier for delivery.',
			},
			{
				subTitle: 'Is Dropshipping Worth The Effort?',
				subContent:
					'Set Up Storefront: Use Rbetrage or other platforms like Shopify. Find Suppliers: Locate suppliers on platforms such as AliExpress and CJ Dropshipping. Import Products: Copy product information from suppliers’ websites. Set Pricing: Determine your retail price. Order Fulfillment: Forward customer orders to the supplier for delivery.',
				lines: [
					'Yes, dropshipping is worth the investment due to:',
					'Low Capital Investment: Minimal upfront costs.',
					'Zero Stock Requirements: No need to manage inventory.',
					'No Warehouse Issues: Avoid warehouse-related expenses and hassles.',
					'Work From Anywhere: Manage your business remotely.',
					'Multiple Options: Flexibility in product and supplier choices.',
					'Automation-Friendly: Use tools like Rbetrage to streamline processes.',
					'Cross-Border Opportunities: Expand your market globally.',
					'Risk-Free Testing: Test products without high financial risk.',
				],
			},
		],
		imageUrl: image3,
	},
];

const contentsArr = [
	{
		title: 'Who Should Adopt Dropshipping?',
		content:
			'Validating Entrepreneurs: Test new eCommerce ideas with low risk. First-timers or Budget Entrepreneurs: Gain business experience without large investments. Walmart Entrepreneurs: Sell a variety of products without high overhead costs.',
	},
	{
		title: 'Getting Started With The Dropshipping Model',
		content:
			'Select A Niche: Focus on a specific product category. Start with a General Store: Test various products to find the best niche. Identify Your Interests: Choose products you are passionate about. Research Customers: Understand customer needs and preferences. Check Trends: Use Rbetrage to find trending products. Find The Perfect Products: Balance retail prices, product weight, turnover rates, usability, and durability.',
	},
	{
		title: 'Finding Suppliers',
		content:
			'Comprehensive Supplier List: Use Rbetrage to find quality suppliers across multiple marketplaces. Evaluate Suppliers: Ensure they meet your quality and price standards. Rbetrage is your go-to platform for mastering the dropshipping business, helping you to identify lucrative opportunities and streamline your operations for maximum profitability. Start your dropshipping journey with Rbetrage today!',
		sub: [
			{
				title: 'Searching Online',
				content:
					'Open your web browser and type your product’s name with "supplier" at the end. Gather contact information from the results and reach out through email or phone. Many businesses also have online forums for queries and services on their websites.',
			},
			{
				title: 'Contact a Manufacturer',
				content:
					'If you plan on selling branded goods, find the contact information of the manufacturers and contact them directly. Some manufacturers will readily provide the services you need. If they don’t, you can ask for their outlets or wholesale dealers.This approach might require more effort, but buying directly from the manufacturer usually means lower prices than those found through a standard Google search.',
			},
			{
				title: 'Wholesalers',
				content:
					'Contact shop owners and delivery services to find out about wholesale dealers in your area. Visit them with your idea and ask for their support. If your proposal is convincing and profitable for the wholesaler, you will get your product in no time.',
			},
			{
				title: 'Attend Trade Shows',
				content:
					'Trade shows are beneficial for both retailers and sellers. These events allow direct communication without the hassle of third parties. Attending trade shows will help you gain knowledge about dealers who can support your dropshipping business. This method is more time and money-intensive but is ideal for finding unique items. Additionally, you can meet startup owners who can share their experiences and challenges.',
			},
			{
				title: 'Supplier Directories',
				content:
					'This is the easiest and most immediate method. Many supplier directories list millions of products with their associated suppliers. Websites like AliExpress and DHGate provide a convenient way to connect with suppliers selling the exact products you want. Simply search for the product, find a supplier, add the product to your store, and use dropshipping order fulfillment software to automate the process. Sell the Trend, for example, connects you with low-cost AliExpress suppliers for your products.',
			},
		],
	},
	{
		title: 'How to Select a Supplier',
		content:
			'You must rely on the supplier for stock keeping, maintaining product quality, order fulfillment, timely delivery, and overall product management. The choices you make here will directly affect your business reputation and profit. Therefore, take your time to research suppliers before settling on one.',
		sub: [
			{
				title: 'Validation',
				content:
					'Not all manufacturers or wholesale sellers are open to dropshipping. To avoid wasting time, check the background of suppliers to ensure they are dropshippers before contacting them.',
			},
			{
				title: 'Experience',
				content:
					'As a startup, you need an experienced supplier. An inexperienced supplier can complicate your business and lead to failure. Ensure the supplier has a proven track record in dropshipping to ensure smooth business operations.',
			},
			{
				title: 'Order Fees',
				content:
					'Dropshippers handle everything from packing to delivery, charging a small fee for their services. Typically, this fee is a few dollars depending on the product price. If the supplier charges a high percentage of your profit, they are not suitablefor your business, even if their prices or product range seem competitive.',
			},
			{
				title: 'Provide Referral',
				content:
					'When signing up with a supplier, verify their promises and claims. A genuine supplier will provide contact information or connect you with previous clients to help establish trust and ensure stability in your business.',
			},
		],
	},
	{
		title: 'Shipping Options',
		content:
			'Shipping prices significantly impact purchase decisions. A majority of orders will be influenced by your shipping policy and prices. Ensure your supplier meets high standards for shipping, offers exact delivery time estimates, and keeps customers informed with real-time data. It’s also beneficial if the supplier offers multiple delivery and payment options and clear return policies, as this can influence customer satisfaction.',
		sub: [
			{
				title: 'Product and Photo Quality',
				content:
					'In online business, customers depend on pictures and supplier reliability. Therefore, the pictures on your site need to be clear and realistic. Many products are returned because they do not match the photographs. Ensure that the product images accurately represent the actual product to reduce return rates and improve customer satisfaction.',
			},
		],
	},
	{
		title: 'Deadly Mistakes That Can Kill Your Dropshipping Business',
		content:
			'Often when a person steps into the world of business, they are unaware of the reality of this field. Even if you know how to start a dropshipping business and master all aspects of marketing, there are still some pitfalls you have to be aware of. There are inevitable mistakes that you have to avoid to ensure the survival of your business. The common and destructive mistakes for a dropshipping business are:',
		details: [
			'- Communication gaps between you, your supplier, and the customers',
			'- Expecting quick results and easy money from dropshipping',
			'- Complicated, challenging to access, and unorganized way of recording sales data or order information',
			'- Lack of brand promotion',
			'- Complicated and hasty return process with non-flexible return options',
			'- Lack of professionalism while handling a customer or a problematic situation',
		],
	},
	{
		title: 'Conclusion',
		content:
			'We have come a long way with our dropshipping business, haven’t we! By now, you have gained complete knowledge of starting, running, promoting, and scaling a brand new business. Dropshipping is certainly a great way to set up a passive income source. After enough practice and hard work, you can expect to find products that can make you $1000 a day, and you can focus on building your brand. So the only thing left for you is to just suit up, follow the steps in this article, and dive into the wide world of dropshipping.',
	},
];

function DropshippingPage() {
	return (
		<Box>
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
					<h1>Dropshipping</h1>
				</Stack>
				{cardContents.map((card, index) => (
					<ImageCard key={`card-${index}`} data={card} order={index + 1} />
				))}
				{contentsArr.map((item, index) => (
					<Stack sx={{ gap: 2, mb: 2 }} key={`sub-${index}`}>
						<Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{item.title}</Typography>
						{item.content ? <Typography sx={{ fontSize: '13px' }}>{item.content}</Typography> : ''}
						{item.details?.length ? (
							<Stack>
								{item.details.map((subLineItem, index1) => (
									<Typography sx={{ fontSize: '13px' }} key={`subline-${index1}`}>
										{subLineItem}
									</Typography>
								))}
							</Stack>
						) : (
							''
						)}
					</Stack>
				))}
			</Box>
		</Box>
	);
}

export default DropshippingPage;
