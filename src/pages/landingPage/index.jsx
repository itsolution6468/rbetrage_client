import { Box } from '@mui/material';
import HeaderSection from './HeaderSection';
import WinningProducts from './WinningProducts';
import SuccessStory from './SuccessStory';
import Partners from './Partners';

function LandingPage() {
	return (
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
	);
}

export default LandingPage;
