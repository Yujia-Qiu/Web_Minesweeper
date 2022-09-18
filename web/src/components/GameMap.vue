<template>
    <div ref="parent" class="gamemap"> 
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { GameMap } from "@/assets/scripts/GameMap";
import { ref, onMounted } from 'vue'
export default {
    setup() {
        let parent = ref(null); //没有指向任何元素
        let canvas = ref(null);

        //new canvas
        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });

        return {  //获取GameMap里面的画布， 然后返回值
            parent,
            canvas
        }
    }
}

</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
}
</style>