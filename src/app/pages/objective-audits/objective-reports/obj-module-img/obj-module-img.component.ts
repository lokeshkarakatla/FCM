import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-obj-module-img",
  templateUrl: "./obj-module-img.component.html",
  styleUrls: ["./obj-module-img.component.scss"],
})
export class ObjModuleImgComponent implements OnInit, AfterViewInit {
  filterToggle: boolean = false;
  viewMode: number = 2;
  readonly CELL_SIZE = 40;

  @ViewChildren("gridCanvas") canvases!: QueryList<
    ElementRef<HTMLCanvasElement>
  >;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Draw on initial load
    setTimeout(() => this.drawAllCanvases(), 100);

    // Re-draw whenever canvases are recreated (view switch)
    this.canvases.changes.subscribe(() => {
      setTimeout(() => this.drawAllCanvases(), 50);
    });
  }

  switchView(mode: number): void {
    this.viewMode = mode;
    // Canvases are destroyed/recreated on *ngIf toggle
    // canvases.changes subscription above handles the redraw
  }

  drawAllCanvases(): void {
    const canvasArray = this.canvases.toArray();

    if (this.viewMode === 1) {
      // Single view: one canvas per image, order matches images array
      canvasArray.forEach((canvasRef, index) => {
        const img = this.images[index];
        if (!img || !canvasRef) return;
        this.drawCanvas(
          canvasRef.nativeElement,
          img.widthPx,
          img.heightPx,
          img.highlightedCells,
        );
      });
    } else if (this.viewMode === 2) {
      // Double view: canvases appear in DOM order (left col, right col per row)
      // Rebuild the order: [img0, img1, img2, img3, ...]
      const orderedImages: typeof this.images = [];
      for (let i = 0; i < this.images.length; i += 2) {
        if (this.images[i]) orderedImages.push(this.images[i]);
        if (this.images[i + 1]) orderedImages.push(this.images[i + 1]);
      }

      canvasArray.forEach((canvasRef, index) => {
        const img = orderedImages[index];
        if (!img || !canvasRef) return;
        this.drawCanvas(
          canvasRef.nativeElement,
          img.widthPx,
          img.heightPx,
          img.highlightedCells,
        );
      });
    }
  }

  drawCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    highlightedCells: {
      col: number;
      row: number;
      color: string;
      value: string;
    }[],
  ): void {
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    this.drawGrid(ctx, width, height, highlightedCells);
  }

  drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    highlightedCells: {
      col: number;
      row: number;
      color: string;
      value: string;
    }[],
  ): void {
    ctx.clearRect(0, 0, width, height);

    for (const cell of highlightedCells) {
      // Subtract 1 so col:1, row:1 = top-left first cell (pixel 0,0)
      const x = (cell.col - 1) * this.CELL_SIZE;
      const y = (cell.row - 1) * this.CELL_SIZE;

      ctx.fillStyle = cell.color;
      ctx.fillRect(x, y, this.CELL_SIZE, this.CELL_SIZE);

      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.font = "bold 13px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(cell.value, x + this.CELL_SIZE / 2, y + this.CELL_SIZE / 2);
    }

    // Grid lines (unchanged)
    ctx.strokeStyle = "rgba(180, 180, 180, 0.5)";
    ctx.lineWidth = 1;

    const cols = Math.ceil(width / this.CELL_SIZE);
    const rows = Math.ceil(height / this.CELL_SIZE);

    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(c * this.CELL_SIZE, 0);
      ctx.lineTo(c * this.CELL_SIZE, height);
      ctx.stroke();
    }

    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(0, r * this.CELL_SIZE);
      ctx.lineTo(width, r * this.CELL_SIZE);
      ctx.stroke();
    }
  }

images = [
    {
      title: "Right Fender",
      src: "/assets/Swift/Right_Fender.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 2, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "2" },
        { col: 5, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "12" },
        { col: 7, row: 2, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "1" },
        { col: 2, row: 4, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 1, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 6, row: 3, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Right Front Door",
      src: "/assets/Swift/Right_Front_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "6" },
        { col: 6, row: 2, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 7, row: 5, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 6, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "12" },
        { col: 7, row: 7, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Right Rear Door",
      src: "/assets/Swift/Right_Rear_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "3" },
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 8, row: 3, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "3" },
        { col: 7, row: 4, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "7" },
        { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "12" },
        { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)", value: "6" },
        { col: 6, row: 8, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Rear",
      src: "/assets/Swift/Back.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 4, row: 4, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 6, row: 4, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 2, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "9" },
        { col: 4, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "2" },
        { col: 6, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "7" },
        { col: 8, row: 5, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 2, row: 6, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Left Rear Door",
      src: "/assets/Swift/Left_Rear_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "3" },
        { col: 7, row: 4, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 5, color: "rgba(127, 255, 127, 0.62)", value: "9" },
        { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "7" },
        { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "12" },
        { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)", value: "6" },
      ],
    },
    {
      title: "Left Front Door",
      src: "/assets/Swift/Left_Front_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 8, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "1" },
        { col: 7, row: 5, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 6, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 4, row: 7, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "5" },
        { col: 7, row: 7, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Left Fender",
      src: "/assets/Swift/Left_Fender.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 11, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "2" },
        { col: 8, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "12" },
        { col: 6, row: 2, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 10, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "1" },
        { col: 7, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "3" },
        { col: 9, row: 1, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Roof",
      src: "/assets/Swift/Roof.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 5, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
        { col: 9, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "7" },
        { col: 10, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "3" },
        { col: 6, row: 3, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 6, row: 6, color: "rgba(127, 255, 127, 0.62)", value: "12" },
      ],
    },
    {
      title: "Bonnet",
      src: "/assets/Swift/Bonnet.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 7, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "1" },
        { col: 4, row: 5, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 2, color: "rgba(127, 255, 127, 0.62)", value: "12" },
        { col: 3, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "4" },
      ],
    },
  ];
}
