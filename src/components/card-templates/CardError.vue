<script setup lang=ts>
import { ScryfallCard } from '../../scryfall'

defineProps<{
    card: ScryfallCard
}>()
</script>

<template>
    <div class="card_frame dont_print">
        <p class="error">
            An error occurred while generating the proxy for the card "{{ card.name }}".<br><br>
            This may be because the card type is not supported.<br><br>
            If you think this should work, please add an issue on the
            <a href="https://github.com/fklingler/mtgproxy">Github Repository</a> of this website, or
            contact <a href="https://twitter.com/fklingler">@fklingler</a>.<br><br>
            <i>This will not be printed.</i>
        </p>
    </div>
</template>
