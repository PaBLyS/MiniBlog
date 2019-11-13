<template>
  <section class="header">
    <div class="header__left">
      Mini Blog
    </div>
    <ul class="header__right">
      <li class="header__right-link">
        Home
      </li>
      <li class="header__right-link">
        Politics
      </li>
      <li class="header__right-link">
        Tech
      </li>
      <li class="header__right-link">
        Entertainment
      </li>
      <li class="header__right-link">
        Travel
      </li>
      <li class="header__right-link">
        Sports
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "customHeader"
    }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__left {
      font-size: 24px;
    }

    &__right {
      display: flex;
      align-items: center;

      &-link {
        padding: 10px;
        margin: 0;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        transition: color .2s ease-in;
        list-style: none;
        cursor: pointer;

        &:hover {
          color: #2f89fc;
        }
      }
    }
  }
</style>
