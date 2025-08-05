<script setup>
const emit = defineEmits(['to-next-stage', 'to-prev-stage']);
</script>

<template>
    <div class="buttons">
        <el-button
            size="large"
            style="width: 100%"
            @click="emit('to-prev-stage')"
        >
            Вернуться назад
        </el-button>

        <el-button
            size="large"
            type="success"
            style="width: 100%"
        >
            Перейти к результату
        </el-button>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    margin-top: auto;
}
</style>
