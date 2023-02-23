<template>
  <div v-if="blogs.length" class="container">
<div class="row">
  <div v-for="b in blogs" class="col-12 mb-5 border text-dark">
    <BlogCard :blog="b"/>
  </div>
</div>
  </div>
  
</template>

<script>
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { blogService } from '../services/BlogService'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';



export default {
    setup() {
        async function getBlogs() {
            try {
                await blogService.getBlogs();
            }
            catch (error) {
                Pop.error(error.message);
                logger.log(error);
            }
        }
        onMounted(() => {
            getBlogs();
        });
        return {
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
