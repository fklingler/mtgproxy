<script setup lang=ts>
import { ref, watchEffect } from 'vue';
import { ScryfallCard, ScryfallError } from '../scryfall'
import { cardTemplate } from './card-templates/index'

const props = defineProps<{
    name: string,
    count: number
}>()

const loading = ref(true)
const card = ref<ScryfallCard | ScryfallError>()

watchEffect(onCleanup => fetchCard(onCleanup))

async function fetchCard(onCleanup: (cleanupFn: () => void) => void) {
    loading.value = true

    const abortController = new AbortController()

    onCleanup(() => abortController.abort())

    const response = await fetch(
        `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(props.name)}`,
        { signal: abortController.signal })

    card.value = await response.json()

    loading.value = false
}
</script>

<template>
    <template v-for="_ in count">
        <div v-if="loading" class="card_frame dont_print">
            <p class="loading">Loading...</p>
        </div>

        <div v-else-if="!card || card.object == 'error'" class="card_frame dont_print">
            <p class="card_not_found">Card "{{ name }}" not found.<br><br><i>This will not be printed.</i></p>
        </div>

        <component v-else :is="cardTemplate(card)" :card="card" />
    </template>
</template>

<style>
p {
    margin-top: 0mm;
    margin-bottom: 1mm;
}

* {
    box-sizing: border-box;
}
        
.card_frame {
    /* size of magic card is 63mm x 88mm
       proxy size is 60mm x 85mm
       0.5mm border included in this size
     */
    width: 60mm;
    height: 85mm;
    padding: 2mm;
    border: 0.5mm solid black;
    float: left;
    page-break-inside: avoid;
    overflow: hidden;
    
    font-size: 3.75mm;
    line-height: 100%;
    text-rendering: geometricPrecision;
}

@media print {
    .dont_print {
        display: none;
    }
}

.card_inner {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
}

.flip_bottom {
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}

.flip_divider {
    width: 100%;
}

.name {
    display: inline-block;
    font-weight: bold;
    width: fit-content;
}

.manacost {
    display: inline-block;
    text-align: right;
    margin-left: auto;
    align-self: flex-end;
}

.name_mana_line {
    margin-bottom: 1.5mm;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0 4px;
}

.oracle_div {
    font-size: 2.75mm;
    flex: 1 1 auto;
}

.hide_reminder_text .reminder_text {
    display: none;
}

.power_toughness {
    text-align: right;
}

.loyalty {
    text-align: right;
}
</style>
