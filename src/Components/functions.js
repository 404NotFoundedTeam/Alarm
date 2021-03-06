import {useEffect, useState} from "react";

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
		month: monthNames[date.getMonth()-1].slice(0, 3),
		hour: date.getHours(),
		monthDay: date.getDate(),
		minutes: date.getMinutes(),
		sec: date.getSeconds(),
		dayWeak: dayWeakNames[date.getDay()]
	}
	return obj;
}

const PlayAudio = url => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = (isPlay) => {
		if(!playing){
			setPlaying(isPlay)
		}
		if(playing && !isPlay){
			setPlaying(false)
		}
	};

	useEffect(() => {
			if(playing){
				audio.play();
			}
			else {
				audio.pause();
				audio.currentTime = 0;
			}
		},
		[playing]
	)
	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	return toggle;
};
const PlayVibrate = url => {
	const [vibration] = useState(new Audio(url));
	const [playingV, setPlayingV] = useState(false);

	const toggle = (isPlay) => {
		if(!playingV){
			setPlayingV(isPlay)
		}
		if(playingV && !isPlay){
			setPlayingV(false)
		}
	};

	useEffect(() => {
			if(playingV){
				vibration.play();
			}
			else {
				vibration.pause();
				vibration.currentTime = 0;
			}
		},
		[playingV]
	)
	vibration.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	return toggle;
};

export { getTimes, PlayAudio, PlayVibrate }