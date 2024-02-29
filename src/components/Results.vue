<script setup lang=ts>
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, RouteLocation } from 'vue-router'
import { resultsConfig } from './results-config'
import ResultsCard from './ResultsCard.vue'
import ResultsConfig from './ResultsConfig.vue'

type Cards = Array<{ query: string, fuzzySearch: boolean, count: number }>

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
        const regex = /^((?<count>[\d]+)x?\s)?(?<queryMarker>\?)?(?<query>.+)/gi
        const match = regex.exec(line.trim())

        if (!match?.groups) { return undefined }

        return {
            count: parseInt(match.groups.count ?? '1', 10),
            query: match.groups.query,
            fuzzySearch: !match.groups.queryMarker
        }
    }).filter(match => !!match) as Cards
}
</script>

<template>
    <div class="config">
        <ResultsConfig />
    </div>

    <div
        :class="[resultsConfig.displayReminderText ? '' : 'hide_reminder_text']"
        :contenteditable="resultsConfig.editableContent">

        <ResultsCard v-for="card in cards" :query="card.query" :fuzzySearch="card.fuzzySearch" :count="card.count"></ResultsCard>
    </div>
</template>

<style>
@page {
    margin: 10mm;
    size: A4;
}

* {
    box-sizing: border-box;
}

.config {
    margin-bottom: 1em;
}

@media print {
    .config {
        display: none;
    }
}

body {
    margin: 0;
}
</style>
