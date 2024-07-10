import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Modal from '@/components/modal';
import { Stack, Typography, Divider, Box, Button, TextField, InputAdornment, Link, IconButton } from '@mui/material';

import Google from '@/assets/icons/social-google.svg';
import axios from 'axios';
import Cookies from 'universal-cookie';

// Icons
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const cookies = new Cookies();
const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function LoginModal({ openModal, setOpenModal, setShowForgetPasswordModal }) {
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
				<Typography variant="h2">Sign In</Typography>
				<Stack spacing={2}>
					<LoginForm setOpenModal={setOpenModal} setShowForgetPasswordModal={setShowForgetPasswordModal} />

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
					<Typography>
						No account yet?{' '}
						<Link to="/auth/signup" variant="body2" component={RouterLink}>
							Register here
						</Link>
					</Typography>
				</Stack>
			</Stack>
		</Modal>
	);
}

function LoginForm({ setOpenModal, setShowForgetPasswordModal }) {
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState({});

	const handleLogIn = async () => {
		axios
			.post(`${BACKEND_API}/auth/signIn`, {
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
				console.log('Login error: ', err);
			});
	};
	return (
		<Box component="form">
			<TextField
				color="primary"
				autoFocus
				name="email"
				label="Email"
				margin="normal"
				variant="outlined"
				fullWidth
				type="email"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircleIcon />
						</InputAdornment>
					),
				}}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<TextField
				color="primary"
				name="password"
				type={showPassword ? 'text' : 'password'}
				margin="normal"
				label="Password"
				variant="outlined"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockOpenOutlinedIcon />
						</InputAdornment>
					),
					endAdornment: (
						<IconButton
							onClick={() => {
								setShowPassword(!showPassword);
							}}
						>
							<RemoveRedEyeIcon />
						</IconButton>
					),
				}}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				fullWidth
			/>
			<Button
				textAlign="center"
				variant="body2"
				component={RouterLink}
				color="tertiary.main"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mx: 'auto',
					mt: '20px',
					color: '#193D34',
					textDecoration: 'none',
				}}
				onClick={() => {
					setShowForgetPasswordModal(true);
					setOpenModal(false);
				}}
			>
				Forget password?
			</Button>

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
				onClick={handleLogIn}
			>
				Sign In
			</Button>
		</Box>
	);
}

export default LoginModal;
