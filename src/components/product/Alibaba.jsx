import { useState } from 'react';
import axios from 'axios';
import { Button, Stack, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';

import ProductAnalysisModal from '@/pages/componentsPages/modal/Productsanalysis';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function AmazonProduct({ product, setOpenModal, setSimilarProducts, setMainProduct }) {
	const [isOpen, setOpen] = useState(false);
	const [matchProducts, setMatchProducts] = useState([]);

	const handleSingleProduct = () => {
		setMainProduct(product);
		axios.post(`${BACKEND_API}/products/similar_products`, { product }).then((result) => {
			setSimilarProducts(result.data);
		});
		setOpenModal(true);
	};

	const handleAnalysis = () => {
		setOpen(true);
		// axios
		// 	.post(`${BACKEND_API}/products/similar_products`, { product })
		// 	.then((result) => {
		// 		console.log('result', result.data);

		// 		setSimilarProducts(result.data);
		// 		// setMatchProducts(result.data);
		// 	})
		// 	.catch((e) => console.log(e));
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<Stack
			sx={{
				marginBottom: '20px',
				boxShadow: '0 0 10px rgba(0,0,0,0.15)',
				padding: 2,
				bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
				color: (theme) => (theme.palette.mode === 'dark' ? '#000' : 'grey.800'),
				borderRadius: '20px',
			}}
		>
			<picture>
				<source type="image/webp" srcSet={product.imageUrl ? product.imageUrl : product.urll} />
				<img
					src={product.imageUrl ? product.imageUrl : product.url}
					alt={product.description}
					className="products-image"
				/>
			</picture>

			<Stack
				sx={{
					flexDirection: 'column',
				}}
			>
				<Typography
					sx={{
						fontSize: '16px',
						marginTop: '10px',
						height: '120px',
						cursor: 'pointer',
						color: '#193D34',
					}}
					onClick={(e) => handleSingleProduct()}
				>
					{product?.title.length > 100 ? product.title.slice(0, 100) + String('...') : product.title}
				</Typography>
				<Stack
					sx={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '5px',
					}}
				>
					{product?.other?.stars ? (
						<>
							<Rating
								name="half-rating-read"
								defaultValue={product?.other.stars}
								precision={0.5}
								readOnly
							/>
							{product?.other.stars}
						</>
					) : (
						''
					)}
					<Typography>({product?.other?.reviewsCount})</Typography>
				</Stack>
				{product?.price ? (
					<Typography sx={{ fontSize: '20px', color: '#193D34', fontWeight: '500' }}>
						{product.price ? product.price : ''}
					</Typography>
				) : (
					''
				)}
				<Button
					variant="contained"
					startIcon={<SearchIcon />}
					sx={{
						marginTop: '10px',
						backgroundColor: '#B0D46D !important',
						color: '#193D34',
						boxShadow: 'none',
						borderRadius: '10px',
					}}
					onClick={handleAnalysis}
				>
					View Product Analysis
				</Button>
			</Stack>
			<ProductAnalysisModal
				openModal={isOpen}
				closeModal={closeModal}
				product={product}
				similarProducts={matchProducts}
			/>
		</Stack>
	);
}

export default AmazonProduct;
