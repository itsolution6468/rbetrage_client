import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AmazonProduct from '@/components/product/Amazon';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function AmazonProductPage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('TOKEN')) {
			navigate('home');
		}
	}, []);

	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const perPage = 12;
	const [openModal, setOpenModal] = useState(false);
	const [mainProduct, setMainProduct] = useState({});
	const [similarProducts, setSimilarProducts] = useState([]);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products/total?market=Amazon`).then((res) => {
			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products?page=${page}&market=Amazon&perPage=${perPage}`).then((res) => {
			setProducts(res.data);
		});
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} gap={3}>
			{products.length ? (
				<>
					<Stack
						sx={{
							marginTop: '30px',
							backgroundColor: '#E9F2F4',
							borderRadius: '10px',
						}}
						py={3}
						px={5}
					>
						<Grid container spacing={2}>
							{products.map((product, index) => (
								<Grid item md={3} sm={6} xs={12} key={`product-${index}`}>
									<AmazonProduct
										product={product}
										setOpenModal={setOpenModal}
										setSimilarProducts={setSimilarProducts}
										setMainProduct={setMainProduct}
									/>
								</Grid>
							))}
						</Grid>
					</Stack>
					<Stack spacing={2}>
						<Pagination
							count={Math.round(total / perPage)}
							page={page}
							onChange={handleChange}
							size="large"
						/>
					</Stack>
					<SingleProductModal
						openModal={openModal}
						setOpenModal={setOpenModal}
						similarProducts={similarProducts}
						mainProduct={mainProduct}
					/>
				</>
			) : (
				<Typography>No Products</Typography>
			)}
		</Stack>
	);
}

export default AmazonProductPage;