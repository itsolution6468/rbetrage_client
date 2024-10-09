import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import { trendingProductsArr } from '@/utils/constants';
import QACard from '@/components/QaCard';

function TrendingProductsHelpPage() {
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
					<h1>Website Concept: Rbetrage</h1>
				</Stack>
				<Stack
					sx={{
						maxWidth: '673px',
						justifyContent: 'center',
						marginRight: 'auto',
						marginLeft: 'auto',
						gap: '10px',
					}}
				>
					<Stack sx={{ marginBottom: '20px', gap: '15px' }}>
						<Typography sx={{ fontSize: '16px' }}>
							Welcome to our complete guide on discovering trending products for dropshipping. Whether new
							to e-commerce or looking to expand your product range, learning to identify and capitalize
							on trending products is crucial for sustained success in the competitive online marketplace.
							This guide will explore practical strategies, tools, and platforms to help you find
							profitable opportunities and stay ahead of consumer demand trends.
						</Typography>
					</Stack>
					{trendingProductsArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

export default TrendingProductsHelpPage;
