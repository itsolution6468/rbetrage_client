import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// Icons
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ isMobile }) {
	return (
		<Stack
			component="form"
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
				fullWidth
			/>
		</Stack>
	);
}

export default SearchBar;
