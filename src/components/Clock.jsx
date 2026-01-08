import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Digit from "./Digit";

const Clock = () => {
  const now = dayjs();
  const [timeDigits, setTimeDigits] = useState(now.format("HHmmss").split(""));

  useEffect(() => {
    const updateTime = () => {
      // HHmmss 형식으로 6자리 문자열 배열로 분리
      const digits = now.format("HHmmss").split("");
      setTimeDigits(digits);
    };

    const timeout = setTimeout(updateTime, 0);
    const interval = setInterval(updateTime, 3000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [now]);

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Digit key={0} digit={+timeDigits[0]} />
      <Digit key={1} digit={+timeDigits[1]} />
      <div className="colon">
        <span className="dot" />
        <span className="dot" />
      </div>
      <Digit key={2} digit={+timeDigits[2]} />
      <Digit key={3} digit={+timeDigits[3]} />
      <div className="colon">
        <span className="dot" />
        <span className="dot" />
      </div>
      <Digit key={4} digit={+timeDigits[4]} />
      <Digit key={5} digit={+timeDigits[5]} />
    </div>
  );
};

export default Clock;
