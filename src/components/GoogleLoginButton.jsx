import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { auth, provider, signInWithPopup, signOut } from '@/firebase-config';
import Google from '@/assets/icons/social-google.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function GoogleLoginButton({ setOpenModal }) {
	const handleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			const token = await result.user.getIdToken();
			const payloadHeader = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await axios.post(`${BACKEND_API}/auth/google`, {}, payloadHeader);
			const jwtToken = response.data.token;

			localStorage.setItem('TOKEN', jwtToken);
			setOpenModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<Button
				disableElevation
				fullWidth
				variant="outlined"
				sx={{
					color: (theme) => (theme.palette.mode === 'dark' ? 'text.primary' : 'grey.700'),
					backgroundColor: '#E9F2F4',
					borderColor: 'border',
				}}
				to="/"
				component={RouterLink}
				onClick={handleLogin}
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
		</div>
	);
}

export default GoogleLoginButton;
