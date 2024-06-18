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
            this.generateImage();
            console.log(this.generateImage);
        }
}
</script>

<template>
    <article>
        <div class="copertina">
            <img :src="`https://image.tmdb.org/t/p/w500/${series.poster_path}`" style="width: 200px; height: 200px;" alt="">
        </div>
        <div class="info-card">
            <p>
                Titolo: {{ series.name }}
            </p>
            <p>
                Titolo originale: {{ series.original_name }}
            </p>
            <span> Lingua: <img :src="languageFlag" alt="" class="flag-image">
            </span>
            <p>
                Voto: <i v-for="(star, index) in (Math.ceil(series.vote_average / 2))" :key="index" class="fa-solid fa-star"></i>
            </p>
        </div>
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

    .flag-image {
        width: 50px;
        height: 30px;
    }

    .info-card {
        display: none;
    }

    .info-card:hover {
        display: flex;
        flex-direction: column;
    }

    .copertina:hover {
        display: none;
    }

    .copertina {
        display: inline-block;
    }
</style>
