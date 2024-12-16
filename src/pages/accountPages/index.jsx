import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Stack, Box } from '@mui/material';

import backgroundImage from '@/assets/images/header/banner_light.png';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function AmazonProductPage() {
	const navigate = useNavigate();
	const [user, setUser] = useState({});

	useEffect(() => {
		if (!localStorage.getItem('TOKEN')) {
			navigate('/');
		}
	}, []);

	useEffect(() => {
		console.log(jwtDecode(localStorage?.TOKEN));
		const id = jwtDecode(localStorage?.TOKEN)?.id;

		console.log('id is', id);

		axios
			.get(`${BACKEND_API}/auth`, {
				params: { id },
			})
			.then((res) => {
				setUser(res.data.user);
				console.log(res.data.user);
			})
			.catch((err) => {
				console.log('Getting User Error', err);
			});
	}, []);

	return (
		<Box>
			<Helmet>
				<title>Account Setting Page | Rbetrage</title>
				<meta name="description" content="Account Setting page of rbetrage" />

				<link rel="canonical" href="https://rbetraj.com/account/settings" />
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
				<h1>Account</h1>
			</Stack>
			<Stack mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
				<Box>
					<p>Email</p>
					<span>{user?.email}</span>
				</Box>
				<Box>
					<p>Password</p>
					<span>......</span>
				</Box>
			</Stack>
		</Box>
	);
}

export default AmazonProductPage;
