const removeFalsyValuesFromArray = (arr) => {
	return arr.filter(val => !!val);
};

export default removeFalsyValuesFromArray;
export { removeFalsyValuesFromArray };
