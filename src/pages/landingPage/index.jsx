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
				<title>Home Page | Rbetrage</title>
				<meta name="description" content="Home page of rbetrage" />

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
