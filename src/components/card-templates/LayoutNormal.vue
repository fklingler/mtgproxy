<script setup lang=ts>
import { defineProps } from 'vue'
import { ScryfallCard } from '../../scryfall'
import { cardInnerTemplate } from './index'

defineProps<{
    card: ScryfallCard
}>()
</script>

<template>
    <div class="card_frame">
        <div class="card_inner">
            <component :is="cardInnerTemplate(card)" :face="card" />
        </div>
    </div>
</template>
