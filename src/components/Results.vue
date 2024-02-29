<script setup lang=ts>
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, RouteLocation } from 'vue-router'
import ResultsCard from './ResultsCard.vue'

type Cards = Array<{ name: string, count: number }>

const cards = ref<Cards>([])

getCardsFromQuery(useRoute())

// Make sure to reset cards list when manually changing URL query
onBeforeRouteUpdate((to, from) => {
    if (to.query.cards != from.query.cards) {
        getCardsFromQuery(to)
    }
})

function getCardsFromQuery(route: RouteLocation) {
    cards.value = splitCardsInput(route.query.cards?.toString() ?? '')
}

function splitCardsInput(input: string): Cards {
    // Foreach line in input
    return input.match(/[^\r\n]+/g)?.map(line => {
        // Match count and name of card
        const regex = /^((?<count>[\d]+)x?\s)?(?<name>.+)/gi
        const match = regex.exec(line.trim())

        if (!match?.groups) { return undefined }

        return {
            count: parseInt(match.groups.count ?? '1', 10),
            name: match.groups.name
        }
    }).filter(match => !!match) as Cards
}

</script>

<template>
    <ResultsCard v-for="card in cards" :name="card.name" :count="card.count"></ResultsCard>
</template>

<style>
@page {
    margin: 10mm;
    size: A4;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>
