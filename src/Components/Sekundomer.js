import React, { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
import SekundomerWrapper from "./SekundomerWrapper";
const saveTime = [];

function Sekundomer() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    saveTime.push(time);
    console.log(saveTime);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    saveTime.splice(0, saveTime.length);
  };

  const resume = () => start();

  return (
    <SekundomerWrapper>
      <DisplayComponent time={time} />
      <BtnComponent
        status={status}
        resume={resume}
        reset={reset}
        stop={stop}
        start={start}
      />
      <div className="text-white">
        <div className="row">
          <div className="col-12">
            {saveTime.map((e) => {
              return (
                <div className="borderBottom">
                  {e.h ? e.h`.` : ""} {e.m ? e.m`.` : ""}
                  {e.s} . {e.ms}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SekundomerWrapper>
  );
}

export default Sekundomer;
