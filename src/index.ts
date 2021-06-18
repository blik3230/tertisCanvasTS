import "./styles.css";
import { Screen } from "./modules/Screen/Screen";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")!;

const ITEM_ZISE = 20;

const screen = new Screen(ctx, ITEM_ZISE);

const SCREEN_WIDTH = 11;
const SCREEN_HEIGHT = 20;
let screenMap = new Array(SCREEN_HEIGHT).fill(null).map(_ => new Array(SCREEN_WIDTH).fill(null));

const generateScreenMap = () => {
  console.time('create arr')
  screenMap = screenMap.map( row => row.map( _ => Math.round( Math.random() ) ) );

  screen.render(screenMap);
  console.timeEnd('create arr')
};

generateScreenMap();

const btn = document.getElementById('rerender')!;
btn.addEventListener('click', () => {
  console.time('handle');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateScreenMap();
  console.timeEnd('handle');
});

// setInterval(generateScreenMap, 1000 / 24);
