import { Stack, Typography } from '@mui/material';
import backgroundImage from '@/assets/images/header/banner_dark.png';

function HeaderSection() {
	return (
		<Stack
			sx={{
				justifyContent: 'center',
				display: 'flex',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				color: 'white',
				width: '100%',
				height: '160px',
				borderRadius: '10px',
			}}
		>
			<h1 className="landing-title-h1">
				The Rbetrage Dropshipping Software for
				<span className="landing-title-span"> Ecom Success</span>
			</h1>
		</Stack>
	);
}

export default HeaderSection;
