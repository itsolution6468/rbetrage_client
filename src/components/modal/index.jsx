import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
// Icons
import CloseIcon from '@mui/icons-material/Close';
// assets
import logo from '@/assets/images/logo/png/logo.png';

/**
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullScreen'} MAX_WIDTH_KEYS
 *
 * @param {Object} props
 * @param {boolean} props.openModal
 * @param {Function} props.fnCloseModal
 * @param {string=} props.title
 * @param {MAX_WIDTH_KEYS=} props.maxWidth
 * @param {'contained'|'underline'|'clean'} props.type
 * @param {string} props.children
 */

function Modal(props) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const {
		openModal,
		fnCloseModal,
		title,
		maxWidth = 'xs',
		type = 'contained',
		padding = false,
		children,
		width,
		...rest
	} = props;

	return (
		<Dialog
			fullScreen={maxWidth === 'fullScreen' ? true : fullScreen}
			maxWidth={maxWidth === 'fullScreen' ? false : maxWidth}
			open={openModal}
			scroll="paper"
			onClose={fnCloseModal}
			PaperProps={{
				variant: 'elevation',
				sx: {
					backgroundImage: 'none',
					width: '100%',
				},
			}}
			{...rest}
		>
			<Box position="relative">
				{type === 'contained' && <ContainedBox title={title} fnCloseModal={fnCloseModal} />}
				{type === 'underline' && <UnderlineBox title={title} fnCloseModal={fnCloseModal} />}
				<Box p={padding ? '5%' : ''}>{children}</Box>
			</Box>
		</Dialog>
	);
}

function UnderlineBox({ title, fnCloseModal }) {
	return (
		<Box top={0} zIndex={9999} position="sticky">
			<Stack direction="row" alignItems="center" height={50} px={1}>
				<Box width="100%">
					<CloseButton fnCloseModal={fnCloseModal} />
				</Box>
			</Stack>
			<Divider variant="middle" sx={{ border: 1, borderColor: 'primary.main' }} />
		</Box>
	);
}

function ContainedBox({ title, fnCloseModal }) {
	return (
		<Box top="0" position="sticky" zIndex={9999}>
			<Stack direction="row" alignItems="center" height={50}>
				<Box width="100%">
					<CloseButton fnCloseModal={fnCloseModal} color="#193D34" />
				</Box>
			</Stack>
		</Box>
	);
}

function CloseButton({ fnCloseModal, color }) {
	return (
		<IconButton aria-label="close" onClick={fnCloseModal} size="large" sx={{ float: 'right' }}>
			<CloseIcon sx={{ color }} />
		</IconButton>
	);
}
function ModalText({ text, color }) {
	return (
		<Typography variant="h4" fontWeight="400" color={color} align="center">
			{text}
		</Typography>
	);
}

export default Modal;
