import { v4 as uuid } from 'uuid';
// Icons
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const NAV_LINKS_CONFIG = [
	{
		id: uuid(),
		type: 'group',
		title: 'Products',
		Icon: AutoStoriesOutlinedIcon,
		menuChildren: [
			{
				title: 'Amazon',
				href: '/products/amazon',
			},
			{
				title: 'Etsy',
				href: '/products/etsy',
			},
			{
				title: 'Walmart',
				href: '/products/walmart',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Trends',
		Icon: PaletteOutlinedIcon,
		menuChildren: [
			{
				title: 'Facebook',
				href: '/trending',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Terms & Use',
		Icon: AccountCircleOutlinedIcon,
		menuChildren: [
			{
				title: 'Notice of Privacy',
				href: '/privacy',
			},
			{
				title: 'FAQ',
				href: '/faq',
			},
			{
				title: 'Terms and Conditions',
				href: '/terms_and_conditions',
			},
		],
	},
];

export default NAV_LINKS_CONFIG;