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
			<h1
				style={{
					textAlign: 'center',
					maxWidth: '500px',
					marginLeft: 'auto',
					marginRight: 'auto',
					letterSpacing: '1px',
					fontWeight: '400',
				}}
			>
				The Rbetrage Dropshipping Software for
				<span
					style={{
						fontSize: 'inherit',
						fontWeight: '600',
					}}
				>
					{' '}
					Ecom Success
				</span>
			</h1>
		</Stack>
	);
}

export default HeaderSection;
