import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// Icons
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ isMobile }) {

	const [searchProduct, setSearchProduct] = useState('');
	const navigate = useNavigate();

	const handleSearch = () => {
		navigate(`/products/filter?search=${searchProduct}`);
	}

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			navigate(`/products/filter?search=${searchProduct}`);
		}
	};

	return (
		<Stack
			display={{
				md: 'inline-block',
			}}
		>
			<TextField
				size="small"
				color="primary"
				InputProps={{
					name: 'search',
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								color="primary"
								sx={{
									backgroundColor: isMobile ? '#B0D46D' : '#193D34',
									borderRadius: '0px',
									color: !isMobile ? '#B0D46D' : '#193D34',
								}}
								onClick={handleSearch}
							>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),

					sx: {
						pr: 0,
						bgcolor: 'background.paper',
						borderRadius: '5px',
						overflow: 'hidden',
						border: '1px solid #193D34',
						height: 40,
					},
					inputProps: {
						sx: {
							transition: '0.3s padding',
							pl: 1.5,
							'&:not(:placeholder-shown), &:focus': {
								pl: 3,
							},
						},
					},
				}}
				placeholder="Search Product"
				variant="outlined"
				onChange={e => setSearchProduct(e.target.value)}
				onKeyDown={e => handleKeyDown(e)}
				fullWidth
			/>
		</Stack>
	);
}

export default SearchBar;
