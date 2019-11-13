<template>
  <div class="list">
    <div class="list-col">
      <post-top :postObj="posts[0]" :imgUrl="imgUrl[0]" />
      <post-top :postObj="posts[1]" :imgUrl="imgUrl[1]"/>
    </div>
    <div class="list-col">
      <post-top :postObj="posts[2]" :imgUrl="imgUrl[2]" fluid>
        <div class="msg msg-red">travel</div>
        <div class="msg msg-blue">food</div>
      </post-top>
    </div>
    <div class="list-col">
      <post-top :postObj="posts[3]" :imgUrl="imgUrl[3]"/>
      <post-top :postObj="posts[4]" :imgUrl="imgUrl[4]"/>
    </div>
  </div>
</template>

<script>
    import postTop from "./postTop";

    export default {
        name: "postTopList",
        components: {
            postTop
        },
        beforeCreate() {
            this.$store.dispatch('fetchPosts');
            this.$store.dispatch('fetchImg');
        },
        data() {
            return {

            }
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
    height: 430px;

    &-col {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     }
  }
</style>
