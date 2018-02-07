const getTimeFromMins = (mins) => {
	const hour = 60;
	const hours = Math.floor(mins / hour);
	const minutes = mins % hour;
	return `${hours ? `${hours}t` : ''} ${minutes ? `${minutes}min` : ''}`;
};

export { getTimeFromMins };
