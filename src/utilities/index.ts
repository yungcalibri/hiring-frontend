import { prefixes, suffixes } from "@tlon/phonemes-js";
import dayjs from "dayjs";
import * as timeago from "timeago.js";

// takes four arbitrary numbers of ascending magnitude, represented as two
// arrays of two numbers, and constructs an @p
export const makePatp = (syllables: [[number, number], [number, number]]) => {
  return syllables
    .map((pair) => {
      const [pre, suf] = pair.map((n) => n % 256);
      return [prefixes[pre], suffixes[suf]].join("");
    })
    .join("-");
};

export const formatMinutesSince = (minSince: number) =>
  timeago.format(dayjs().subtract(minSince, "minute").toDate());
