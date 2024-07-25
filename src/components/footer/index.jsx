import constants from '@/utils/constants';
// MUI
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
// assets
import logo from '@/assets/images/logo/png/logo_footer.png';

function Footer() {
	return (
		<Box bgcolor="#193D34" py={3}>
			<Container maxWidth="lg" component={Stack} direction="column" spacing={5}>
				<Grid container spacing={3} alignContent="center" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={3} style={{ paddingLeft: '0px' }}>
						<Box component="img" src={logo} alt="rbetrage logo" width="50%" sx={{ marginBottom: '10px' }} />
						<Stack spacing={1} sx={{ maxWidth: '80%' }}>
							<ContactLink text="info@rbetrage.com" />
						</Stack>
					</Grid>

					<Grid item xs={12} sm={6} md={2} style={{ paddingLeft: '0px' }}>
						<Stack spacing={1}>
							<Typography variant="h6" my={1} sx={{ color: '#B0D46D' }}>
								TERMS OF USE
							</Typography>
							<FooterLink to="/privacy" text="Notice of Privacy " />
							<FooterLink to="/dropshipping" text="Dropshipping" />
							<FooterLink to="/terms" text="Terms and Conditions" />
						</Stack>
					</Grid>
					<Grid item xs={12} sm={6} md={3} style={{ paddingLeft: '0px' }}>
						<Stack spacing={1}>
							<Typography variant="h6" my={1} sx={{ color: '#B0D46D' }}>
								FAQ
							</Typography>
							<FooterLink to="/faq" text="How to use Rbetrage?" />
							<FooterLink to="/faq" text="What is the most trending product?" />
							<FooterLink to="/faq" text="How can I get support?" />
						</Stack>
					</Grid>

					<Grid item xs={12} sm={6} md={4} style={{ paddingLeft: '0px' }}>
						<Typography variant="h6" my={1} sx={{ color: '#B0D46D' }}>
							JOIN US
						</Typography>
						<Link
							href={constants.siteData.facebook}
							target="_blank"
							rel="noreferrer noopener"
							sx={{ marginLeft: '-10px' }}
						>
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<FacebookIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.instagram} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<InstagramIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.x} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<XIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.youtube} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<YouTubeIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.linkedin} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<LinkedInIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.reddit} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<RedditIcon />
							</IconButton>
						</Link>
						<Link href={constants.siteData.tiktok} target="_blank" rel="noreferrer noopener">
							<IconButton aria-label="network" sx={{ color: '#fff' }}>
								<FontAwesomeIcon icon={faTiktok} size="sm" />
							</IconButton>
						</Link>
						<form>
							<TextField
								size="small"
								margin="dense"
								InputProps={{
									name: 'email',
									endAdornment: (
										<Button
											type="submit"
											variant="contained"
											disableElevation
											style={{ backgroundColor: '#B0D46D', color: '#193D34', fontWeight: '500' }}
										>
											Subscribe
										</Button>
									),
									sx: {
										pr: 0,
										'& .MuiInputBase-input::placeholder': {
											color: '#B0D46D',
										},
									},
								}}
								placeholder="Email"
								variant="outlined"
								sx={{
									'& .MuiOutlinedInput-root': {
										border: '1px solid #B0D46D',
										borderRadius: 0,
										'& fieldset': {
											borderColor: '#B0D46D',
										},
										'&:hover fieldset': {
											borderColor: '#B0D46D',
										},
										'&.Mui-focused fieldset': {
											borderColor: '#B0D46D',
										},
									},
								}}
							/>
						</form>
					</Grid>
				</Grid>

				<Divider
					variant="middle"
					sx={{
						bgcolor: (theme) => theme.palette.secondary.main,
					}}
				/>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography variant="body1" textAlign="center" sx={{ color: '#B0D46D' }}>
						© AI Tech Solutions Limited {new Date().getFullYear()}. All Rights Reserved.
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

function ContactLink({ text }) {
	return (
		<Link href={`mailto:${text}`} variant="body1" sx={{ textDecoration: 'none', color: '#fff' }}>
			{text}
		</Link>
	);
}

function FooterLink({ text, to }) {
	return (
		<Link
			variant="body2"
			fontWeight="300"
			href={to}
			underline="hover"
			sx={{
				color: 'white',
				'&:hover': {
					'& svg': {
						opacity: '1',
						ml: 2,
					},
				},
			}}
		>
			{text}
			<ArrowForwardIosIcon
				sx={{
					transition: '0.3s',
					fontSize: '11px',
					ml: 0,
					opacity: '0',
					color: 'white',
				}}
			/>
		</Link>
	);
}

export default Footer;
