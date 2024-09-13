import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import WalmartProduct from '@/components/product/Walmart';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';

// Empty line here
const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function WalmartProductPage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('TOKEN')) {
			navigate('/home');
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
		axios.get(`${BACKEND_API}/products/total?market=Walmart`).then((res) => {
			setTotal(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(`${BACKEND_API}/products?page=${page}&market=Walmart&perPage=${perPage}`).then((res) => {
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
								<WalmartProduct
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

export default WalmartProductPage;
