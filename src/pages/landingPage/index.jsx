import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';
import HeaderSection from './HeaderSection';
import WinningProducts from './WinningProducts';
import SuccessStory from './SuccessStory';
import Partners from './Partners';

function LandingPage() {
	return (
		<Box>
			<Helmet>
				<title>Rbetrage - Best Arbitrage Software for Dropshipping Automation</title>
				<meta name="title" content="Rbetrage - Best Arbitrage Software for Dropshipping Automation" />
				<meta
					name="description"
					content="Rbetrage is arbitrage or dropshipping automation software for finding trending and winning products on Amazon, Etsy, Walmart, Alibaba, eBay, and 6th Street."
				/>

				<link rel="canonical" href="https://rbetraj.com/" />
			</Helmet>
			<Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '20px',
					}}
				>
					<HeaderSection />
				</Box>
				<Partners />
				<WinningProducts />
				<SuccessStory />
			</Box>
		</Box>
	);
}

export default LandingPage;
