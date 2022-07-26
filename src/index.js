const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const transform = (code) => {
  const res = code
    .match(/.{1,2}/g)
    .map((elem) => (elem == "00" ? "" : elem == "10" ? "." : "-"));
  return MORSE_TABLE[res.join("")];
};

function decode(expr) {
  const res = [];
  const codeArr = expr.split("**********");
  codeArr.forEach((element) => {
    const letterCode = element.toString();
    const letter = letterCode.match(/.{1,10}/g).map((elem) => transform(elem));
    res.push(letter.join(""));
  });

  return res.join(" ");
}

module.exports = {
  decode,
};
