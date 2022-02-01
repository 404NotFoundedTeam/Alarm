const getTimes = () => {
	const date = new Date();
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	const dayWeakNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	const obj = {
		month: monthNames[date.getMonth()].slice(0, 3),
		hour: date.getHours(),
		monthDay: date.getDate(),
		minutes: date.getMinutes(),
		sec: date.getSeconds(),
		dayWeak: dayWeakNames[date.getDay()]
	}
	return obj;
}
export { getTimes }