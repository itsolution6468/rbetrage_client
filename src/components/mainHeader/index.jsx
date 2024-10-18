import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { Box, Stack, Container, Button, IconButton, useMediaQuery, Typography } from '@mui/material';
import { AccountBoxRounded } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

// assets
import logo from '@/assets/images/logo/png/logo.png';

import SearchBar from './searchBar';
import navItems from '../layouts/mainLayout/navItems';
import Navbar from '@/components/navbar';
import LoggedUser from './loggedUser';
import LoginModal from '@/pages/componentsPages/modal/Login';
import SignUpModal from '@/pages/componentsPages/modal/SignUp';
import ForgetPasswordModal from '@/pages/componentsPages/modal/ForgetPassword';

function MobileNavbar({ isMobile, navigate }) {
	const [expanded, setExpanded] = useState('');

	return (
		<Stack
			sx={{
				gap: '20px',
			}}
		>
			<SearchBar isMobile={isMobile} />
			<Stack>
				{navItems.map((item, index) => (
					<div key={`item-${index}`}>
						<Typography
							sx={{
								color: '#fff',
								fontSize: '20px',
								cursor: 'pointer',
							}}
							onClick={() => setExpanded(item.title)}
						>
							{item.title}
						</Typography>
						{expanded === item.title ? (
							<div>
								{item.menuChildren.map((subItem, index1) => (
									<Typography
										key={`sub-${index1}`}
										sx={{
											marginLeft: '10px',
											color: '#fff',
											fontSize: '15px',
											cursor: 'pointer',
										}}
										onClick={() => navigate(subItem.href)}
									>
										{subItem.title}
									</Typography>
								))}
							</div>
						) : (
							''
						)}
					</div>
				))}
			</Stack>
		</Stack>
	);
}

function MainHeader() {
	const navigate = useNavigate();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [menuOpen, setMenuOpen] = useState(false);

	const menuRef = useRef(null);

	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [showSignInModal, setShowSignInModal] = useState(false);
	const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const token = localStorage.getItem('TOKEN');

	useEffect(() => {
		if (token) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, [token]);

	const toggleMenu = () => {
		setMenuOpen((prevOpen) => !prevOpen);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<Box bgcolor="background.paper" component="header" py={2.5} zIndex={10}>
			<Stack
				component={Container}
				maxWidth="lg"
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				flexWrap="wrap"
				spacing={3}
				overflow="hidden"
			>
				<Stack direction="row" alignItems="center" spacing={1} onClick={() => navigate('/home')}>
					<Box
						component="img"
						width={{
							xs: 150,
							sm: 100,
						}}
						src={logo}
						alt="logo"
						sx={{ cursor: 'pointer' }}
					/>
				</Stack>

				{isMobile ? (
					<Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
						<IconButton onClick={() => navigate('/home')}>
							<AccountBoxRounded fontSize="large" />
						</IconButton>

						<IconButton color="inherit" aria-label="open drawer" onClick={toggleMenu} edge="start">
							<MenuIcon />
						</IconButton>

						<Fade in={menuOpen}>
							<Box
								ref={menuRef}
								sx={{
									position: 'fixed',
									top: 0,
									right: 0,
									width: '50%',
									height: '100%',
									bgcolor: '#193D34',
									boxShadow: 5,
									zIndex: 15000,
									transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
									transition: 'transform 600ms ease-in-out',
									padding: '20px',
								}}
							>
								<IconButton
									color="secondary"
									onClick={toggleMenu}
									sx={{ position: 'absolute', top: 16, right: 16 }}
								>
									<ExpandMoreIcon />
								</IconButton>

								<MobileNavbar isMobile={isMobile} navigate={navigate} />
							</Box>
						</Fade>
					</Stack>
				) : (
					<Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
						<Navbar navItems={navItems} />
						<SearchBar />
						{isAuthenticated ? (
							<LoggedUser setIsAuthenticated={setIsAuthenticated} />
						) : (
							<Stack
								sx={{
									flexDirection: {
										xs: 'column',
										sm: 'row',
									},
								}}
							>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#E9F2F4 !important',
										color: '#193D34',
										boxShadow: 'none',
										borderRadius: '10px',
										marginRight: '10px !important',
										'&:hover': {
											backgroundColor: '#B0D46D !important',
										},
									}}
									onClick={() => {
										setShowSignUpModal(false);
										setShowForgetPasswordModal(false);
										setShowSignInModal(true);
									}}
								>
									Sign In
								</Button>
								<Button
									variant="contained"
									sx={{
										backgroundColor: '#E9F2F4 !important',
										color: '#193D34',
										boxShadow: 'none',
										borderRadius: '10px',
										'&:hover': {
											backgroundColor: '#B0D46D !important',
										},
									}}
									onClick={() => {
										setShowSignUpModal(true);
										setShowForgetPasswordModal(false);
										setShowSignInModal(false);
									}}
								>
									Sign Up
								</Button>
							</Stack>
						)}
					</Stack>
				)}
			</Stack>
			<LoginModal
				openModal={showSignInModal}
				setOpenModal={setShowSignInModal}
				setShowForgetPasswordModal={setShowForgetPasswordModal}
				setIsAuthenticated={setIsAuthenticated}
			/>
			<SignUpModal openModal={showSignUpModal} setOpenModal={setShowSignUpModal} />
			<ForgetPasswordModal openModal={showForgetPasswordModal} setOpenModal={setShowForgetPasswordModal} />
		</Box>
	);
}

export default MainHeader;
