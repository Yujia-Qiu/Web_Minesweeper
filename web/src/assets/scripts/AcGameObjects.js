const AC_GAME_OBJECTS = [];

export class AcGameObjects {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() { //只在创建的时候执行一次

    }

    update() { //每一帧执行一次， 除了第一次外

    }

    on_destroy() { //删除之前执行

    }

    destroy() { //删除对象， 判断如果当前的
        this.on_destroy();
        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if(obj === this) {
                AC_GAME_OBJECTS.splice(i); //splice删除
                break;
            }
        }
    }
}

let last_timestamp; // 上一次执行的时刻

//每一帧都call一次step。这样就做到了每一帧都走一次
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) { //of表示循环的值， in表示循环的下标
        if(!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        }else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step)

}
//传入一个函数
requestAnimationFrame(step)