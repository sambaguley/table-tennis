const init = () => {
  console.log("start");
  const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
  const ctx = gameCanvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 50, 50);
};

window.addEventListener("load", () => {
  init();
});
