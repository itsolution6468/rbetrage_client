import backgroundImage from '@/assets/images/header/banner_light.png';
import QACard from '@/components/QaCard';
import { Box, Stack } from '@mui/material';
import { faqArr } from '@/utils/constants';

function FaqPage() {
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
							maxWidth: '500px',
							marginLeft: 'auto',
							marginRight: 'auto',
							letterSpacing: '2px',
							fontWeight: '800',
							fontSize: '30px',
						}}
					>
						FAQ
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
					{faqArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

export default FaqPage;