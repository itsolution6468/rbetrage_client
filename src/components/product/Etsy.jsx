import axios from 'axios';
import { Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { BACKEND_API } from '@/utils/constants';

function EtsyProduct({ product, setOpenModal, setMainProduct, setSimilarProducts }) {
	const handleSingleProduct = () => {
		setMainProduct(product);
		axios.post(`${BACKEND_API}/api/products/find-similar`, { product }).then((result) => {
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
				style={{ objectFit: 'contain', height: '200px', cursor: 'pointer' }}
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
						height: '120px',
						cursor: 'pointer',
						color: '#193D34',
					}}
					onClick={(e) => handleSingleProduct()}
				>
					{product.title.length > 100 ? product.title.slice(0, 100) + String('...') : product.title}
				</Typography>
				<Stack
					sx={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '10px',
						marginBottom: '0px',
					}}
				>
					<FavoriteIcon style={{ color: 'red' }} />
					{product.other.favorites}
				</Stack>
				{product.price ? (
					<Typography
						sx={{
							fontSize: '16px',
							color: '#193D34',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							marginBottom: '5px',
						}}
					>
						<MonetizationOnIcon style={{ color: '#dbcf24' }} />
						{product.price}
					</Typography>
				) : (
					''
				)}
				{product.other.listedOn ? <Typography>{product.other.listedOn}</Typography> : ''}
			</Stack>
		</Stack>
	);
}

export default EtsyProduct;
