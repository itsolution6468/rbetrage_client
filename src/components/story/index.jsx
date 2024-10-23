import { Stack, Typography, Box } from '@mui/material';

function Story({ story, isMobile }) {
	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			spacing={4}
			sx={{
				background: '#E9F2F4',
				maxWidth: '800px !important',
				width: '100%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
			mx={isMobile ? 0 : 10}
			mb={isMobile ? 0 : 3}
			mt={isMobile ? 16 : 3}
		>
			<picture>
				<source type="image/webp" srcSet={story.image} />
				<img src={story.image} alt={story.name} className="story-image" />
			</picture>
			<Box
				sx={{
					marginRight: '30px !important',
					marginLeft: 'auto !important',
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
					pb: '20px',
					pt: isMobile ? '160px' : '20px',
					px: '20px',
					maxWidth: '400px',
				}}
			>
				<Typography sx={{ fontSize: '25px', fontWeight: '700' }}>{story.name}</Typography>
				<Typography sx={{ fontSize: '20px', fontWeight: '400' }}>{story.content}</Typography>
				<Typography sx={{ fontSize: '20px' }}>member since {story.year}</Typography>
			</Box>
		</Stack>
	);
}

export default Story;
