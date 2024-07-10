import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import EtsyProduct from '@/components/product/Etsy';
import axios from 'axios';
import { BACKEND_API } from '@/utils/constants';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';

function EtsyProductPage() {
	const cookies = new Cookies();
	const navigate = useNavigate();

	useEffect(() => {
		if (!cookies.get('TOKEN', { path: '/home' })) {
			navigate('/home');
		}
	}, [cookies]);
	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const perPage = 12;
	const [openModal, setOpenModal] = useState(false);
	const [mainProduct, setMainProduct] = useState({});
	const [similarProducts, setSimilarProducts] = useState([]);

	useEffect(() => {
		axios.get(`${BACKEND_API}/api/products/total?market=Etsy`).then((res) => {
			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/api/products/?page=${page}&market=Etsy&perPage=${perPage}`).then((res) => {
			setProducts(res.data);
		});
	}, [page]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
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
				<Pagination count={Math.round(total / perPage)} page={page} onChange={handleChange} size="large" />
			</Stack>
			<SingleProductModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				similarProducts={similarProducts}
				mainProduct={mainProduct}
			/>
		</Stack>
	);
}

export default EtsyProductPage;
