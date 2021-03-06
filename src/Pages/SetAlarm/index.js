import { Switch, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SetAlarmWrapper from "./SetAlarmWrapper";
import React, { useState } from 'react';
import dataAlarms from "../../data/alarms";
import { useNavigate } from "react-router-dom";

const SetAlarm = () => {
  let navigate = useNavigate();
  const [sound, setSound] = useState(false)
  const [vibration, setVibration] = useState(false)
  const [snooze, setSnooze] = useState(false)
  const [date, setDate] = useState();
  const [days, setDays] = useState([]);
  const submitData = (e) => {
    e.preventDefault();
    let alarmInfo = {
      sound,
      vibration,
      snooze,
      actives: days,
      date: new Date(date).toLocaleDateString() + new Date(date).toLocaleTimeString(),
      hours: (new Date(date)).getHours(),
      minutes: (new Date(date)).getMinutes(),
      time: (new Date(date)).getTime(),
    }
    dataAlarms.push(alarmInfo);
    navigate(`/`);
  }

  function getDay(e) {
    e.preventDefault()
    e.target.classList.toggle('active-day');
    let selectedDays = [...days];
    let currentValue = parseInt(e.target.getAttribute('data-day'));
    console.log(currentValue);
    if (selectedDays.includes(currentValue)) selectedDays.splice(selectedDays.indexOf(currentValue), 1);
    else selectedDays.push(currentValue)
    setDays(selectedDays);
  }

  return (

    <SetAlarmWrapper>
      <div className="container-fluid">
        <div className="row justify-content-center flex-column align-items-center">
          <div className="col-md-6 text-center mt-4">
            <div className="setTime d-flex justify-content-center">
              <p className="setHours fs-1">
                {date ? `${(new Date(date)).getHours()}` : '--'}
              </p>
              <p className="dots fs-1">
                :
              </p>
              <p className="setMinutes fs-1">
                {date ? `${(new Date(date)).getMinutes()}` : '--'}
              </p>
            </div>

          </div>
          <div className="col-md-6 mt-4">
            <form onSubmit={submitData} id="setAlarmForm">
              <TextField
                id="datetime-local"
                onChange={(e) => {
                  // document.querySelectorAll('.weekDays').forEach(
                  //   (item) => {
                  //     if (item.getAttribute('data-day') === `${(new Date(e.target.value)).getDay()}`)
                  //     item.click();
                  //   }
                  // )
                  setDate(e.target.value);
                }}
                type="datetime-local"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <div className="d-flex align-items-center weekday-btns">
                <button data-day="0" className="weekDays" onClick={getDay}>S</button>
                <button data-day="1" className="weekDays" onClick={getDay}>M</button>
                <button data-day="2" className="weekDays" onClick={getDay}>T</button>
                <button data-day="3" className="weekDays" onClick={getDay}>W</button>
                <button data-day="4" className="weekDays" onClick={getDay}>T</button>
                <button data-day="5" className="weekDays" onClick={getDay}>F</button>
                <button data-day="6" className="weekDays" onClick={getDay}>S</button>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div>
                  <p className="d-block m-0">Alarm Sound</p>
                  <p className="subtitle m-0">Basic Bell</p>
                </div>
                <Switch
                  onChange={() => { setSound(!sound) }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div>
                  <p className="d-block m-0">Vibrate</p>
                  <p className="subtitle m-0">Basic Call</p>
                </div>
                <Switch
                  onChange={() => { setVibration(!vibration) }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div>
                  <p className="d-block m-0">Snooze</p>
                  <p className="subtitle m-0">5 minutes, 3 times</p>
                </div>
                <Switch
                  onChange={() => { setSnooze(!snooze) }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </div>
            </form>
          </div>
          <div className="col-6 p-0 mt-4">
            <div className="d-flex fs-5">
              <button className="m-0 w-50 border"><Link to={"/"}>Cancel</Link></button>
              <button className="m-0 w-50 border" type="submit" form="setAlarmForm">Save</button>
            </div>
          </div>
        </div>
      </div>
    </SetAlarmWrapper>
  );
}

export default SetAlarm;