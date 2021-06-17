import "./styles.css";
import { Screen } from "./modules/Screen/Screen";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")!;

const ITEM_ZISE = 20;

const screen = new Screen(ctx, ITEM_ZISE);

let screenMap;

const generateScreenMap = () => {
  screenMap = new Array(10)
    .fill(null)
    .map((_) =>
      new Array(10).fill(null).map((_) => Math.round(Math.random() * 7))
    );

  screen.render(screenMap);
};

generateScreenMap();

setInterval(generateScreenMap, 1000);
