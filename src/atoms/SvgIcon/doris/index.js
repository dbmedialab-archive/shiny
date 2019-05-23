const dorisIcons = {
	// Diverse
	sok: () => import('./Search.js'),
	trash: () => import('./Trash.js'),
	verticalEllipse: () => import('./VerticalEllipse'),
	horizontalEllipse: () => import('./HorizontalEllipse'),
	ellipse: () => import('./Ellipse'),
	bookmark: () => import('./Bookmark'),
	del: () => import('./Share'),
	sisteNytt: () => import('./LatestNews'),
	lignendeSaker: () => import('./SimilarStories'),

	// tabNav
	home: () => import('./Home'),
	heart: () => import('./Heart'),
	myFeed: () => import('./Heart'),
	category: () => import('./Category'),
	categoryIcon: () => import('./Category'),
	Settings: () => import('./Settings'),

	// Kategorier
	Anbefalt: () => import('./Recommended'),
	Bolig: () => import('./Bolig'),
	Forbrukertester: import('./Forbrukertester'),
	Helse: () => import('./Health'),
	Horoskop: () => import('./Horoscope'),
	Mat: () => import('./Food.js'),
	Medalje: () => import('./Medal'),
	Meninger: () => import('./Meninger'),
	Motor: () => import('./Motor'),
	Nyheter: () => import('./News'),
	OLRinger: () => import('./OlympicRings'),
	Politikk: () => import('./Politics'),
	Quiz: () => import('./Quiz'),
	Reise: () => import('./Travel'),
	Sport: () => import('./Sports'),
	Underholdning: () => import('./Entertainment'),
	Utenriks: () => import('./Utenriks'),
	Økonomi: () => import('./Economy'),

	// Innstillingssiden
	Andreinnstillinger: () => import('./SettingsAlt'),
	MinProfil: () => import('./Profile'),
	Personvern: () => import('./Privacy'),
	Posisjon: () => import('./Position'),
	Tilbakemeldinger: () => import('./Feedback'),
	Varsler: () => import('./Notifications'),
	iBrowser: () => import('./InBrowser'),
};

export default dorisIcons;
