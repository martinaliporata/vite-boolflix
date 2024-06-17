<script>
    import SingleCard from './SingleCard.vue';
    import axios from 'axios'
    import {store} from '../store.js'

    export default {
        components : {
            SingleCard
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
    },
    created () {
            this.getFilms();
            console.log(this.getFilms)
        }
}
</script>

<template>
    <main>
        <div v-for="(card, index) in store.cards" :key="index">
            <SingleCard :card="card"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
</style>