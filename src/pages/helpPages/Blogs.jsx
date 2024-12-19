import { Helmet } from 'react-helmet';

import { Box, Stack, Typography, Button, useMediaQuery, useTheme } from '@mui/material';

import backgroundImage from '@/assets/images/header/banner_light.png';
import image1 from '@/assets/images/blog/1.png';
import image2 from '@/assets/images/blog/2.png';
import image3 from '@/assets/images/blog/3.png';
import image4 from '@/assets/images/blog/4.png';
import image5 from '@/assets/images/blog/5.png';
import image6 from '@/assets/images/blog/6.png';

const blogs = [
	{
		imageUrl: image1,
		title: 'Transforming Dreams into Reality with Retail Arbitrage Dropshipping.',
		summary:
			'In the competitive world of e-commerce, success stories often begin with a combination of passion, perseverance, and the right tools. Meet Alex Bennett, an aspiring entrepreneur whose journey into online retailing took a significant leap forward with Retail Arbitrage (RA) Dropshipping software.',
		createdAt: '30 Aug, 2024',
	},
	{
		imageUrl: image2,
		title: 'Unleashing Potential: A Trailblazing Journey with Retail Arbitrage Dropshipping.',
		summary:
			'In the dynamic world of e-commerce, taking opportunities and optimizing operations are essential for success. Meet Emily Chang, a creative entrepreneur whose journey into online retail was transformed by Retail Arbitrage (RA) Dropshipping software.',
		createdAt: '29 Aug, 2024',
	},
	{
		imageUrl: image3,
		title: 'Accelerating Growth: A Success Story with Retail Arbitrage Dropshipping',
		summary:
			'In the dynamic world of online retail, seizing opportunities and optimizing operations are crucial for sustained success. Meet Sarah Thompson, whose entrepreneurial journey took a significant leap forward with Retail Arbitrage (RA) Dropshipping software.',
		createdAt: '28 Aug, 2024',
	},
	{
		imageUrl: image4,
		title: 'Revolutionizing E-commerce: The Rise of AI-Powered Product Sourcing',
		summary:
			'In the fast-evolving landscape of e-commerce, staying ahead means embracing innovation that reshapes how businesses operate. Discover how AI-powered product sourcing is revolutionizing the industry and transforming the fortunes of entrepreneurs like never before.',
		createdAt: '27 Aug, 2024',
	},
	{
		imageUrl: image5,
		title: 'Empowering Single Mothers: A Journey to Successful Entrepreneurship',
		summary:
			"In today's entrepreneurial landscape, single mothers are breaking barriers and achieving great success by harnessing their strength, resourcefulness, and entrepreneurial energy.",
		createdAt: '29 Aug, 2024',
	},
	{
		imageUrl: image6,
		title: 'How to Start and Succeed in a Family- Owned E - commerce Business',
		summary:
			'Launching a business experience with family members can be a rewarding journey filled with unique challenges and opportunities. This blog explores the essential steps and practical tips for launching and growing a successful family-owned e-commerce business, promoting collaboration, and achieving long-term success.',
		createdAt: '29 Aug, 2024',
	},
];

function Blog({ blog, index }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Stack gap={3} sx={{ my: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
			<Helmet>
				<title>Blogs Page | Rbetrage</title>
				<meta name="description" content="Dropshipping page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/blogs" />
			</Helmet>
			<img src={blog.imageUrl} alt={blog.desc} style={{ order: index % 2 && !isMobile ? 2 : 1 }} />

			<Stack
				sx={{
					padding: 4,
					background: '#E9F2F4',
					order: index % 2 ? 1 : 2,
					borderRadius: '10px',
					minHeight: '350px',
				}}
			>
				<Typography sx={{ fontSize: '13px', fontWeight: '600', lineHeight: '15.85px', mb: 4 }}>
					{blog.title}
				</Typography>

				<Typography sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '15.85px' }}>
					{blog.summary}
				</Typography>

				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 'auto' }}>
					<Button
						variant="contained"
						sx={{
							backgroundColor: '#B0D46D !important',
							color: '#193D34',
							boxShadow: 'none',
							borderRadius: '10px',
						}}
					>
						Read more
					</Button>
					<Typography>{blog.createdAt}</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}

function BlogPage() {
	return (
		<>
			<Helmet>
				<title>Latest Blogs for Rbetrage Dropshipping Automation Software</title>
				<meta name="title" content="Latest Blogs for Rbetrage Dropshipping Automation Software" />
				<meta
					name="description"
					content="Check out the latest Rbetrage blogs and updates regarding arbitrage dropshipping software, sales tracking, and trending product research."
				/>

				<link rel="canonical" href="https://rbetraj.com/blogs" />
			</Helmet>
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
						<h1>Blog</h1>
					</Stack>

					<Stack sx={{ maxWidth: '95%', justifyContent: 'center', display: 'flex', mx: 'auto' }}>
						{blogs.map((blog, index) => (
							<Blog blog={blog} key={`blog-${index}`} index={index} />
						))}
					</Stack>
				</Box>
			</Box>
		</>
	);
}

export default BlogPage;
