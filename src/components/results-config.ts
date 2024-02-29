import { reactive, watch } from 'vue'

type ResultsConfig = {
    editableContent: boolean,
    displayReminderText: boolean,
    doubleFacedOnTwoCards: boolean
}

const defaultResultsConfig: ResultsConfig = {
    editableContent: false,
    displayReminderText: true,
    doubleFacedOnTwoCards: true
}

export const resultsConfig = reactive(defaultResultsConfig)

// Load from local storage on start
loadConfigFromLocalStorage()

// Store in local storage when config changes
watch(resultsConfig, config => {
    localStorage.setItem('resultsConfig', JSON.stringify(config))
})

function loadConfigFromLocalStorage() {
    const storedRawConfig = localStorage.getItem('resultsConfig')

    if (storedRawConfig) {
        const storedConfig = JSON.parse(storedRawConfig)

        if (storedConfig.editableContent !== undefined) {
            resultsConfig.editableContent = storedConfig.editableContent
        }
        if (storedConfig.displayReminderText !== undefined) {
            resultsConfig.displayReminderText = storedConfig.displayReminderText
        }
        if (storedConfig.doubleFacedOnTwoCards !== undefined) {
            resultsConfig.doubleFacedOnTwoCards = storedConfig.doubleFacedOnTwoCards
        }
    }
}
