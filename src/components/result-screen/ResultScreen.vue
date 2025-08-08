<script setup>
const { timeMap } = defineProps({
    timeMap: Object,
})
</script>

<template>
    <div
        class="content"
        ref="content"
    >
        <img class="content__logo" src="/logo.png" alt="logo" />

        <div class="content__text"><b>Свободные интервалы</b> на электроэпиляцию и ознакомительный сеанс</div>

        <div class="content__wrapper">
            <div class="content__header">
                <p>ДАТА</p>
                <p>ВРЕМЯ</p>
            </div>

            <div class="cards">
                <div
                    v-for="(date, key) in timeMap"
                    :key="key"
                    class="cards__item"
                >
                    <div class="image">
                        <p class="image__week">Понедельник</p>
                        <p class="image__day">08.08</p>
                    </div>
                    <div class="times">
                        <p>
                            10:00 - 12:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    overflow-y: scroll;
    background: url("/background.png") bottom;
    background-size: 100%;
}

.content:before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(0.25rem) brightness(0.5);
}

.content__logo {
    z-index: 1;
    width: 45%;
    margin: 3rem auto 0;
}

.content__text {
    padding: 1rem 1rem 0;
    z-index: 1;
    font-size: 0.85rem;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    text-wrap: balance;
    color: white;
}

.content__text b {
    font-weight: 600;
    color: #e1d4c4;
}

.content__wrapper {
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;
}

.content__header {
    font-family: "Alumni Sans", sans-serif;
    font-weight: 100;
    font-size: 2rem;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.content__header :first-child {
    letter-spacing: 2px;
}

.cards {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
}

.cards__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.image {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
    min-width: 25.5vw;
    width: 25.5vw;
    height: 25.5vw;
    font-family: "Roboto", sans-serif;
}

.image__week {
    color: rgb(168, 0, 0);
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
}

.image__day {
    color: black;
    font-size: 1.5rem;
}

.times {
    display: grid;
    justify-content: end;
    width: 100%;
    gap: 8px;
    font-size: 18px;
}

.times p {
    padding: 0.1rem .25rem;
    border-radius: 0.32rem;
    background: white;
}
</style>
