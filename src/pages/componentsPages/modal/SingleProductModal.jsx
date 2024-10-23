import { useEffect, useState } from 'react';
import Modal from '@/components/modal';
import { Grid, Link, Stack, Typography } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function SingleProductModal({ openModal, setOpenModal, similarProducts, mainProduct }) {
	const [productIds, setProductIds] = useState([]);

	useEffect(() => {
		const newProductIds = [...productIds];

		similarProducts.forEach((product) => {
			newProductIds.push(product.id);
		});

		setProductIds(newProductIds);
	}, [similarProducts]);

	const closeModal = () => {
		setOpenModal(false);
	};

	return (
		<Modal openModal={openModal} fnCloseModal={closeModal} padding>
			<Grid container spacing={2}>
				<Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<picture>
						<source type="image/webp" srcSet={mainProduct.imageUrl} />
						<img
							src={mainProduct.imageUrl}
							alt="main_product"
							key={`product-${mainProduct.id}`}
							width="70%"
						/>
					</picture>
				</Grid>
				<Grid item xs={7}>
					<Stack spacing={1}>
						<Typography>{mainProduct?.title}</Typography>
						<Stack>
							<Typography sx={{ fontSize: '11px' }}>PRICE</Typography>
							<Typography sx={{ fontSize: '11px' }}>{mainProduct?.price}</Typography>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<Stack gap={3} sx={{ mt: 5 }}>
				{similarProducts.length ? (
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '16px',
							alignItems: 'center',
							display: 'flex',
							color: '#193D34',
						}}
					>
						<CompareArrowsIcon sx={{ color: '#B0D46D', mr: 1 }} />
						Matching Pages
					</Typography>
				) : (
					''
				)}
				{similarProducts.map((product) => (
					<Stack
						key={`product-${product.id}`}
						sx={{
							border: '1px solid #E9F2F4',
							borderRadius: '10px',
							padding: 2,
						}}
					>
						<Grid container spacing={2}>
							<Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<picture>
									<source type="image/webp" srcSet={product.imageUrl} />
									<img
										src={product.imageUrl}
										alt="similar_product"
										key={`product-${product.id}`}
										width="50px"
									/>
								</picture>
							</Grid>
							<Grid item xs={9}>
								<Stack spacing={1}>
									<Typography>{product.title}</Typography>
									<Link
										href={product.url}
										target="_blank"
										rel="noreferrer noopener"
										sx={{ color: '#193D34', textDecoration: 'none' }}
									>
										{product?.url}
									</Link>
									<Typography
										sx={{
											padding: '10px 10px 10px 10px',
											border: '1px solid #E9F2F4',
											borderRadius: '10px',
											background: '#E9F2F4',
											display: 'inline-block',
											maxWidth: '70px',
										}}
									>
										{product.marketPlace}
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</Stack>
				))}
			</Stack>
		</Modal>
	);
}

export default SingleProductModal;
