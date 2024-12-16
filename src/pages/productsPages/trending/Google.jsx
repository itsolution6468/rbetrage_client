import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import FacebookProduct from '@/components/product/Facebook';
import axios from 'axios';
import SingleProductModal from '../../componentsPages/modal/SingleProductModal';

import backgroundImage from '@/assets/images/header/banner_light.png';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function GoogleTrendingProductPage() {
	const cookies = new Cookies();
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('TOKEN')) {
			navigate('/');
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
		axios.get(`${BACKEND_API}/products/total?market=Facebook`).then((res) => {
			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products/?page=${page}&market=Facebook&perPage=${perPage}`).then((res) => {
			setProducts(res.data);
		});
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<Box>
			<Helmet>
				<title>Google trends Page | Rbetrage</title>
				<meta name="description" content="Google trends page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/trending/google" />
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
				<h1>Google Trends</h1>
			</Stack>
			<Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} gap={3}>
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
						{products.length &&
							products.map((product, index) => (
								<Grid item md={3} sm={6} xs={12} key={`product-${index}`}>
									<FacebookProduct
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
					<Pagination count={Math.round(total / perPage)} page={page} onChange={handleChange} size="large" />
				</Stack>
				<SingleProductModal
					openModal={openModal}
					setOpenModal={setOpenModal}
					similarProducts={similarProducts}
					mainProduct={mainProduct}
				/>
			</Stack>
		</Box>
	);
}

export default GoogleTrendingProductPage;
