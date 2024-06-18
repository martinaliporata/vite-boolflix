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
            // perché non ho messo lo store?
                if (this.card.original_language === 'en') {
                    this.languageFlag = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s'
                } else if (this.card.original_language === 'fr') {
                    this.languageFlag= 'https://www.iconarchive.com/download/i109136/wikipedia/flags/FR-France-Flag.1024.png'
                } else if (this.card.original_language === 'es') {
                    this.languageFlag= 'https://icons.iconarchive.com/icons/wikipedia/flags/512/ES-Spain-Flag-icon.png'
                } else if (this.card.original_language === 'it')  {
                    this.languageFlag= 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png'
                } else {
                    this.languageFlag= 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
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
            <img :src="`https://image.tmdb.org/t/p/w500/${card.poster_path}`" alt="">
        </div>
        <div class="info-card">
            <p>
                Titolo: {{ card.title }}
            </p>
            <p>
                Titolo originale: {{ card.original_title }}
            </p>
            <span> Lingua: <img :src="languageFlag" alt="" class="flag-image">
            </span>
            <p>
                Voto: <i v-for="(star, index) in (Math.ceil(card.vote_average / 2))" :key="index" class="fa-solid fa-star"></i>
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
        width: 100%;
        position: relative;

        &:hover{
            .info-card{
                opacity: 1;
            }
            .copertina img{
                opacity: 0;
            }
        }

        .info-card {
            padding: 1rem;
        }
    }

    .flag-image {
        width: 50px;
        height: 30px;
    }

    .info-card {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.3s ease;
        }

    .copertina img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .5rem;
        transition: opacity 0.3s ease;
        opacity: 1;
    }
</style>
