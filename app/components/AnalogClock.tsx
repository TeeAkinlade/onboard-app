"use client"

import React, { useEffect, useRef, useState } from "react";

const AnalogClock = () => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      if (hours < 12) {
        setGreeting("Morning");
      } else if (hours < 17) {
        setGreeting("Afternoon");
      } else {
        setGreeting("Evening");
      }

      const secondDeg = (seconds / 60) * 360;
      const minuteDeg = (minutes / 60) * 360;
      const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

      if (secondRef.current)
        secondRef.current.style.transform = `rotate(${secondDeg}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `rotate(${minuteDeg}deg)`;
      if (hourRef.current)
        hourRef.current.style.transform = `rotate(${hourDeg}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      <div className="relative w-36 h-36 rounded-full bg-[#F1FDFE] shadow-md shadow-[#00000040] mt-10">
        {[12, 3, 6, 9].map((num) => (
          <div
            key={num}
            className="absolute text-cyan-600 font-medium"
            style={{
              top: num === 12 ? 4 : num === 6 ? "auto" : "50%",
              bottom: num === 6 ? 4 : "auto",
              left: num === 9 ? 4 : num === 3 ? "auto" : "50%",
              right: num === 3 ? 4 : "auto",
              transform:
                num === 12
                  ? "translateX(-50%)"
                  : num === 6
                  ? "translateX(-50%)"
                  : num === 9
                  ? "translateY(-50%)"
                  : "translateY(-50%)",
            }}
          >
            {num}
          </div>
        ))}

        <div
          ref={hourRef}
          className="absolute w-1 h-10 bg-[#2E8F95] origin-bottom left-1/2 top-8 transform -translate-x-1/2 rounded"
        />
        <div
          ref={minuteRef}
          className="absolute w-1 h-12 bg-[#7DC9CE] origin-bottom left-1/2 top-6 transform -translate-x-1/2 rounded"
        />
        <div
          ref={secondRef}
          className="absolute w-[2px] h-14 bg-[#C8C8C8] origin-bottom left-1/2 top-4 transform -translate-x-1/2 rounded opacity-80"
        />
        <div className="absolute w-3 h-3 bg-[#F0F4F3] border border-gray-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg shadow-[#00000040]" />
      </div>
      <p className="absolute top-0 right-5 font-semibold text-xs">
        Good {greeting || 'morning'}

      </p>
    </div>
  );
};

export default AnalogClock;
