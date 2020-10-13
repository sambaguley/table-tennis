export let blip;
blip = new Audio("./blip.wav");

export const playBlip = () => {
  blip.play();
};
