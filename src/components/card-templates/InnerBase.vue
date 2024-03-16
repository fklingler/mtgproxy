<script setup lang=ts>
import { ScryfallCard, ScryfallCardFace } from '../../scryfall'

defineProps<{
    face: ScryfallCard | ScryfallCardFace
}>()

function manaCost(manaCost: string) {
    return (manaCost.match(/{.*?}/g) ?? []).map(part => {
        if (part.length > 3) { return part }
        return part.replace('{', '').replace('}', '')
    }).join('<wbr>')
}

function oracleText(oracleText: string) {
    return oracleText.split('\n').map(line => `
        <p class="oracle_p">
            ${line.replace('(', '<i class="reminder_text">(').replace(')', ')</i>')}
        </p>
    `).join('')
}
</script>

<template>
    <div class="name_mana_line">
        <p class="name">{{ face.name }}</p>
        <p class="manacost" v-html="manaCost(face.mana_cost ?? '')"></p>
    </div>
    <p class="typeline">{{ face.type_line }}</p>
    <div class="oracle_div" v-html="oracleText(face.oracle_text ?? '')"></div>
</template>
