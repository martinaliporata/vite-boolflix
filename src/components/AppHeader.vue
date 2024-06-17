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
                ]
            }
        },
        methods: {
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
    </header>
</template>

<style lang="scss">
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
</style>