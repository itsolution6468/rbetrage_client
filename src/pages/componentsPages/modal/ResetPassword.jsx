import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';
import { updatePassword } from "firebase/auth";
import { auth } from "@/firebase-config";

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function ResetPassword() {
	const { token } = useParams();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async () => {
		if (password !== confirmPassword) {
			setError('Passwords do not match!');
			return;
		}
		try {
			const user = auth.currentUser;
			console.log(user)
			if (user) {
				await updatePassword(user, password);
				console.log("Password updated successfully");
				setMessage('Password has been successfully reset.');
			} else {
				console.error("No user is signed in.");
			}
		} catch (err) {
			setError('Failed to reset password. Please try again.');
		}
	};

	return (
		<Stack sx={{ alignItems: 'center', gap: 3 }}>
			<Typography variant="h2">Reset Your Password</Typography>
			<TextField
				name="password"
				type="password"
				label="Password"
				required
				fullWidth
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				name="confirmPassword"
				type="password"
				label="Confirm Password"
				required
				fullWidth
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			{error && <Typography color="error">{error}</Typography>}
			{message && <Typography color="success">{message}</Typography>}
			<Button
				variant="contained"
				sx={{ backgroundColor: '#B0D46D !important', color: '#193D34' }}
				onClick={handleSubmit}
			>
				Reset Password
			</Button>
		</Stack>
	);
}

export default ResetPassword;
