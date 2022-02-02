import React, { useEffect, useContext } from "react";
import Button from "../../Components/Button";
import CountdownAnimation from "../../Components/CountdownAnimation";
import SetPomodoro from "../../Components/SetPomodoro";
import { SettingsContext } from "../../context/SettingsContext";
import TimerWrapper from "./TimerWrapper";

function Timer() {
  const {
    pomodoro: pomidor,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <TimerWrapper>
      <div className="box">
        <div className="container">
          {pomidor !== 0 ? (
            <>
              <div className="timer-container">
                <div className="time-wrapper">
                  <CountdownAnimation
                    key={pomidor}
                    timer={pomidor}
                    animate={startAnimate}
                  >
                    {children}
                  </CountdownAnimation>
                </div>
              </div>
              <div className="btnn">
                <Button
                  title="Break"
                  activeClass={startAnimate ? "active" : undefined}
                  _callback={pauseTimer}
                />
                <Button title="cancel" _callback={SettingsBtn} />
              </div>
              <div className="boxx">
                <Button
                  title="Start"
                  activeClass={!startAnimate ? "active" : undefined}
                  _callback={startTimer}
                />
              </div>
            </>
          ) : (
            <SetPomodoro />
          )}
        </div>
      </div>
    </TimerWrapper>
  );
}

export default Timer;
