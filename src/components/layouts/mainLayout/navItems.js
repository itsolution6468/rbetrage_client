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
			{
				title: 'Alibaba',
				href: '/products/alibaba',
			},
			{
				title: '6th Street',
				href: '/products/6th-street',
			},
			{
				title: 'Jumbo',
				href: '/products/jumbo',
			},
			{
				title: 'Supermarket',
				href: '/products/supermarket',
			},
			// {
			// 	title: 'AliExpress',
			// 	href: '/products/ali-express',
			// },
			// {
			// 	title: 'Ebay',
			// 	href: '/products/ebay',
			// },
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
				href: '/trending/facebook',
			},
			{
				title: 'Google',
				href: '/trending/google',
			},
		],
	},
	// {
	// 	id: uuid(),
	// 	type: 'group',
	// 	title: 'Terms & Use',
	// 	Icon: AccountCircleOutlinedIcon,
	// 	menuChildren: [
	// 		{
	// 			title: 'Notice of Privacy',
	// 			href: '/privacy',
	// 		},
	// 		{
	// 			title: 'FAQ',
	// 			href: '/faq',
	// 		},
	// 		{
	// 			title: 'Terms and Conditions',
	// 			href: '/terms',
	// 		},
	// 	],
	// },
	{
		id: uuid(),
		type: 'item',
		title: 'Success Stories',
		href: '/success_story',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Blog',
		href: '/blogs',
	},
];

export default NAV_LINKS_CONFIG;
