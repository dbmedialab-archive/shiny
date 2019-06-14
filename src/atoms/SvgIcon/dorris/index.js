const dorrisIcons = {
	'bell': () => import('./Bell'),
	'bookmark': () => import('./Bookmark'),
	'car': () => import('./Car'),
	'coins': () => import('./Coins'),
	'concentric-circles': () => import('./ConcentricCircles'),
	'dice': () => import('./Dice'),
	'document-alt': () => import('./DocumentAlt'),
	'document': () => import('./Document'),
	'documents': () => import('./Documents'),
	'food': () => import('./Food.js'),
	'gear': () => import('./Gear'),
	'globe': () => import('./Globe'),
	'grid': () => import('./Grid'),
	'heart-line': () => import('./HeartLine'),
	'heart': () => import('./Heart'),
	'home-alt': () => import('./HomeAlt'),
	'home': () => import('./Home'),
	'horizontal-ellipse': () => import('./HorizontalEllipse'),
	'horoscope': () => import('./Horoscope'),
	'lightning': () => import('./Lightning'),
	'magnifier': () => import('./Magnifier.js'),
	'medal': () => import('./Medal'),
	'new-tab': () => import('./NewTab'),
	'olympic-flame': () => import('./OlympicFlame'),
	'olympic-rings': () => import('./OlympicRings'),
	'pin': () => import('./Pin'),
	'running': () => import('./Running'),
	'scale': () => import('./Scale'),
	'share': () => import('./Share'),
	'silhouette': () => import('./Silhouette'),
	'sliders': () => import('./Sliders'),
	'speech-bubble-question': () => import('./SpeechBubbleQuestion'),
	'speech-bubble': () => import('./SpeechBubble'),
	'speech-bubbles': () => import('./SpeechBubbles'),
	'star': () => import('./Star'),
	'suitcase': () => import('./Suitcase'),
	'television': () => import('./Television'),
	'trash': () => import('./Trash.js'),
	'vertical-ellipse': () => import('./VerticalEllipse'),

	// Aliases
	'athletics': () => import('./Running'),
	'bin': () => import('./Trash.js'),
	'breaking': () => import('./ConcentricCircles'),
	'cardio': () => import('./HeartLine'),
	'categories': () => import('./Grid'),
	'cog': () => import('./Gear'),
	'comment': () => import('./SpeechBubble'),
	'comments': () => import('./SpeechBubbles'),
	'copy': () => import('./Documents'),
	'entertainment': () => import('./Television'),
	'exit': () => import('./Running'),
	'external-link': () => import('./NewTab'),
	'favorite': () => import('./Heart'),
	'favourite': () => import('./Heart'),
	'feedback': () => import('./SpeechBubbles'),
	'finance': () => import('./Coins'),
	'health': () => import('./HeartLine'),
	'money': () => import('./Coins'),
	'motor': () => import('./Car'),
	'news': () => import('./DocumentAlt'),
	'newspaper': () => import('./DocumentAlt'),
	'notification': () => import('./Bell'),
	'olympics-alt': () => import('./OlympicFlame'),
	'olympics': () => import('./OlympicRings'),
	'opinion': () => import('./SpeechBubble'),
	'politics': () => import('./Scale'),
	'position': () => import('./Pin'),
	'privacy': () => import('./Document'),
	'profile': () => import('./Silhouette'),
	'question': () => import('./SpeechBubbleQuestion'),
	'quiz': () => import('./SpeechBubbleQuestion'),
	'recommendation': () => import('./Star'),
	'review': () => import('./Dice'),
	'search': () => import('./Magnifier.js'),
	'settings-alt': () => import('./Sliders'),
	'settings': () => import('./Gear'),
	'similar-stories': () => import('./Documents'),
	'sports': () => import('./Running'),
	'travel': () => import('./Suitcase'),
	'tv': () => import('./Television'),
	'user': () => import('./Silhouette'),
	'world': () => import('./Globe'),
};

export default dorrisIcons;
