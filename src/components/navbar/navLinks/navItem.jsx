import { Link as RouterLink, useMatch } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function NavItem({ Icon, title, showExpand = false, selected = false }) {
	return (
		<Stack
			width="100%"
			direction="row"
			p={2.5}
			alignItems="center"
			alignContent="center"
			justifyContent="center"
			spacing={1}
			title={title}
			sx={{
				'&:hover': {
					backgroundColor: '#193D34',
					color: '#B0D46D',
				},
				backgroundColor: '#fff',
				color: selected ? '#B0D46D' : '#000s',
			}}
		>
			{/* {Icon && (
				<Icon
					sx={{
						fontSize: 18,
						color: (theme) => (selected ? theme.palette.primary.contrastText : theme.palette.primary[300]),
					}}
				/>
			)} */}
			<Typography
				pt={0.2}
				display={{
					xs: 'none',
					md: 'inline',
				}}
				fontWeight="500"
				fontSize="13px"
			>
				{title}
			</Typography>
			{showExpand && (
				<ExpandMoreIcon
					fontSize="small"
					sx={{
						fontSize: 17,
					}}
				/>
			)}
		</Stack>
	);
}

export function NavItemButton({ children, selected, sx, ...rest }) {
	return (
		<ButtonBase
			sx={{
				flexGrow: 1,
				...(selected && {
					backgroundImage: (theme) =>
						`linear-gradient(90deg, ${theme.palette.primary[300]} 0%,${theme.palette.primary.dark} 100% )`,
					// bgcolor: selected ? '#000' : 'transparent',
				}),
				'&:hover': {
					bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1),
				},
				...sx,
			}}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
}
export function NavLink({ href, Icon, title }) {
	const match = useMatch({
		path: href,
	});

	return (
		<NavItemButton selected={match} component={RouterLink} to={href}>
			<NavItem Icon={Icon} title={title} selected={match} />
		</NavItemButton>
	);
}

export default NavLink;
