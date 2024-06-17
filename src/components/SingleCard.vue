
<script>
    import {store} from '../store.js'
    export default {
        data() {
            return {
                store,
            }
        },
        props : {
            card: {
                type: Object,
                required: true,
            }
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
        <p>
            {{ card.original_language}}
        </p>
        <p>
            {{ card.vote_average }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
</style>
