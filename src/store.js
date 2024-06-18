import { reactive } from "vue";
export const store = reactive({
    searchInput: '',
    cards: [],
    series: [],
    languageFlags:["it", "en", "es", "de"]
})