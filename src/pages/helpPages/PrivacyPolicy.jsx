import { Helmet } from 'react-helmet';
import backgroundImage from '@/assets/images/header/banner_light.png';
import { Box, Stack, Typography } from '@mui/material';
import QACard from '@/components/QaCard';
import { privacyPolicyArr } from '@/utils/constants';

function PrivacyPolicyPage() {
	return (
		<Box>
			<Helmet>
				<title>Privacy Page | Rbetrage</title>
				<meta name="description" content="Privacy page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/privacy" />
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
					<h1 style={{ fontSize: '30px' }}>Privacy Policy of AI Tech Solutions Ltd</h1>
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
						<Typography>
							This Privacy Policy explains how we, AI Tech Solutions Ltd (&quot;we&quot;, &quot;us&quot;,
							&quot;our&quot;), collect, use, disclose, safeguard, and otherwise process personal
							information when you visit and interact with our website Rbetrage.com, as well as when you
							purchase and use our online subscription services (&quot;Services&quot;).
						</Typography>
						<Typography>
							This Privacy Policy also outlines our data practices when we communicate with you by email,
							telephone, or other means.
						</Typography>
						<Typography>
							When you provide us with your personal information, you consent to its use for the purposes
							outlined in this Privacy Policy.
						</Typography>
						<Typography>
							We may update this Privacy Policy periodically, and any modifications will be posted at
							https://www.rbetrage.com/privacy, with the effective date changed accordingly. We encourage
							you to check this page periodically for any changes.
						</Typography>
					</Stack>
					{privacyPolicyArr.map((item, index) => (
						<QACard key={`faq-${index}`} data={item} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

export default PrivacyPolicyPage;
