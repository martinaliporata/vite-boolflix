<script>
    import {store} from '../store'
    export default {
        data() {
            return {
                store,
                languageFlag: '',
            }
        },
        props : {
            series: {
                type: Object,
                required: true,
            }
        },
        methods: {
        getMovieImg () {
            return `'https://image.tmdb.org/t/p/w342' ${store.series.poster_path}`;
        },
        generateImage() {
            // perché non ho messo lo store?
                if (this.series.original_language === 'en') {
                    this.languageFlag = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s'
                } else if (this.series.original_language === 'fr') {
                    this.languageFlag = 'https://www.iconarchive.com/download/i109136/wikipedia/flags/FR-France-Flag.1024.png'
                } else if (this.series.original_language === 'es') {
                    this.languageFlag = 'https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png'
                } else if (this.series.original_language === 'it')  {
                    this.languageFlag = 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png'
                } else {
                    this.languageFlag = 'Unknown'
                }
            }
        },
        created() {
            this.getMovieImg();
            console.log(this.getMovieImg)
            this.generateImage();
            console.log(this.generateImage);
        }
}
</script>

<template>
    <article>
        <img :src="`https://image.tmdb.org/t/p/w500/${series.poster_path}`" style="width: 200px; height: 200px;" alt="">
        <p>
            {{ series.name }}
        </p>
        <p>
            {{ series.original_name }}
        </p>
        <img :src="languageFlag" alt="">
        <p>
            <i v-for="(star, index) in (Math.ceil(series.vote_average / 2))" :key="index" class="fa-solid fa-star"></i>
        </p>
        <img class="movie-image" :src="getMovieImg" alt="">
    </article>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss';

    article{
        border: 1px solid red;
        border-radius: .5rem;
        margin-bottom: 1rem;
        padding: 1rem;
    }
</style>
