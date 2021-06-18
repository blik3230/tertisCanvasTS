export type ScreenMap = number[][];

interface IPalette {
  0: string;
  [key: number]: string;
}

const defaultPalette: IPalette = {
  0: "#ddd",
  1: "#666",
  2: "red",
  3: "blue",
  4: "brown"
};

export class Screen {
  private prevScreenMap: ScreenMap | null = null;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private unitSize: number,
    private pallete: IPalette = defaultPalette
  ) {}

  private drawUnit = (x: number, y: number, color = "#ccc") => {
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = 2;

    this.ctx.clearRect(
      x * this.unitSize,
      y * this.unitSize,
      this.unitSize,
      this.unitSize,
    );
    this.ctx.fillRect(
      x * this.unitSize,
      y * this.unitSize,
      this.unitSize - 1,
      this.unitSize - 1
    );
    this.ctx.rect(
      x * this.unitSize + 3,
      y * this.unitSize + 3,
      this.unitSize - 7,
      this.unitSize - 7
    );
    this.ctx.stroke();
  };

  render = (screenMap: ScreenMap) => {
    console.time('render');
    let count = 0;
    screenMap.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const prevCol = this.prevScreenMap && this.prevScreenMap[rowIndex][colIndex];

        // if(col !== prevCol) {
          const color = this.pallete[col] || this.pallete[0];
          this.drawUnit(colIndex, rowIndex, color);
          count += 1;
        // }
      });
    });
    console.log(count);
    this.prevScreenMap = screenMap;
    console.timeEnd('render');
  };
}
