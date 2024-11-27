import Modal from '@/components/modal';
import { Stack, Box, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
// import StarIcon from '@mui/icons-material/Star';

function ProductAnalysis({ openModal, closeModal, product, similarProducts }) {
	const datas = [
		{
			key: 'Orders',
			value: 4000,
		},
		{
			key: 'AliScore',
			value: 18502,
		},
		{
			key: 'AliScore',
			value: 18502,
		},
	];

	// console.log(similarProducts);

	const handleMarketPlace = () => {
		window.open(product.url, '_blank');
	};

	return (
		<Stack sx={{ display: 'flex' }}>
			<Modal openModal={openModal} fnCloseModal={closeModal} padding maxWidth="sp">
				<Stack>
					<Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
						<picture>
							<source type="image/webp" srcSet={product.imageUrl} />
							<img
								src={product.imageUrl}
								alt="products"
								width={220}
								height={240}
								style={{ objectFit: 'scale-down' }}
							/>
						</picture>
						<Box>
							<p className="analysis-title">{product.title}</p>
							{product.price && (
								<Box mt={1}>
									<p className="analysis-price-content">PRICE</p>
									<span className="analysis-price">{product.price}</span>
								</Box>
							)}
							<Box
								mt={1}
								sx={{
									padding: '3px 10px',
									backgroundColor: '#E9F2F4',
									color: '#193D34',
									borderRadius: '5px',
									width: 'min-content',
									fontSize: '13px',
								}}
							>
								<span>{product.category}</span>
							</Box>
							<Box
								mt={1}
								sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'space-between' }}
							>
								<Button
									variant="contained"
									startIcon={<OpenInNewIcon />}
									sx={{
										backgroundColor: '#B0D46D !important',
										color: '#193D34',
										boxShadow: 'none',
										borderRadius: '10px',
										fontSize: '13px',
										fontWeight: 600,
										padding: '7px',
										textWrap: 'nowrap',
									}}
									onClick={handleMarketPlace}
								>
									Show on {product.marketPlace}
								</Button>
								<Button
									variant="contained"
									startIcon={<OpenInNewIcon />}
									sx={{
										backgroundColor: '#B0D46D !important',
										color: '#193D34',
										boxShadow: 'none',
										borderRadius: '10px',
										fontSize: '13px',
										fontWeight: 600,
										padding: '7px',
										textWrap: 'nowrap',
									}}
								>
									Import to Shopify
								</Button>
							</Box>
							<Box mt={1} sx={{ display: 'flex', gap: 1 }}>
								{datas.map((item, key) => (
									<Box
										sx={{
											width: '100%',
											border: '1px solid #E9F2F4',
											borderRadius: '5px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											py: '6px',
										}}
										key={key}
									>
										<p>{item.value}</p>
										<span>{item.key}</span>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
					<Box mt={2}>
						<p className="analysis-subtitle">Matching Pages</p>
						<Box mt={1} sx={{ border: '1px solid #E9F2F4', borderRadius: '5px', p: '20px' }}>
							<picture>
								<source type="image/webp" srcSet={product.imageUrl} />
								<img
									src={product.imageUrl}
									alt="products"
									width={80}
									height={80}
									style={{ objectFit: 'scale-down' }}
								/>
							</picture>
							<Box>{/* <p></p> */}</Box>
						</Box>
					</Box>
				</Stack>
			</Modal>
		</Stack>
	);
}

export default ProductAnalysis;
