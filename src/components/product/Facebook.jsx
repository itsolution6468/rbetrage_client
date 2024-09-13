import { Stack, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import axios from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function FacebookProduct({ product, setOpenModal, setMainProduct, setSimilarProducts }) {
	const handleSingleProduct = () => {
		setMainProduct(product);
		axios.post(`${BACKEND_API}/products/similar_products`, { product }).then((result) => {
			setSimilarProducts(result.data);
		});
		setOpenModal(true);
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
			<img
				src={product.imageUrl ? product.imageUrl : product.url}
				alt={product.description}
				style={{ objectFit: 'contain', height: '300px', cursor: 'pointer' }}
			/>
			<Stack
				sx={{
					flexDirection: 'column',
				}}
			>
				<Typography
					sx={{
						fontSize: '16px',
						marginTop: '10px',
						height: '80px',
						cursor: 'pointer',
					}}
					onClick={(e) => handleSingleProduct()}
				>
					{product.title.length > 100 ? product.title.slice(0, 100) + String('...') : product.title}
				</Typography>
				<Stack
					sx={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '5px',
					}}
				>
					{product.other.stars ? (
						<Rating name="half-rating-read" defaultValue={product.other.stars} precision={0.5} readOnly />
					) : (
						''
					)}
					{product.other.reviewsCount}
				</Stack>
				{product.price ? (
					<Typography sx={{ fontSize: '20px', color: 'rgb(28, 97, 231)' }}>{product.price}</Typography>
				) : (
					''
				)}
				{product.other.listedOn ? <Typography>{product.other.listedOn}</Typography> : ''}
			</Stack>
		</Stack>
	);
}

export default FacebookProduct;
