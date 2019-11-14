<template>
  <div class="list">
    <div class="list__left">
      <div class="list__left-wrap">
        <post-bottom :postObj="posts[0]" :imgUrl="imgUrl[0]"/>
      </div>
      <div class="list__left-wrap list__left-wrap-bottom">
        <post-bottom :postObj="posts[1]" :imgUrl="imgUrl[1]"/>
        <post-bottom :postObj="posts[2]" :imgUrl="imgUrl[2]"/>
      </div>
    </div>
    <div class="list__right">
      <post-bottom :postObj="posts[3]" :imgUrl="imgUrl[3]" fluid/>
    </div>
  </div>
</template>

<script>
    import postBottom from "./postBottom";

    export default {
        name: "postBottomList",
        components: {
            postBottom
        },
        beforeCreate() {
            this.$store.dispatch('fetchPosts');
            this.$store.dispatch('fetchImg');
        },
        data() {
            return {}
        },
        computed: {
            posts() {
                return this.$store.getters.postsList
            },
            imgUrl() {
                return this.$store.getters.imgList
            }
        }
    }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    height: 100%;

    &__left {
      width: 60%;
      height: 100%;

      &-wrap {
        display: flex;

        &-bottom div{
          margin-bottom: 0;
        }
      }
    }

    &__right {
      min-height: 100%;
      width: 40%;
    }
  }
</style>
