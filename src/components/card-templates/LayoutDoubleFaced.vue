<script setup lang=ts>
import { defineProps } from 'vue'
import { ScryfallCard } from '../../scryfall'
import { cardInnerTemplate } from './index'
import CardError from './CardError.vue'

const props = defineProps<{
    card: ScryfallCard
}>()

// Card should have 2 faces in this layout.
const error = props.card.card_faces?.length != 2;
</script>

<template>
    <CardError v-if="error" :card="card" />

    <template v-else>
        <div class="card_frame">
            <div class="card_inner">
                <component :is="cardInnerTemplate(card.card_faces![0])" :face="card.card_faces![0]" />
            </div>
        </div>
        <div class="card_frame">
            <div class="card_inner">
                <component :is="cardInnerTemplate(card.card_faces![1])" :face="card.card_faces![1]" />
            </div>
        </div>
    </template>
</template>
