import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Modal from '@/components/modal';
import { Stack, Typography, Divider, Box, Button, TextField, InputAdornment, Link, IconButton } from '@mui/material';

import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase-config';
import { toast } from 'react-toastify';

// Icons
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleLoginButton from '@/components/GoogleLoginButton';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function LoginModal({ openModal, setOpenModal, setShowForgetPasswordModal, setIsAuthenticated }) {
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
					<LoginForm
						setOpenModal={setOpenModal}
						setShowForgetPasswordModal={setShowForgetPasswordModal}
						setIsAuthenticated={setIsAuthenticated}
					/>
					<Divider>OR</Divider>
					<GoogleLoginButton setOpenModal={setOpenModal} />
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

function LoginForm({ setOpenModal, setShowForgetPasswordModal, setIsAuthenticated }) {
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState({});

	const handleLogIn = async () => {
		if (!user.email || !user.password) {
			toast.error('Email and password are required.', {
				autoClose: 3000, // Set to 3000ms (5 seconds)
			});
			return;
		}

		try {
			const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
			const token = await userCredential.user.getIdToken();

			const payloadHeader = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await axios.post(`${BACKEND_API}/auth/signIn`, { email: user.email }, payloadHeader);
			const jwtToken = response.data.token;

			localStorage.setItem('TOKEN', jwtToken);

			setOpenModal(false);
			toast.success('Logged in successfully!', {
				autoClose: 3000,
			});
		} catch (error) {
			toast.error(`Login error: ${error.message}`, {
				autoClose: 3000,
			});
		}
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
						<IconButton onClick={() => setShowPassword(!showPassword)}>
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
					'&:not(:disabled)': {
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
