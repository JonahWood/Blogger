<template>
    <div class="container-fluid">
<div class="row">
    <div class="col-12">
        <img :src="blogs.img" alt="">
    </div>
</div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { Blog } from '../models/Blog';

export default {
    props: {
        type: Blog,
        required: true
    },
    setup(){
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>