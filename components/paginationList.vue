<template>
  <div class="list">
    <pagination-elem v-for="(elem, index) in visibleArr"
                     :key="index"
                     :postElem="elem"
                     :imgUrl="imgUrl[index]"/>
    <div class="pagination">
      <div><<</div>
      <div @click="list--"><</div>
      <div>{{list}}</div>
      <div @click="list++">></div>
      <div>>></div>
    </div>
  </div>
</template>

<script>
    import paginationElem from "./paginationElem";

    export default {
        name: "paginationList",
        components: {
            paginationElem
        },
        beforeCreate() {
            this.$store.dispatch('fetchPosts');
            this.$store.dispatch('fetchImg');
        },
        data() {
            return {
                list: 1
            }
        },
        computed: {
            posts() {
                return this.$store.getters.postsList
            },
            imgUrl() {
                return this.$store.getters.imgList
            },
            visibleArr() {
                if (typeof this.posts !== 'undefined') {
                    let arr = [...this.posts];
                    return arr.splice((this.list - 1) * 10, 10);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .pagination {
    width: 100%;
  }
</style>
