import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import QACard from '@/components/QaCard';
import { termsAndConditionsArr } from '@/utils/constants';

function TermsPage() {
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
					<h1
						style={{
							textAlign: 'center',
							maxWidth: '400px',
							marginLeft: 'auto',
							marginRight: 'auto',
							letterSpacing: '2px',
							fontWeight: '800',
							fontSize: '30px',
						}}
					>
						TERMS & CONDITIONS of AI Tech Solutions Ltd
					</h1>
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
					<Typography sx={{ marginBottom: '20px' }}>
						Welcome to AI Tech Solutions Ltd! We&apos; re delighted to have you join us. Before diving deep
						into the field of AI Tech Solutions Ltd and dropshipping, please take a moment to review and
						understand our Terms and Conditions. These terms constitute a legal agreement between you and AI
						Tech Solutions Ltd, outlining your rights and responsibilities when using our platform.
					</Typography>
					{termsAndConditionsArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

export default TermsPage;
