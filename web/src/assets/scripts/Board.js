import { AcGameObjects } from "./AcGameObjects";

export class Board extends AcGameObjects {
    constructor(r, c, gamemap) {
        super(); //子类可以调用父类函数
        this.r = r;
        this.c = c;
        this.gamemap = gamemap;
        this.color = "#B37226";
    }

    update() {
        this.render();
    }

    render() {
       /*var img1 = new Image();
        img1.src="./assets/images/0.png";
        var pattern = this.ctx.createPattern(img1, "repeat")*/
        
        /*const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        var img1 = new Image();
        img1.src = 'images/0.png'; 
        img1.onload = function() {
            var pattern = ctx.createPattern(img1, "repeat");
            ctx.fillStyle = pattern;

        };

        ctx.fill();
        ctx.fillRect(this.c * L, this.r * L, L, L);*/


        //ctx.rect(this.c * L, this.r * L, L, L);
        //ctx.fill();


        /*ctx.fillStyle = pattern;
        ctx.fill(this.c * L, this.r * L, L, L); */
        // const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.c * L, this.r * L, L, L);

        var img = new Image();
        img.src = "@/assets/images/0.png";
        ctx.drawImage(img, 10, 10);
        

    }
}