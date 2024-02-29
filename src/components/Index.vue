<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

// Start with a placeholder in textarea
const cardsListInput = ref(`
1 Black Lotus
2x Birds of Paradise
Oko, Thief of Crowns
Bolas's Citadel
Realm-Cloaked Giant // Cast Off
`.trim());

function onSubmit() {
    console.log(cardsListInput.value);

    router.push({ path: '/results', query: { cards: cardsListInput.value } })
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <textarea class="cards" v-model="cardsListInput"></textarea>

            <button type="submit">Get the proxies!</button>
        </form>

        <p>Powered by <a href="https://scryfall.com">Scryfall</a>.</p>
        <p>Please report any errors to the issue tracker on my <a href="https://github.com/fklingler/mtgproxy">Github project page</a>.</p>
    </div>
</template>

<style scoped>
* {
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 1em;
  padding: 0;
  border: 0;
}

p {
    font-size: 0.7em;
}

.container {
    text-align: center;
    margin: 0 auto;
    width: 25em;
}

textarea {
    font-family: monospace;
    text-align: left;
    border: 1px solid black;
    display: block;
    font-size: 1em;
}

.cards {
    width: 100%;
    height: 20em;
}

button[type="submit"] {
    padding: 0.5em;
    font-size: 2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
