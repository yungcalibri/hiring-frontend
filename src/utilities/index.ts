import { prefixes, suffixes } from "@tlon/phonemes-js";

// takes four arbitrary numbers of ascending magnitude, represented as two
// arrays of two numbers, and constructs an @p
export const makePatp = (syllables: Array<Array<number>>) => {
  return syllables
    .map((pair) => {
      const [pre, suf] = pair.map((n) => n % 256);
      return [prefixes[pre], suffixes[suf]].join("");
    })
    .join("-");
};
