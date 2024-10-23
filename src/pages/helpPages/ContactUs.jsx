import { Helmet } from 'react-helmet';

import { Box, Grid, Stack, TextField, Button, Typography, Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import constants from '@/utils/constants';

import backgroundImage from '@/assets/images/header/banner_light.png';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';

function ContactUsPage() {
	return (
		<Box>
			<Helmet>
				<title>Contact Us | Rbetrage</title>
				<meta name="description" content="Dropshipping page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/contact_us" />
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
					<h1>Welcome to Rbetrage Support</h1>
				</Stack>
				<ContactForm />
			</Box>
		</Box>
	);
}

function ContactForm() {
	return (
		<Stack
			sx={{
				justifyContent: 'center',
				maxWidth: '600px',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Grid container component="form" spacing={2}>
				<Grid container item xs={12} spacing={2}>
					<Grid item xs={6}>
						<TextField label="Name" type="text" required fullWidth />
					</Grid>
					<Grid item xs={6}>
						<TextField label="Email" type="email" required fullWidth />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<TextField label="Topic" type="text" required fullWidth multiline />
				</Grid>
				<Grid item xs={12}>
					<TextField label="Comments" type="text" required fullWidth multiline rows={5} />
				</Grid>
			</Grid>
			<Button
				type="submit"
				variant="contained"
				sx={{
					my: '20px',
					backgroundColor: '#B0D46D !important',
					color: '#193D34 !important',
					p: '10px 30px',
					fontSize: '16px',
					borderRadius: '10px',
					boxShadow: 'none',
				}}
			>
				Send
			</Button>
			<Stack
				item
				xs={12}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					mt: '20px',
				}}
			>
				<Typography variant="h6" my={1} sx={{ color: '#193D34' }}>
					JOIN US
				</Typography>
				<Stack direction="row" spacing={1} sx={{ marginLeft: '-10px' }}>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<FacebookIcon />
						</IconButton>
					</Link>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<InstagramIcon />
						</IconButton>
					</Link>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<XIcon />
						</IconButton>
					</Link>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<YouTubeIcon />
						</IconButton>
					</Link>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<LinkedInIcon />
						</IconButton>
					</Link>
					<Link href={constants.siteData.siteRepo} target="_blank" rel="noreferrer noopener">
						<IconButton aria-label="network" sx={{ color: '#193D34' }}>
							<RedditIcon />
						</IconButton>
					</Link>
				</Stack>
			</Stack>
		</Stack>
	);
}

export default ContactUsPage;
