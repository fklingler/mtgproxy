<script setup lang="ts">
import { resultsConfig } from './results-config'
</script>

<template>
    <div class="config">
        <label><input type="checkbox" v-model="resultsConfig.displayReminderText" /> Display reminder text</label>
        <label><input type="checkbox" v-model="resultsConfig.editableContent" /> Manually edit content</label>
        <label><input type="checkbox" v-model="resultsConfig.doubleFacedOnTwoCards" /> Display double faced cards on two cards</label>
    </div>
</template>

<style scoped>

.config {
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
}
</style>
