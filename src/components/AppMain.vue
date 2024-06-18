<script>
    import SingleCardFilm from './SingleCardFilm.vue';
    import SingleCardSeries from './SingleCardSeries.vue'
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        components : {
            SingleCardFilm,
            SingleCardSeries,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            getFilms(){
                axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dedeea6fbd3521d56b1b8006f2a2b656')
                .then((response) => {
                    console.log(response.data.results);
                    this.store.cards=response.data.results;
                })
                .catch(function(error){
                    console.log(error);
                })
                .finally(function(){
                });
            },
            getSeries(){
                axios.get('https://api.themoviedb.org/3/discover/tv?api_key=dedeea6fbd3521d56b1b8006f2a2b656')
                .then((response) => {
                    console.log(response.data.results);
                    this.store.series=response.data.results;
                })
                .catch(function(error){
                    console.log(error);
                })
                .finally(function(){
                });
            },
            getStarMovieRate (MovieRate) {
                let stars = this.store.cards.vote_average;
                stars = Number.parseInt(MovieRate) / 2;
                return stars;
            },
            getStarSeriesRate (seriesRate) {
                let stars = this.store.series.vote_average;
                stars = Number.parseInt(seriesRate) / 2;
                return stars;
            }
            },
            created () {
                    this.getFilms();
                    console.log(this.getFilms);
                    this.getSeries();
                    console.log(this.getSeries)
                }
}
</script>

<template>
    <main>
        <div v-for="(card, index) in store.cards" :key="index" class="card-film" >
            <SingleCardFilm :card="card"/>
        </div>
        <div v-for="(card, index) in store.series" :key="index" class="card-tv-series">
            <SingleCardSeries :series="card"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
    @use '../style/general.scss';

    main{
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 2rem;
    }
</style>
