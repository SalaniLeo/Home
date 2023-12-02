// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Leo!',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning',
	greetingAfternoon: 'Good afternoon',
	greetingEvening: 'Good evening',
	greetingNight: 'Go to Sleep',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '72d251b81d30ef572ae667dfe6c4ee1a', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '44.8',
	defaultLongitude: '11.8333',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '17:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://earth.google.com/web/',
		},
		{
			id: '4',
			name: 'Meteo',
			icon: 'sun',
			link: 'http://www.persicetometeo.com/',
		},
		{
			id: '5',
			name: 'earth',
			icon: 'globe',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'flathub',
			icon: 'computer',
			link: 'https://flathub.org/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'home',
			id: '1',
			links: [
				{
					name: 'Home Assistant',
					link: 'http://192.168.50.5:8123',
				},
				{
					name: 'Immich',
					link: 'http://192.168.50.155:30041',
				},
				{
					name: 'TrueNAS',
					link: 'https://192.168.50.155',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Whatsapp',
					link: 'https://web.whatsapp.com',
				},
				{
					name: 'Google Earth',
					link: 'https://earth.google.com',
				},
				{
					name: 'SalaniLeo',
					link: 'https://www.salanileo.dev',
				},
			],
		},
	],
};
