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
            showChoiceMovies() {
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
            showChoiceSeries() {
                axios.get(store.searchInput=== '' ? 'https://api.themoviedb.org/3/discover/tv?api_key=dedeea6fbd3521d56b1b8006f2a2b656': `https://api.themoviedb.org/3/search/tv?api_key=dedeea6fbd3521d56b1b8006f2a2b656&query=${store.searchInput}`)
                .then((response) => {
                    this.store.series=response.data.results;
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
        <nav class="navbar">
            <input type="text" v-model="store.searchInput">
            <button @click="showChoiceMovies(); showChoiceSeries()">
                Invio
            </button>
        </nav>
    </header>
</template>

<style lang="scss">
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
    @use '../style/general.scss';

        header{
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div.navbar{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1b1b1b;

        img{
            height: 60px;
            margin: 0 3rem;
        }
    }

        ul{
            display: flex;
            align-items: center;
            list-style-type: none;
            
            li{
                margin-right: 1rem;
                color: rgb(195, 193, 193);

                &:hover{
                    color: red;
                }
            }
        }
</style>