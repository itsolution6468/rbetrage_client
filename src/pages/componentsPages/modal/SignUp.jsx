import { useState } from 'react';
import Modal from '@/components/modal';
import { Stack, Typography, Divider, Box, Button, TextField, FormControlLabel, Link, Checkbox } from '@mui/material';

import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase-config';
import GoogleLoginButton from '@/components/GoogleLoginButton';

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
					<GoogleLoginButton />
				</Stack>
			</Stack>
		</Modal>
	);
}

function LoginForm({ setOpenModal }) {
	const [user, setUser] = useState({});

	const handleSignup = async (e) => {
		e.preventDefault();

		if (!user.email || !user.password) {
			console.error('Email and password are required.');
			return;
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
			const token = await userCredential.user.getIdToken();

			const payloadHeader = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await axios.post(`${BACKEND_API}/auth/signUp`, { name: user.name, email: user.email, password: user.password }, payloadHeader);
			const jwtToken = response.data.token;

			localStorage.setItem('TOKEN', jwtToken);

			setOpenModal(false);
			window.location.reload();
		} catch (error) {
			console.error('Error during signup:', error.message);
		}
	};

	return (
		<Box component="form" onSubmit={handleSignup}>
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
							href="/terms"
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
				type="submit"
			>
				Sign Up
			</Button>
		</Box>
	);
}

export default SignUpModal;
