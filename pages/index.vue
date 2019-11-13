<template>
  <section>
    <div class="section grey">
      <div class="wrap-1140">
        <post-top-list />
      </div>
    </div>
  </section>
</template>

<script>
    import postTopList from "../components/postTopList";

    export default {
        components: {
            postTopList
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
  }
</style>
