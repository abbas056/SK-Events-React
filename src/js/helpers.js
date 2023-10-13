import unknown from "../assets/unknown.png";
import spooky1 from "../assets/Card-Flip-Opt/5.gif";
import spooky2 from "../assets/Card-Flip-Opt/6.gif";
import creepy1 from "../assets/Card-Flip-Opt/1.gif";
import creepy2 from "../assets/Card-Flip-Opt/2.gif";
import haunted1 from "../assets/Card-Flip-Opt/3.gif";
import haunted2 from "../assets/Card-Flip-Opt/4.gif";

export const overFlowAuto = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "auto";
  }
};
export const overFlowHidden = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};
export const currencySlang = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
export const captureImageError = (event) => {
  event.target.src = unknown;
  return true;
};
export const slicePlease = (array, from, to) => {
  const cutting = array?.slice(from, to);
  return cutting;
};
export const w1Rotation = (result, setFirstWheel) => {
  if (result == 1) {
    setFirstWheel("w1rotate0");
  } else if (result == 2) {
    setFirstWheel("w1rotate1");
  } else if (result == 3) {
    setFirstWheel("w1rotate2");
  } else if (result == 4) {
    setFirstWheel("w1rotate3");
  } else if (result == 5) {
    setFirstWheel("w1rotate4");
  } else if (result == 6) {
    setFirstWheel("w1rotate5");
  } else if (result == 7) {
    setFirstWheel("w1rotate6");
  }
};
export const w2Rotation = (result, setSecondWheel) => {
  if (result == 1) {
    setSecondWheel("w2rotate0");
  } else if (result == 2) {
    setSecondWheel("w2rotate1");
  } else if (result == 3) {
    setSecondWheel("w2rotate2");
  } else if (result == 4) {
    setSecondWheel("w2rotate3");
  } else if (result == 5) {
    setSecondWheel("w2rotate4");
  } else if (result == 6) {
    setSecondWheel("w2rotate5");
  } else if (result == 7) {
    setSecondWheel("w2rotate6");
  } else if (result == 8) {
    setSecondWheel("w2rotate7");
  }
};
export const animationFunc = (value, tab1, tab2, tab3) => {
  let animation;
  if (tab1 && value == 1) {
    animation = spooky1;
  } else if (tab1 && value == 2) {
    animation = spooky2;
  } else if (tab2 && value == 1) {
    animation = creepy1;
  } else if (tab2 && value == 2) {
    animation = creepy2;
  } else if (tab3 && value == 1) {
    animation = haunted1;
  } else if (tab3 && value == 2) {
    animation = haunted2;
  }
  return animation;
};
export const successAlert = (data) => [
  {
    // headtext: `${head}`,
    data: <>{data}</>,
  },
];
export const unsuccessAlert = (msj) => [
  {
    // headtext: `${oop}`,
    data: <>{msj}</>,
  },
];
