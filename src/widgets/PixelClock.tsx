import { useEffect, useState } from "react";

import {
  getDayPeriod,
  type DayPeriodConfig,
} from "./index";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface ClockData {
  hours: string;
  minutes: string;
  seconds: string;

  day: string;
  month: string;
  year: number;

  hour: number;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/* -------------------------------------------------------------------------- */
/* Clock data                                                                 */
/* -------------------------------------------------------------------------- */

function getClockData(): ClockData {
  const now = new Date();

  return {
    hours: String(now.getHours()).padStart(2, "0"),
    minutes: String(now.getMinutes()).padStart(2, "0"),
    seconds: String(now.getSeconds()).padStart(2, "0"),

    day: String(now.getDate()).padStart(2, "0"),
    month: MONTHS[now.getMonth()],
    year: now.getFullYear(),

    hour: now.getHours(),
  };
}

/* -------------------------------------------------------------------------- */
/* Background                                                                 */
/* -------------------------------------------------------------------------- */

interface BitDayBackgroundProps {
  period: DayPeriodConfig;
}

function BitDayBackground({
  period,
}: BitDayBackgroundProps) {
  return (
    <div
      className="
        absolute
        inset-0
        bg-cover
        bg-center
        bg-no-repeat
        transition-opacity
        duration-[2000ms]
      "
      style={{
        backgroundImage: `url(${period.image})`,
        imageRendering: "pixelated",
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Clock                                                                      */
/* -------------------------------------------------------------------------- */

export default function PixelClock() {
  const [time, setTime] = useState<ClockData>(
    getClockData,
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(getClockData());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const period = getDayPeriod(time.hour);

  return (
    <main
      className="
        relative
        h-screen
        min-h-[260px]
        w-full
        overflow-hidden
        bg-black
        font-['Press_Start_2P']
        [image-rendering:pixelated]
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* BitDay background                                                   */}
      {/* ------------------------------------------------------------------ */}

      <BitDayBackground period={period} />

      {/* ------------------------------------------------------------------ */}
      {/* Subtle overlay                                                      */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Pixel grid                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "8px 8px",
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Clock card                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div className="absolute inset-0 flex items-center justify-center p-[5%]">
        <div
          className="
            w-full
            max-w-[600px]
            border-4
            border-white
            bg-black/45
            p-[6%]
            text-center
            text-white
            shadow-[7px_7px_0_#000]
            backdrop-blur-[2px]
          "
        >
          {/* Widget title */}

          <div
            className="
              mb-[5%]
              flex
              items-center
              justify-center
              gap-3
              text-[clamp(6px,1.4vw,10px)]
              tracking-[2px]
              text-white/60
            "
          >
            <span className="h-2 w-2 bg-[#ffe600]" />

            PIXEL CLOCK

            <span className="h-2 w-2 bg-[#ffe600]" />
          </div>

          {/* Time */}

          <div
            className="
              whitespace-nowrap
              text-[clamp(18px,7.5vw,42px)]
              tracking-[3px]
              [text-shadow:3px_3px_0_#000]
            "
          >
            {time.hours}:{time.minutes}:{time.seconds}
          </div>

          {/* Date */}

          <div
            className="
              mt-[5%]
              text-[clamp(7px,1.8vw,11px)]
              text-white/90
              [text-shadow:2px_2px_0_#000]
            "
          >
            {time.day} {time.month} {time.year}
          </div>

          {/* Time of day */}

          <div
            className="
              mt-[5%]
              border-t-2
              border-white/10
              pt-[4%]
              text-[clamp(6px,1.3vw,8px)]
              uppercase
              tracking-[2px]
              text-white/40
            "
          >
            {period.label}
          </div>
        </div>
      </div>
    </main>
  );
}