import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import {
	Grid,
	Stack,
	Typography,
	CircularProgress,
	circularProgressClasses,
	Slider,
	TextField,
	Button,
	Select,
	MenuItem,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import AmazonProduct from '@/components/product/Amazon';
import SingleProductModal from '../componentsPages/modal/SingleProductModal';
import EtsyProduct from '@/components/product/Etsy';
import WalmartProduct from '@/components/product/Walmart';
// import SearchBar from '@/components/mainHeader/searchBar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { countriesWithCode } from '@/utils/constants';

import backgroundImage from '@/assets/images/header/banner_light.png';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function FilteredProductPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const searchQuery = params.get('search');

	// useEffect(() => {
	// 	if (!localStorage.getItem('TOKEN')) {
	// 		navigate('/home');
	// 	}
	// }, []);

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [mainProduct, setMainProduct] = useState({});
	const [similarProducts, setSimilarProducts] = useState([]);
	const [value, setValue] = useState([0, 10000]);
	const [countries, setCountries] = useState([]);
	const [marketPlaces, setMarketPlaces] = useState([]);
	const [rating, setRating] = useState(0);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${BACKEND_API}/products/filtered_products?search=${searchQuery}`)
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [searchQuery]);

	const renderProductComponent = (product) => {
		switch (product.marketPlace) {
			case 'Amazon':
				return (
					<AmazonProduct
						product={product}
						setOpenModal={setOpenModal}
						setSimilarProducts={setSimilarProducts}
						setMainProduct={setMainProduct}
					/>
				);
			case 'Etsy':
				return (
					<EtsyProduct
						product={product}
						setOpenModal={setOpenModal}
						setSimilarProducts={setSimilarProducts}
						setMainProduct={setMainProduct}
					/>
				);
			case 'Walmart':
				return (
					<WalmartProduct
						product={product}
						setOpenModal={setOpenModal}
						setSimilarProducts={setSimilarProducts}
						setMainProduct={setMainProduct}
					/>
				);
			default:
				return null;
		}
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleInputChange = (e, index) => {
		const newValue = [...value];
		newValue[index] = e.target.value === '' ? '' : Number(e.target.value);
		setValue(newValue);
	};

	const handleCountryChange = (event) => {
		setCountries(event.target.value);
	};

	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;

		if (checked) {
			setMarketPlaces([...marketPlaces, value]);
		} else {
			setMarketPlaces(marketPlaces.filter((marketplace) => marketplace !== value));
		}
	};

	const handleFilterProducts = () => {
		const query = `search=${encodeURIComponent(searchQuery)}&minPrice=${value[0]}&maxPrice=${value[1]}&marketPlaces=${marketPlaces.map((mp) => encodeURIComponent(mp)).join(',')}&rating=${rating}&${countries.map((mp) => `countries=${encodeURIComponent(mp)}`).join('&')}`;
		axios.get(`${BACKEND_API}/products/filtered_products?${query}`).then((res) => {
			setProducts(res.data);
		});
	};

	return (
		<Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} gap={3}>
			<Helmet>
				<title>Search Products Page | Rbetrage</title>
				<meta name="description" content="Search Products page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/products/filter" />
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
				<h1>Search Products</h1>
			</Stack>
			<Stack
				direction="row"
				spacing={2}
				sx={{
					alignItems: 'center',
					display: 'flex',
					color: 'white',
					width: '100%',
					height: '160px',
					borderRadius: '10px',
					backgroundColor: '#193D34',
					px: 3,
					justifyContent: 'space-between',
				}}
			>
				{/* <SearchBar /> */}
				<Stack direction="row" alignItems="center" spacing={2}>
					<Typography>Regions</Typography>
					<Select
						multiple
						value={countries}
						onChange={handleCountryChange}
						displayEmpty
						renderValue={(selected) => {
							if (selected.length === 0) {
								return <em>Choose countries</em>;
							}
							return selected.join(', ');
						}}
						variant="outlined"
						size="small"
						sx={{
							width: '150px',
							color: 'white',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: '#B0D46D',
							},
							'&:hover .MuiOutlinedInput-notchedOutline': {
								borderColor: '#B0D46D',
							},
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
								borderColor: '#B0D46D',
							},
							'& .MuiSvgIcon-root': {
								color: '#B0D46D',
							},
							'& em': {
								color: 'grey',
								fontStyle: 'normal',
							},
							borderRadius: '5px',
						}}
					>
						{countriesWithCode.map((country) => (
							<MenuItem
								key={country.code}
								value={country.code}
								sx={{
									backgroundColor: '#ffffff',
									color: '#193D34',
									padding: '10px',
									'&:hover': {
										backgroundColor: '#B0D46D',
									},
									'&.Mui-selected': {
										backgroundColor: '#B0D46D',
									},
									'&.Mui-selected:hover': {
										backgroundColor: '#B0D46D',
									},
								}}
							>
								{country.label}
							</MenuItem>
						))}
					</Select>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Typography>Ranking</Typography>
					<Rating
						name="half-rating"
						defaultValue={2.5}
						size="small"
						precision={0.5}
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						sx={{
							'& .MuiRating-iconFilled': {
								color: '#B0D46D',
							},
							'& .MuiRating-iconHover': {
								color: '#B0D46D',
							},
							'& .MuiRating-iconEmpty': {
								color: '#FFFFFF',
							},
						}}
					/>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={1} maxWidth="300px">
					<Grid container>
						<Grid item xs={4}>
							<FormControlLabel
								value="Amazon"
								control={
									<Checkbox
										checked={marketPlaces.includes('Amazon')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Amazon"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								value="Aliexpress"
								control={
									<Checkbox
										checked={marketPlaces.includes('Aliexpress')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Aliexpress"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								value="Etsy"
								control={
									<Checkbox
										checked={marketPlaces.includes('Etsy')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Etsy"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								value="Alibaba"
								control={
									<Checkbox
										checked={marketPlaces.includes('Alibaba')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Alibaba"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								value="Ebay"
								control={
									<Checkbox
										checked={marketPlaces.includes('Ebay')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Ebay"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								value="Walmart"
								control={
									<Checkbox
										checked={marketPlaces.includes('Walmart')}
										onChange={handleCheckboxChange}
										sx={{
											color: '#B0D46D',
											'&.Mui-checked': {
												color: '#B0D46D',
											},
										}}
									/>
								}
								label="Walmart"
								labelPlacement="end"
							/>
						</Grid>
					</Grid>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={2}>
					<Typography>Price Range</Typography>
					<TextField
						value={value[0]}
						onChange={(e) => handleInputChange(e, 0)}
						variant="outlined"
						size="small"
						sx={{
							width: '60px',
							input: { color: '#193D34' },
							background: '#ffffff',
							borderRadius: '10px',
						}}
					/>
					<Slider
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
						min={0}
						max={100}
						step={1}
						sx={{
							color: '#B0D46D',
							width: '0',
							'& .MuiSlider-thumb': {
								backgroundColor: '#B0D46D',
							},
							'& .MuiSlider-rail': {
								color: '#ffffff',
							},
							display: 'none',
						}}
					/>
					<TextField
						value={value[1]}
						onChange={(e) => handleInputChange(e, 1)}
						variant="outlined"
						size="small"
						sx={{
							width: '60px',
							input: { color: '#193D34' },
							background: '#ffffff',
							borderRadius: '10px',
						}}
					/>
				</Stack>

				<Button
					variant="contained"
					sx={{
						backgroundColor: '#B0D46D !important',
						color: '#193D34',
						boxShadow: 'none',
						borderRadius: '10px',
						marginRight: '10px !important',
						'&:hover': {
							backgroundColor: '#B0D46D !important',
						},
					}}
					onClick={handleFilterProducts}
				>
					Filter
				</Button>
			</Stack>
			{loading && (
				<CircularProgress
					variant="indeterminate"
					sx={{
						color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
						animationDuration: '550ms',
						position: 'absolute',
						left: '50%',
						top: '50%',
						[`& .${circularProgressClasses.circle}`]: {
							strokeLinecap: 'round',
						},
					}}
					size={40}
					thickness={4}
				/>
			)}
			{!loading && products.length > 0 && (
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
									{renderProductComponent(product)}
								</Grid>
							))}
						</Grid>
					</Stack>
					<SingleProductModal
						openModal={openModal}
						setOpenModal={setOpenModal}
						similarProducts={similarProducts}
						mainProduct={mainProduct}
					/>
				</>
			)}
			{!loading && products.length === 0 && <Typography>No Products</Typography>}
		</Stack>
	);
}

export default FilteredProductPage;
