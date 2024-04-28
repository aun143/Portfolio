// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Invoicely',
		category: 'Web Application',
		img: require('@/assets/images/invoicely.jpg'),
	},
	{
		id: 2,
		title: 'Twiiter Auto Comment',
		category: 'Chrome Extension',
		img: require('@/assets/images/twitterExt.jpg'),
	},
	{
		id: 3,
		title: 'Raap Builder',
		category: 'UI/UX Design',
		img: require('@/assets/images/raap-builder.jpg'),
	},
	{
		id: 4,
		title: 'PitchLane',
		category: 'Web Application',
		img: require('@/assets/images/pitchlane.jpg'),
	},
	{
		id: 5,
		title: 'Honest Property',
		category: 'Web Application',
		img: require('@/assets/images/honest-property.jpg'),
	},
	{
		id: 6,
		title: 'ERP Next',
		category: 'CMS',
		img: require('@/assets/images/erp-next.jpg'),
	},
];

export default projects;
