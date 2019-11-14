<template>
  <div class="list">
    <pagination-elem v-for="(elem, index) in visibleArr"
                     :key="index"
                     :postElem="elem"
                     :imgUrl="imgUrl[index]"/>
    <div class="pagination">
      <button @click="list = 1">
        <img class="pagination_btn" src="rewind.png">
      </button>
      <button @click="list--">
        <img class="pagination_btn-one" src="rewind-one.png">
      </button>
      <div class="pagination-list">{{list}}</div>
      <button @click="list++">
        <img class="pagination_btn-one" src="rewind-one-next.png">
      </button>
      <button @click="list = pagesAll">
        <img class="pagination_btn" src="rewind-next.png">
      </button>
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
                list: 1,
                pages: 1
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
            },
            pagesAll() {
                return 10
            }
        },
        watch: {
            list: function (val) {
                if (val < 1) this.list = 1;
                if (val > this.pagesAll) this.list = this.pagesAll;
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
    display: flex;
    justify-content: center;
    align-items: center;

    &-list {
      margin: 0 10px;
      font-weight: bold;
    }

    button{
      border-radius: 100%;
      border: none;
      background: none;
      height: 30px;
      width: 30px;
      background: #2f89fc;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;

      &:active, &:focus{
        outline: none;
      }

      .pagination_btn {
        height: 100%;
        width: 100%;
        object-fit: contain;

        &-one {
          height: 65%;
          width: 65%;
        }
      }
    }
  }
</style>
