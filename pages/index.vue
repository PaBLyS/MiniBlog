<template>
  <section>
    <div class="section grey">
      <div class="wrap-1140">
        <post-top-list/>
      </div>
    </div>
    <div class="section">
      <div class="wrap-1140">
        <h2 class="section__label">Recent Posts</h2>
        <pagination-list/>
      </div>
    </div>
    <div class="section grey">
      <div class="wrap-1140">
        <post-bottom-list/>
      </div>
    </div>
  </section>
</template>

<script>
    import postTopList from "../components/postTopList";
    import paginationList from "../components/paginationList";
    import postBottomList from "../components/postBottomList";

    export default {
        components: {
            postTopList, paginationList, postBottomList
        }
    }
</script>

<style lang="scss" scoped>
  .section {
    width: 100%;

    &.grey {
      background-color: #f8f9fa;
    }

    & .wrap-1140 {
      max-width: 1140px;
      margin: 0 auto;
      padding: 80px 0;
    }

    &__label {
      line-height: 1.5;
      color: #000;
      font-size: 32px;
      font-weight: 500;
    }
  }
</style>
