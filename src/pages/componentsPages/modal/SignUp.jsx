import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Modal from '@/components/modal';
import { Stack, Typography, Divider, Box, Button, TextField, FormControlLabel, Link, Checkbox } from '@mui/material';

import Google from '@/assets/icons/social-google.svg';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function SignUpModal({ openModal, setOpenModal }) {
	const closeModal = () => {
		setOpenModal(false);
	};

	return (
		<Modal openModal={openModal} fnCloseModal={closeModal} padding>
			<Stack
				sx={{
					alignItems: 'center',
				}}
			>
				<Typography variant="h2">Sign Up</Typography>
				<Stack spacing={2}>
					<LoginForm setOpenModal={setOpenModal} />

					<Divider>OR</Divider>
					<Button
						disableElevation
						fullWidth
						variant="outlined"
						sx={{
							color: (theme) => (theme.palette.mode === 'dark' ? 'text.primary' : 'grey.700'),
							backgroundColor: '#E9F2F4',
							borderColor: 'border',
						}}
						to="/home"
						component={RouterLink}
					>
						<Box
							sx={{
								mr: {
									xs: 1,
									sm: 2,
								},
								mt: 0,
								backgroundColor: '#E9F2F4',
							}}
							width={16}
							height={16}
							component="img"
							src={Google}
							alt="google"
						/>
						Login with Google
					</Button>
				</Stack>
			</Stack>
		</Modal>
	);
}

function LoginForm({ setOpenModal }) {
	const [user, setUser] = useState({});

	const handleSignup = async (e) => {
		axios
			.post(`${BACKEND_API}/auth/signUp`, {
				name: user.name,
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				cookies.set('TOKEN', res.data.token, {
					path: '/home',
				});
				setOpenModal(false);
			})
			.catch((err) => {
				console.log('SignUp Error: ', err);
			});
	};

	return (
		<Box component="form">
			<TextField
				color="primary"
				autoFocus
				name="name"
				label="User Name"
				margin="normal"
				variant="outlined"
				fullWidth
				type="text"
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<TextField
				color="primary"
				autoFocus
				name="email"
				label="Email"
				margin="normal"
				variant="outlined"
				fullWidth
				type="email"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<TextField
				color="primary"
				name="password"
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				fullWidth
			/>
			<FormControlLabel
				control={
					<Checkbox
						name="termsAndConditions"
						color="primary"
						onChange={(e) => setUser({ ...user, termsAccepted: e.target.checked })}
					/>
				}
				label={
					<Typography sx={{ fontSize: '15px' }}>
						I agree to the
						<Link
							href="/terms_and_conditions"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ textDecoration: 'none' }}
						>
							{' '}
							terms and conditions
						</Link>
					</Typography>
				}
				sx={{
					alignItems: 'center',
				}}
			/>

			<Button
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 2,
					color: '#193D34',
					' &:not(:disabled)': {
						background: `#B0D46D !important`,
						boxShadow: 'none',
					},
					borderRadius: '10px',
					mx: 'auto',
				}}
				variant="contained"
				color="primary"
				onClick={handleSignup}
			>
				Sign Up
			</Button>
		</Box>
	);
}

export default SignUpModal;
