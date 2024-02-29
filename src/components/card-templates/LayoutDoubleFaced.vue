<script setup lang=ts>
import { defineProps } from 'vue'
import { ScryfallCard } from '../../scryfall'
import { cardInnerTemplate } from './index'
import CardError from './CardError.vue'
import { resultsConfig } from '../results-config';

const props = defineProps<{
    card: ScryfallCard
}>()

// Card should have 2 faces in this layout.
const error = props.card.card_faces?.length != 2;
</script>

<template>
    <CardError v-if="error" :card="card" />

    <template v-else>
        <template v-if="resultsConfig.doubleFacedOnTwoCards">
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
        <template v-else>
            <div class="card_frame">
                <div class="card_inner">
                    <div class="card_inner split_left">
                        <component :is="cardInnerTemplate(card.card_faces![0])" :face="card.card_faces![0]" />
                    </div>
                    <hr class="flip_divider">
                    <div class="card_inner split_right">
                        <component :is="cardInnerTemplate(card.card_faces![1])" :face="card.card_faces![1]" />
                    </div>
                </div>
            </div>
        </template>
    </template>
</template>
