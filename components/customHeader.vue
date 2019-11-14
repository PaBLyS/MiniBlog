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
    <div class="menu" @click="showMenu = !showMenu">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px"
           viewBox="0 0 124 124" style="enable-background:new 0 0 124 124;" xml:space="preserve">
        <g>
          <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
          <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
          <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
        </g>
      </svg>
    </div>
    <div :class="classMenu">
      <div class="close">
        <div @click="showMenu = true">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px"
               viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;"
               xml:space="preserve">
            <g>
              <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/>
            </g>
          </svg>
        </div>
      </div>
      <NuxtLink class="link" to="/politics">Home</NuxtLink>
      <NuxtLink class="link" to="/politics">Politics</NuxtLink>
      <NuxtLink class="link" to="/politics">Tech</NuxtLink>
      <NuxtLink class="link" to="/politics">Entertainment</NuxtLink>
      <NuxtLink class="link" to="/politics">Travel</NuxtLink>
      <NuxtLink class="link" to="/politics">Sports</NuxtLink>
    </div>
  </section>
</template>

<script>
    export default {
        name: "customHeader",
        data() {
            return {
                showMenu: true
            }
        },
        computed: {
            classMenu() {
                return {
                    'menu__list': true,
                    'close-menu': this.showMenu
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .header {
    height: 75px;
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

  .menu {
    display: none;

    svg {
      margin-right: 10px;
      height: 30px;
      width: 30px;
    }

    &__list {
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 10px;
      margin: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      transform: translateX(0);
      transition: transform .3s;

      .close {
        div {
          display: flex;
          justify-content: flex-end;
          margin: 20px;

          svg {
            height: 20px;
            width: 20px;
          }
        }
      }

      .link {
        color: #000;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        transition: color .2s ease-in;
        padding: 10px 20px;

        &:hover {
          color: #2f89fc;
        }
      }
    }
  }
  .close-menu {
    transform: translateX(100%);
  }

  @media only screen and (max-width: 1141px) {
    .header__right {
      display: none;
    }
    .menu {
      display: block;
    }
  }
</style>
