import { useState } from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';
import Modal from '@/components/modal';
import axios from 'axios';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

function ForgetPasswordModal({ openModal, setOpenModal }) {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [step, setStep] = useState(1);
	const [verificationCode, setVerificationCode] = useState(new Array(6).fill(''));
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleDigitChange = (index, value) => {
		if (/^\d?$/.test(value)) {
			// Only allow single digit numbers
			const newCode = [...verificationCode];
			newCode[index] = value;
			setVerificationCode(newCode);

			// Automatically focus next input
			if (value && index < 5) {
				document.getElementById(`digit-${index + 1}`).focus();
			}
		}
	};

	const handleSubmit = async () => {
		try {
			await axios.post(`${BACKEND_API}/auth/forgot-password`, { email });
			setStep(2);
		} catch (err) {
			setError('Failed to send email. Please try again.');
		}
	};

	const handleVerifyCodeSubmit = async () => {
		const code = verificationCode.join('');
		try {
			const response = await axios.post(`${BACKEND_API}/auth/verify-code`, { email, code });
			if (response.data.success) {
				setStep(3);
			} else {
				setError('Invalid verification code.');
			}
		} catch (err) {
			setError('Failed to verify code. Please try again.');
		}
	};

	const handleResetSubmit = async () => {
		if (password !== confirmPassword) {
			setError('Passwords do not match!');
			return;
		}
		try {
			await axios.post(`${BACKEND_API}/auth/reset-password`, { email, password });
			setStep(1); // Reset the step to start over
			setOpenModal(false); // Optionally close the modal after reset
		} catch (err) {
			setError('Failed to reset password. Please try again.');
		}
	};

	const closeModal = () => {
		setOpenModal(false);
	};

	let modalContent;

	if (step === 1) {
		modalContent = (
			<Stack sx={{ alignItems: 'center', gap: 3 }}>
				<Typography variant="h2">Forget Your Password?</Typography>
				<TextField
					name="email"
					type="email"
					label="Email"
					required
					fullWidth
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{error && <Typography color="error">{error}</Typography>}
				<Button
					variant="contained"
					sx={{ backgroundColor: '#B0D46D !important', color: '#193D34' }}
					onClick={handleSubmit}
				>
					Send
				</Button>
			</Stack>
		);
	} else if (step === 2) {
		modalContent = (
			<Stack sx={{ alignItems: 'center', gap: 3 }}>
				<Typography variant="h2">Enter Verification Code</Typography>
				<Stack direction="row" spacing={1}>
					{verificationCode.map((digit, index) => (
						<TextField
							key={index}
							id={`digit-${index}`}
							type="text"
							value={digit}
							onChange={(e) => handleDigitChange(index, e.target.value)}
							inputProps={{
								maxLength: 1,
								style: { textAlign: 'center' },
							}}
						/>
					))}
				</Stack>
				{error && <Typography color="error">{error}</Typography>}
				<Button
					variant="contained"
					sx={{ backgroundColor: '#B0D46D !important', color: '#193D34' }}
					onClick={handleVerifyCodeSubmit}
				>
					Verify Code
				</Button>
			</Stack>
		);
	} else {
		modalContent = (
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
				<Button
					variant="contained"
					sx={{ backgroundColor: '#B0D46D !important', color: '#193D34' }}
					onClick={handleResetSubmit}
				>
					Reset Password
				</Button>
			</Stack>
		);
	}

	return (
		<Modal openModal={openModal} fnCloseModal={closeModal} padding>
			{modalContent}
		</Modal>
	);
}

export default ForgetPasswordModal;
