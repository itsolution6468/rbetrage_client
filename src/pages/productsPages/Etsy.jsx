import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Grid, Stack, Typography, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import EtsyProduct from '@/components/product/Etsy';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';

import backgroundImage from '@/assets/images/header/banner_light.png';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function EtsyProductPage() {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!localStorage.getItem('TOKEN')) {
	// 		navigate('/home');
	// 	}
	// }, []);

	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const perPage = 12;
	const [openModal, setOpenModal] = useState(false);
	const [mainProduct, setMainProduct] = useState({});
	const [similarProducts, setSimilarProducts] = useState([]);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products/total?market=Etsy`).then((res) => {
			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products?page=${page}&market=Etsy&perPage=${perPage}`).then((res) => {
			setProducts(res.data);
		});
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<Box>
			<Helmet>
				<title>Etsy Arbitrage Tool | AI-powered Dropshipping Platform - Rbetrage</title>
				<meta name="title" content="Etsy Arbitrage Tool | AI-powered Dropshipping Platform - Rbetrage" />
				<meta
					name="description"
					content="Rbetrage is the leading Etsy arbitrage tool or AI automation that helps users find trending or winning products on Etsy."
				/>

				<link rel="canonical" href="https://rbetraj.com/products/etsy" />
			</Helmet>
			<Stack
				sx={{
					justifyContent: 'center',
					display: 'flex',
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					color: '#193D34',
					width: '100%',
					height: '160px',
					borderRadius: '10px',
				}}
			>
				<h1>Etsy Products</h1>
			</Stack>
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
									<Grid item xs={12} sm={6} md={4} lg={3} key={`product-${index}`}>
										<EtsyProduct
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
		</Box>
	);
}

export default EtsyProductPage;
