const dorisIcons = {
	// Diverse
	'search': () => import('./Search.js'),
	'trash': () => import('./Trash.js'),
	'vertical-ellipse': () => import('./VerticalEllipse'),
	'horizontal-ellipse': () => import('./HorizontalEllipse'),
	'ellipse': () => import('./Ellipse'),
	'bookmark': () => import('./Bookmark'),
	'share': () => import('./Share'),
	'breaking': () => import('./Breaking'),
	'similar-stories': () => import('./SimilarStories'),

	// tabNav
	'home': () => import('./Home'),
	'heart': () => import('./Heart'),
	'category': () => import('./Category'),
	'settings': () => import('./Settings'),

	// Kategorier
	'recommendation': () => import('./Recommendation'),
	'home-alt': () => import('./HomeAlt'),
	'review': () => import('./Review'),
	'health': () => import('./Health'),
	'horoscope': () => import('./Horoscope'),
	'food': () => import('./Food.js'),
	'medal': () => import('./Medal'),
	'opinion': () => import('./Opinion'),
	'motor': () => import('./Motor'),
	'news': () => import('./News'),
	'olympic-rings': () => import('./OlympicRings'),
	'politics': () => import('./Politics'),
	'quiz': () => import('./Quiz'),
	'travel': () => import('./Travel'),
	'sports': () => import('./Sports'),
	'entertainment': () => import('./Entertainment'),
	'world': () => import('./World'),
	'finance': () => import('./Finance'),

	// Innstillingssiden
	'settings-alt': () => import('./SettingsAlt'),
	'profile': () => import('./Profile'),
	'privacy': () => import('./Privacy'),
	'position': () => import('./Position'),
	'feedback': () => import('./Feedback'),
	'notification': () => import('./Notification'),
	'new-tab': () => import('./NewTab'),
};

export default dorisIcons;
