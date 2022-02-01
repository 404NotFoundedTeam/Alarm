import AlarmWrapper from "./AlarmWrapper";
import UseSwitchesBasic from "../../Components/Switch/Switch";
import { Button, IconButton, Switch } from "@mui/material";
import { getTimes } from "../../Components/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataAlarms from "../../data/alarms";

const Alarm = () => {

	const [hours, setHours] = useState(0);
	const [minute, setMinute] = useState(0);
	const [dayWeak, setDayWeak] = useState(0);
	const [monthDay, setMonthDay] = useState(0);
	const [month, setMonth] = useState("")

	setInterval(() => {
		const {hour, minutes} = getTimes();
		setHours(hour);
		setMinute(minutes);
	}, 1000);
	useEffect(() => {
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

	const data = [
		{
			actives: [2, 4, 5],
			hours: 13,
			minutes: 11,
		},
		{
			actives: [2, 4, 5],
			hours: 15,
			minutes: 11,
		},
		{
			actives: [2, 4, 5],
			hours: 10,
			minutes: 11,
		},
		{
			actives: [2, 4, 5],
			hours: 10,
			minutes: 9,
		}
	]

	const pushAlarm = (alarm) => {
		data.push(alarm);
	}

	return (
		<AlarmWrapper>
			<div className="row justify-content-center w-100" >
				<div className="col-md-6 col-lg-5 col-xxl-4 px-3 py-3 mainAlarms">
					<div className="alarm-header w-100 text-center py-5">
						<p className="title">Upcoming alarm</p>
						<h2 className={"upcoming-time"}>6 hours 45 minutes</h2>
{/*<<<<<<< HEAD*/}
						<p className="now-time">{ `${dayWeak}, ${monthDay} ${month} ${hours > 9 ? hours : "0" + hours} : ${minute > 9 ? minute : "0" + minute}`}</p>
					</div>
					<div className="add-alarm">
						<Link to={'/SetAlarm'}>
							<IconButton className="addBtn"><i className={"fas fa-plus"}/></IconButton>
						</Link>
					</div>
					<ul className="alarms w-100">
						{
							dataAlarms.sort((a, b) => {
								if(a.hours === b.hours) {
									return a.minutes - b.minutes;
								}else {
									return a.hours - b.hours;
								}
							}).map((item, i) =>
								<li key={"item" + i}>
									<span className="hoursAndMinutes">{item.hours > 9 ? item.hours : "0" + item.hours} : {item.minutes > 9 ? item.minutes : "0" + item.minutes}</span>
									<div className="options d-flex align-items-center justify-content-center">
										<div className="weakDays">
											{
												days.map((day, i) => (
													<span className={item.actives.includes(i) && "active"}>{day}</span>
												))
											}
										</div>
										<UseSwitchesBasic defaultChecked={true} sx={{marginTop: "20px"}}/>
									</div>
								</li>
							)
						}
				</ul>
{/*=======*/}
{/*						<p className="now-time">{`${dayWeak}, ${monthDay} ${month} ${hours} : ${minute}`}</p>*/}
{/*					</div>*/}
{/*					<div className="add-alarm">*/}
{/*						<IconButton className="addBtn"><Link to="/setAlarm"><i className={"fas fa-plus"} /></Link></IconButton>*/}
{/*					</div>*/}
{/*					<ul className="alarms w-100">*/}
{/*						{dataAlarms.reverse().map((alarm) => {*/}
{/*							return (*/}
{/*								<li>*/}
{/*									<span className="hoursAndMinutes">{`${(new Date(alarm.date)).getHours()} : ${(new Date(alarm.date)).getMinutes()}`}</span>*/}
{/*									<div className="options d-flex align-items-center justify-content-center">*/}
{/*										<div className="weakDays">*/}
{/*											<span>S</span>*/}
{/*											<span className={"active"}>M</span>*/}
{/*											<span>T</span>*/}
{/*											<span>W</span>*/}
{/*											<span className={"active"}>T</span>*/}
{/*											<span>F</span>*/}
{/*											<span>S</span>*/}
{/*										</div>*/}
{/*										<Switch checked={true} />*/}
{/*									</div>*/}
{/*								</li>*/}
{/*							)*/}
{/*						})}*/}
{/*					</ul>*/}
{/*>>>>>>> 23ba35dea193136b1b1a0310e801ac7093597a16*/}
				</div>
			</div>
		</AlarmWrapper>
	)
}

export default Alarm;