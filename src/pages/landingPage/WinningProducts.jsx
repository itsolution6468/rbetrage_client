import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Stack, Typography } from '@mui/material';

import Rating from '@mui/material/Rating';
import SearchIcon from '@mui/icons-material/Search';
import ProductAnalysisModal from '@/pages/componentsPages/modal/Productsanalysis';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function WinningProducts() {
	const [isOpen, setOpen] = useState(false);
	const [winningProducts, setWinningProducts] = useState([]);
	const [selectProduct, setSelectProduct] = useState({});
	// const [matchProducts, setMatchProducts] = useState([]);

	useEffect(() => {
		axios
			.get(`${BACKEND_API}/products/winning_products`)
			.then((result) => {
				setWinningProducts(result.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const handleAnalysis = (data) => {
		setSelectProduct(data);
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<Box
			sx={{
				fontSize: '20px',
			}}
		>
			<h2 className="landing-title-h2">Find Winning Products</h2>
			<Box sx={{ background: '#E9F2F4', width: '100%', py: { sm: 3, xs: 2 }, px: { sm: 5, xs: 2 } }}>
				<Swiper
					spaceBetween={10}
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 1,
						},
						// when window width is >= 480px
						480: {
							slidesPerView: 1.5,
						},
						600: {
							slidesPerView: 2,
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 2.5,
						},
						900: {
							slidesPerView: 3,
						},
						// when window width is >= 1024px
						1024: {
							slidesPerView: 3.5,
						},
						// when window width is >= 1200px
						1200: {
							slidesPerView: 4,
						},
					}}
				>
					{winningProducts.map((data, index) => (
						<SwiperSlide key={`product-slide-${index}`} className="landing-swiper">
							<Stack
								sx={{
									// marginBottom: '20px',
									boxShadow: '0 0 10px rgba(0,0,0,0.15)',
									padding: 2,
									bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
									color: (theme) => (theme.palette.mode === 'dark' ? '#000' : 'grey.800'),
									borderRadius: '20px',
									height: '444px',
									display: 'flex',
									justifyContent: 'flex-end',
								}}
							>
								<picture>
									<source type="image/webp" srcSet={data.imageUrl ? data.imageUrl : data.url} />
									<img
										src={data.imageUrl ? data.imageUrl : data.url}
										alt={data.description}
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
									>
										{data.title.length > 100
											? data.title.slice(0, 100) + String('...')
											: data.title}
									</Typography>
									<Stack
										sx={{
											flexDirection: 'row',
											alignItems: 'center',
											gap: '5px',
										}}
									>
										{data.other.stars ? (
											<>
												<Rating
													name="half-rating-read"
													defaultValue={data.other.stars}
													precision={0.5}
													readOnly
												/>
												{data.other.stars}
											</>
										) : (
											''
										)}
										<Typography>({data.other.reviewsCount})</Typography>
									</Stack>
									{data.price ? (
										<Typography sx={{ fontSize: '20px', color: '#193D34', fontWeight: '500' }}>
											{data.price ? data.price : ''}
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
										onClick={() => handleAnalysis(data)}
									>
										View Product Analysis
									</Button>
								</Stack>
							</Stack>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
			<ProductAnalysisModal
				openModal={isOpen}
				closeModal={closeModal}
				product={selectProduct}
				// similarProducts={matchProducts}
			/>
		</Box>
	);
}

export default WinningProducts;
