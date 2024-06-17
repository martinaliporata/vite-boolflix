<script>
    import axios from 'axios';
    import {store} from '../store.js'

    export default {
        data() {
            return {
                store,
                navbar: [
                    {
                        name: 'Home',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'Serie TV',
                        link: '#',
                        active: true,
                    },
                    {
                        name: 'Film',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'Originali',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'Aggiunti di recente',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'La mia lista',
                        link: '#',
                        active: false,
                    }
                ],
            }
        },
        methods: {
            showChoiceSeries() {
                axios.get(store.searchInput=== '' ? 'https://api.themoviedb.org/3/discover/movie?api_key=dedeea6fbd3521d56b1b8006f2a2b656' : `https://api.themoviedb.org/3/search/movie?api_key=dedeea6fbd3521d56b1b8006f2a2b656&query=${store.searchInput}`)
                .then((response) => {
                    this.store.cards=response.data.results;
                    console.log(response)
                })
                .catch(function(error){
                    console.log(error);
                })
                .finally(function(){
                });
            },
            showChoiceTv() {
                axios.get(store.searchInput=== '' ? 'https://api.themoviedb.org/3/discover/tv?api_key=dedeea6fbd3521d56b1b8006f2a2b656': `https://api.themoviedb.org/3/search/tv??api_key=dedeea6fbd3521d56b1b8006f2a2b656&query=${store.searchInput}`)
                .then((response) => {
                    this.store.cards=response.data.results;
                    console.log(response)
                })
                .catch(function(error){
                    console.log(error);
                })
                .finally(function(){
                });
            }
        }
    }
</script>

<template>
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" width="50" height="24" >
        <nav>
            <ul>
                <li v-for="(element,index) in navbar" :key="index">
                    {{ element.name }}
                </li>
            </ul>
        </nav>
        <nav class="navbar navbar-light bg-light">
            <input type="text" v-model="store.searchInput">
            <button @click="showChoiceSeries(); showChoiceTv()">
                Invio
            </button>
        </nav>
    </header>
</template>

<style lang="scss">
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
    
</style>