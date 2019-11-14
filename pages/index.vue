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
    <div class="section">
      <div class="wrap-480">
        <div class="sub">
          <h2 class="sub__label">Subscribe to our newsletter</h2>
          <p class="sub__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a
            explicabo, ipsam
            nostrum.</p>
          <div class="sub__form">
            <input :class="validInput"
                   type="text"
                   placeholder="Enter your email address"
                   v-model="email"
            >
            <input
              class="sub__form-submit" type="submit" value="Subscribe">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import postTopList from "../components/postTopList";
    import paginationList from "../components/paginationList";
    import postBottomList from "../components/postBottomList";
    import isJS from 'is_js';

    export default {
        components: {
            postTopList, paginationList, postBottomList
        },
        data() {
            return {
                email: null
            }
        },
        computed: {
            validInput() {
                return {
                    'sub__form-input': true,
                    novalid: !this.validEmail
                }
            },
            validEmail() {
                return isJS.email(this.email);
            }
        }
    }
</script>

<style lang="scss" scoped>
  .section {
    width: 100%;

    &.grey {
      background-color: #f8f9fa;
    }

    .wrap-1140 {
      max-width: 1140px;
      margin: 0 auto;
      padding: 80px 0;
    }

    .wrap-480 {
      max-width: 480px;
      margin: 0 auto;
      padding: 80px 0;
    }

    &__label {
      line-height: 1.5;
      color: #000;
      font-size: 32px;
      font-weight: 500;
    }

    .sub {
      text-align: center;

      &__label {
        font-size: 20px;
        line-height: 1.5;
      }

      &__content {
        line-height: 1.7;
        color: gray;
        font-weight: 300;
        font-size: 16px;
      }

      &__form {
        display: flex;
        height: 43px;
        width: 100%;

        &-input {
          height: 100%;
          box-sizing: border-box;
          width: 100%;
          padding: 6px 12px;
        }

        &-submit {
          height: 100%;
          color: #fff;
          font-size: 16px;
          background-color: #2f89fc;
          border: none;
          font-weight: 400;
          box-sizing: border-box;
          text-align: center;
        }

        .novalid {
          color: #f23a2e;
        }
      }
    }
  }

  @media only screen and (min-width: 650px) and (max-width: 1141px) {
    .section {
      .wrap-1140 {
        width: 630px;
        padding: 30px 0;
      }


    }
  }

  @media only screen and (max-width: 651px) {
    .section {
      .wrap-1140 {
        width: 350px;
        padding: 30px 0;
      }


    }
  }
</style>
