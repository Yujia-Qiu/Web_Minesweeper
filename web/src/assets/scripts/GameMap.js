import { AcGameObjects } from "./AcGameObjects";
import { Board } from "./Board";

export class GameMap extends AcGameObjects {
    constructor(ctx, parent) { //这是一个画布
        super(); //需要使用继承函数的时候需要super()

        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;//每个格子（像素）的绝对距离， 后面寸的话都是相对距离。L表示一个单位的长度，13就是13个单位的长度

        this.rows = 13;
        this.cols = 13;
        this.mines = 20;

        this.board = [];
    }

    create_mines() {
        const g = [];
        for(let r = 0; r < this.rows; r++) {
            g[r] = [];
            for(let c = 0; c < this.cols; c++) {
                g[r][c] = false;
            }
        }

        for (let i = 0; i < this.mines; i++) {
            for (let j = 0; j < 1000; j++) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);
                if(g[r][c]) {
                    continue;
                }
                g[r][c] = true;
                break;
            }
        }

        for(let r = 0; r < this.rows; r++) {
            for(let c = 0; c < this.cols; c++) {
                if(g[r][c]) {
                    this.board.push(new Board(r, c, this));
                }
            }
        }

    }

    start() {
        this.create_mines();
    }

    update_size() { //每分钟更新边长
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));//在画布的大小求出cols和rows里面最小的值
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update() {
        this.update_size();
        this.render();
    }

    render() {
        /*var img1 = new Image();
        img1.src="../../assets/images/0.png";
        var pattern = this.ctx.createPattern(img1, "repeat")*/
        const color_even = "##A9A9A9", color_odd = "#DCDCDC";
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if((r + c) % 2 == 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
                //this.ctx.fillStyle = pattern;
                //this.ctx.fill(); 
            }
        }
        //this.ctx.fillStyle = 'green';
        //this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}