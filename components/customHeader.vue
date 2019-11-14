<template>
  <section class="header">
    <div class="header__left">
      <NuxtLink class="link" to="/">Mini Blog</NuxtLink>
    </div>
    <ul class="header__right">
      <li class="header__right-link">
        <NuxtLink class="link" to="/">Home</NuxtLink>
      </li>
      <li class="header__right-link">
        <NuxtLink class="link" to="/politics">Politics</NuxtLink>
      </li>
      <li class="header__right-link">
        <NuxtLink class="link" to="/politics">Tech</NuxtLink>
      </li>
      <li class="header__right-link">
        <NuxtLink class="link" to="/politics">Entertainment</NuxtLink>
      </li>
      <li class="header__right-link">
        <NuxtLink class="link" to="/politics">Travel</NuxtLink>
      </li>
      <li class="header__right-link">
        <NuxtLink class="link" to="/politics">Sports</NuxtLink>
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
    padding: 0 10px;

    &__left {
      font-size: 24px;

      .link {
        color: #000;
        text-decoration: none;
        transition: color .2s ease-in;

        &:hover {
          color: #2f89fc;
        }

      }
    }

    &__right {
      display: flex;
      align-items: center;

      &-link {
        padding: 10px;
        margin: 0;
        list-style: none;
        cursor: pointer;

        .link {
          color: #000;
          font-weight: 700;
          text-decoration: none;
          transition: color .2s ease-in;

          &:hover {
            color: #2f89fc;
          }

        }
      }
    }
  }
</style>
