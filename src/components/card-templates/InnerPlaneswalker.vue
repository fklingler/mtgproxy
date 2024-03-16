<script setup lang=ts>
import { ScryfallCard, ScryfallCardFace } from '../../scryfall'
import InnerBase from './InnerBase.vue'

defineProps<{
    face: ScryfallCard | ScryfallCardFace
}>()
</script>

<template>
    <InnerBase :face="face" />

    <p class="loyalty">{{ face.loyalty }}</p>
</template>
