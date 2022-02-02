import AlarmWrapper from "./AlarmWrapper";
import UseSwitchesBasic from "../../Components/Switch/Switch";
import { Button, IconButton, Switch } from "@mui/material";
import {getTimes, PlayVibrate} from "../../Components/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataAlarms from "../../data/alarms";
import audioPath from "../../Components/audios/budilnik1.mp3"
import vibrationPath from "../../Components/audios/vibration.mp3"
import {PlayAudio} from '../../Components/functions'
import setAlarm from "../SetAlarm";
import Modal from "../../Components/Modal/Modal";

const Alarm = () => {
	let date = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
	const [modal, setModal] = useState(false)

	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(0);
	const [dayWeak, setDayWeak] = useState(0);
	const [monthDay, setMonthDay] = useState(0);
	const [isHaveFirstAlarm, setIsHaveFirstAlarm] = useState(null)
	const [month, setMonth] = useState("");
	const [second, setSecond] = useState(0);
	// const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
	// const [date, setDate] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setMinute((new Date()).getMinutes())
			setSecond((new Date().getSeconds()))
		}, 1000);
	}, [])
	useEffect(() => {
		console.log("minutes")
		setHours(getTimes().hour);
	}, [minute])
	useEffect(() => {
		const {monthDay, dayWeak} = getTimes();
		setMonthDay(monthDay)
		setDayWeak(dayWeak)
	}, [hours])
	useEffect(() => {
		setMonth(getTimes().month)
	}, [monthDay])

	const  days = ["S", "M", "T", "W", "T", "F", "S"];

	const setAudio = PlayAudio(audioPath);
	const setVibration = PlayVibrate(vibrationPath);
	const stopAudio = () => {
		setAudio(false);
		setVibration(false)
		setModal(false)
	}

	dataAlarms.sort((a, b) => a.time - b.time);
	if(!isHaveFirstAlarm){
		dataAlarms[0] && setIsHaveFirstAlarm(dataAlarms[0])
	}
	return (
		<AlarmWrapper>
			<div className="row justify-content-center w-100" >
				<div className="col-md-6 col-lg-5 col-xxl-4 px-3 mainAlarms">
					<div className="alarm-header w-100 text-center pt-3">
						<p className="title">Upcoming alarm</p>
						<h2 className={"upcoming-time"}>6 hours 45 minutes</h2>
						<p className="now-time">{ `${dayWeak}, ${monthDay} ${month} ${hours > 9 ? hours : "0" + hours} : ${minute>9 ? minute : "0" + minute} : ${second>9 ? second : "0" + second}`}</p>
					</div>
					<div className="add-alarm">
						<Link to={'/SetAlarm'}>
							<IconButton className="addBtn"><i className={"fas fa-plus"}/></IconButton>
						</Link>
					</div>
					<ul className="alarms w-100">
						{
							dataAlarms.map((item, i) => {
								if (date === item.date && item.actives.includes((new Date()).getDay())) {
									item.sound && setAudio(true);
									item.vibration && setVibration(true);
									if(!modal) setModal(true)
								}
								return (
									<>
										{modal && <Modal item={item} stop={{function: stopAudio}}/>}
										<li key={"item" + i}>
											<span className="hoursAndMinutes">{item.hours > 9 ? item.hours : "0" + item.hours} : {item.minutes > 9 ? item.minutes : "0" + item.minutes}</span>
											<div className="options d-flex align-items-center justify-content-center">
												<div className="weakDays">
													{
														days.map((day, i) => (
															<span key={"day" + i} className={(item.actives.includes(i) && "active") || ""}>{day}</span>
														))
													}
												</div>
												<UseSwitchesBasic defaultChecked={true} sx={{marginTop: "20px"}}/>
											</div>
										</li></>
								)
							}
							)
						}
				</ul>
				</div>
			</div>
		</AlarmWrapper>
	)
}

export default Alarm;