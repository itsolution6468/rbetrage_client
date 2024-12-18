import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Stack, Typography, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AlibabaProduct from '@/components/product/Alibaba';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';

import backgroundImage from '@/assets/images/header/banner_light.png';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function StreetProductPage() {
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
		console.log('aaaaaa');

		axios.get(`${BACKEND_API}/products/total?market=6thStreet`).then((res) => {
			console.log(res.data);

			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products?page=${page}&market=6thStreet&perPage=${perPage}`).then((res) => {
			console.log(res.data);

			setProducts(res.data);
		});
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<Box>
			<Helmet>
				<title>6th Street Arbitrage Tool to Find Trending Product - Rbetrage</title>
				<meta name="title" content="6th Street Arbitrage Tool to Find Trending Product - Rbetrage" />
				<meta
					name="description"
					content="Automate the trending product research process using the best 6th Street Arbitrage or Dropshipping Automation Software with Sales Tracking."
				/>

				<link rel="canonical" href="https://rbetraj.com/products/6th-street" />
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
				<h1>6th Street Products</h1>
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
									<Grid item md={3} sm={6} xs={12} key={`product-${index}`}>
										<AlibabaProduct
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

export default StreetProductPage;
