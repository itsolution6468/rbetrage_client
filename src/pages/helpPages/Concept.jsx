import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import { conceptArr, performanceArr } from '@/utils/constants';
import QACard from '@/components/QaCard';

function ConceptPage() {
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
						<Typography sx={{ fontSize: '16px' }}>Overview:</Typography>
						<Typography sx={{ fontSize: '16px' }}>
							Rbetrage is a sophisticated platform that empowers users using price differences across
							multiple online marketplaces. It combines social media trends, AI-driven price comparisons,
							and detailed analytics to give users actionable insights for buying and selling products
							effectively. The platform aims to offer seamless user knowledge, ensuring users can make
							informed decisions with minimal effort.
						</Typography>
						<Typography sx={{ fontSize: '16px' }}>Key Features:</Typography>
					</Stack>
					{conceptArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
				<Stack
					sx={{
						justifyContent: 'center',
						display: 'flex',
						color: '#193D34',
						width: '100%',
						borderRadius: '10px',
						mt: '30px',
						mb: '20px',
					}}
				>
					<h1>Performance Plan</h1>
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
					{performanceArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

export default ConceptPage;
