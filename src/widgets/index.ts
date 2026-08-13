import PixelClock from "./PixelClock";

import bitday01 from "../assets/bitday/01.png";
import bitday02 from "../assets/bitday/02.png";
import bitday03 from "../assets/bitday/03.png";
import bitday04 from "../assets/bitday/04.png";
import bitday05 from "../assets/bitday/05.png";
import bitday06 from "../assets/bitday/06.png";
import bitday07 from "../assets/bitday/07.png";
import bitday08 from "../assets/bitday/08.png";
import bitday09 from "../assets/bitday/09.png";
import bitday10 from "../assets/bitday/10.png";
import bitday11 from "../assets/bitday/11.png";
import bitday12 from "../assets/bitday/12.png";

/* -------------------------------------------------------------------------- */
/* Widget definitions                                                         */
/* -------------------------------------------------------------------------- */

export interface WidgetDefinition {
  id: string;
  name: string;
  description: string;
  path: string;
  component: React.ComponentType;
}

export const widgets: WidgetDefinition[] = [
  {
    id: "clock",
    name: "Pixel Clock",
    description:
      "A dynamic pixel-art clock with a changing BitDay landscape.",
    path: window.location.pathname + "widgets/clock",
    component: PixelClock,
  },

  // Add future widgets here:
  //
  // {
  //   id: "focus",
  //   name: "Focus Time",
  //   description: "A pixel-art Pomodoro timer.",
  //   path: window.location.pathname + "/widgets/focus",
  //   component: FocusTime,
  // },
];

/* -------------------------------------------------------------------------- */
/* BitDay                                                                      */
/* -------------------------------------------------------------------------- */

export type DayPeriod =
  | "early-morning"
  | "mid-morning"
  | "late-morning"
  | "early-afternoon"
  | "mid-afternoon"
  | "late-afternoon"
  | "early-evening"
  | "mid-evening"
  | "late-evening"
  | "early-night"
  | "mid-night"
  | "late-night";

export interface DayPeriodConfig {
  id: DayPeriod;
  label: string;
  image: string;
  startHour: number;
}

/**
 * BitDay images mapped to the corresponding period of the day.
 *
 * The images themselves remain named 01.png → 12.png.
 *
 * 01 → Sunrise
 * 07 → Sunset / early evening
 */
export const DAY_PERIODS: DayPeriodConfig[] = [
  {
    id: "early-morning",
    label: "EARLY MORNING",
    image: bitday01,
    startHour: 6,
  },
  {
    id: "mid-morning",
    label: "MID MORNING",
    image: bitday02,
    startHour: 8,
  },
  {
    id: "late-morning",
    label: "LATE MORNING",
    image: bitday03,
    startHour: 10,
  },
  {
    id: "early-afternoon",
    label: "EARLY AFTERNOON",
    image: bitday04,
    startHour: 12,
  },
  {
    id: "mid-afternoon",
    label: "MID AFTERNOON",
    image: bitday05,
    startHour: 14,
  },
  {
    id: "late-afternoon",
    label: "LATE AFTERNOON",
    image: bitday06,
    startHour: 16,
  },
  {
    id: "early-evening",
    label: "EARLY EVENING",
    image: bitday07,
    startHour: 18,
  },
  {
    id: "mid-evening",
    label: "MID EVENING",
    image: bitday08,
    startHour: 20,
  },
  {
    id: "late-evening",
    label: "LATE EVENING",
    image: bitday09,
    startHour: 22,
  },
  {
    id: "early-night",
    label: "EARLY NIGHT",
    image: bitday10,
    startHour: 0,
  },
  {
    id: "mid-night",
    label: "MID NIGHT",
    image: bitday11,
    startHour: 2,
  },
  {
    id: "late-night",
    label: "LATE NIGHT",
    image: bitday12,
    startHour: 4,
  },
];

/**
 * Returns the BitDay period corresponding to the current hour.
 *
 * The cycle is:
 *
 * 06 → 01 Early Morning
 * 08 → 02 Mid Morning
 * 10 → 03 Late Morning
 * 12 → 04 Early Afternoon
 * 14 → 05 Mid Afternoon
 * 16 → 06 Late Afternoon
 * 18 → 07 Early Evening
 * 20 → 08 Mid Evening
 * 22 → 09 Late Evening
 * 00 → 10 Early Night
 * 02 → 11 Mid Night
 * 04 → 12 Late Night
 */
export function getDayPeriod(
  hour: number,
): DayPeriodConfig {
  const index =
    hour >= 6
      ? Math.floor((hour - 6) / 2)
      : Math.floor(hour / 2) + 9;

  return DAY_PERIODS[index];
}