
<script>
    import {store} from '../store.js'
    export default {
        data() {
            return {
                store,
                languageFlag: '',
            }
        },
        props : {
            card: {
                type: Object,
                required: true,
            }
        },
        methods: {
        generateImage() {
                const movies = this.store.cards;
                if (movies.original_language === 'en') {
                    this.languageFlag = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s'
                } else if (movies.original_language === 'fr') {
                    this.languageFlag= 'https://www.iconarchive.com/download/i109136/wikipedia/flags/FR-France-Flag.1024.png'
                } else if (movies.original_language === 'es') {
                    this.languageFlag= 'https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png'
                } else if (movies.original_language === 'it') {
                    this.languageFlag= 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png'
                }
            }
        },
        created() {
            this.generateImage();
        }
}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w500/${card.poster_path}`" style="width: 200px; height: 200px;" alt="">
        <p>
            {{ card.title }}
        </p>
        <p>
            {{ card.original_title }}
        </p>
        <img :src="languageFlag" alt="">
        <p>
            {{ card.vote_average }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
