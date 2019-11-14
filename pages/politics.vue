<template>
  <section class="section">
    <div class="section__grey">
      <div class="wrap-1140">
        <h4 class="category">Category</h4>
        <h3 class="label">Sports</h3>
        <p class="content">Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo,
          officiis non maxime quos reiciendis perferendis doloremque maiores!</p>
      </div>
    </div>
    <div class="wrap-1140">
      <pagination-list />
    </div>
  </section>
</template>

<script>
  import paginationList from "../components/paginationList";

    export default {
        name: "politics",
        components: {
            paginationList
        }
    }
</script>

<style lang="scss" scoped>
  .section {
    padding-bottom: 80px;

    &__grey {
      background-color: #f8f9fa;
      padding: 40px 0;
    }

    .wrap-1140 {
      width: 1140px;
      margin: 0 auto;

      &:nth-child(2) {
        padding-top: 80px;
      }

      .category {
        line-height: 1.7;
        color: gray;
        font-weight: 300;
        font-size: 16px;
      }

      .label {
        line-height: 1.5;
        color: #000;
        font-size: 28px;
        font-weight: 500;
        margin: 0;
      }

      .content {
        width: 50%;
        line-height: 1.7;
        color: gray;
        font-weight: 300;
        font-size: 16px;
      }

    }
  }
</style>
