import { Stack, Typography, Box } from '@mui/material';

function StoryCard({ data, order }) {
	return (
		<Stack
			direction={{ sm: 'column', md: 'row' }}
			sx={{
				mb: '30px',
				justifyContent: order % 2 ? 'end' : 'start',
				px: {
					xs: 0,
					sp: '40px',
				},
			}}
		>
			<Box
				sx={{
					order: {
						xs: 1,
						md: order % 2 ? 1 : 2,
					},
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: {
						sm: 0,
						md: order % 2 ? '' : '-133px',
					},
					marginRight: {
						sm: 0,
						md: order % 2 ? '-133px' : '',
					},
					zIndex: '1',
					marginBottom: {
						xs: '-300px',
						md: 0,
					},
				}}
			>
				<img src={data.imageUrl} alt="dropshipping" className="image-card" />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					backgroundColor: '#E9F2F4',
					borderRadius: '5px',
					padding: {
						xs: '300px 20px 20px 20px',
						md: order % 2 ? '44px 44px 44px 175px' : '44px 175px 44px 44px',
					},
					maxWidth: '860px',
					width: '100%',
					gap: '42px',
					order: {
						xs: 2,
						md: order % 2 ? 2 : 1,
					},
				}}
			>
				{data.contents.map((item, index) => (
					<Stack
						sx={{
							gap: 2,
							mb: 2,
						}}
						key={`sub-${index}`}
					>
						<Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{item.subTitle}</Typography>
						{item.subContent ? <Typography sx={{ fontSize: '13px' }}>{item.subContent}</Typography> : ''}
						{item.lines?.length ? (
							<Stack>
								{item.lines.map((subLineItem, index1) => (
									<Typography
										sx={{ fontSize: '13px', mb: data.flg ? '10px' : '0px' }}
										key={`subline-${index1}`}
									>
										{subLineItem}
									</Typography>
								))}
							</Stack>
						) : (
							''
						)}
					</Stack>
				))}
			</Box>
		</Stack>
	);
}

export default StoryCard;
