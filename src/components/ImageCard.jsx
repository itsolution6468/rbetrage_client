import { Grid, Stack, Typography } from '@mui/material';

function ImageCard({ data, order }) {
	return (
		<Grid
			container
			sx={{
				flexDirection: 'row',
				// maxWidth: {
				// 	md: '90%',
				// 	lg: '100%',
				// },
				alignItems: 'center',
				justifyContent: 'space-between',
				mx: 'auto',
				mb: '30px',
			}}
		>
			<Grid
				item
				xs={12}
				md={5}
				sx={{
					order: {
						xs: 1,
						md: order % 2 ? 1 : 2,
					},
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<picture>
					<source type="image/webp" srcSet={data.imageUrl} />
					<img src={data.imageUrl} alt="dropshipping" className="image-card" />
				</picture>
			</Grid>

			<Grid
				item
				xs={12}
				md={7}
				sx={{
					order: {
						xs: 2,
						md: order % 2 ? 2 : 1,
					},
				}}
			>
				{data.contents.map((item, index) => (
					<Stack sx={{ gap: 2, mb: 2 }} key={`sub-${index}`}>
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
			</Grid>
		</Grid>
	);
}

export default ImageCard;
