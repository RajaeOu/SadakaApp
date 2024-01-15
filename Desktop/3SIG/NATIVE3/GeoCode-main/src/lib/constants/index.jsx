import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'annonces',
		label: 'Annonces',
		path: '/annonces',
		icon: <HiOutlineCube />
	},
	{
		key: 'utilisateur',
		label: 'Utilisateur',
		path: '/utilisateur',
		icon: <HiOutlineUsers />
	},
	
	{
		key: 'newsletter',
		label: 'NewsLetter',
		path: '/newsletter',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'carte',
		label: 'Carte',
		path: '/carte',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
