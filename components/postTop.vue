<template>
  <div :class="cardClass"
       :style="'background-image: url(' + imgUrl + ')'">
    <p class="msg-wrap">
      <slot></slot>
    </p>
    <p>{{postTitle}}</p>
  </div>
</template>

<script>
    export default {
        name: "postTop",
        props: {
            postObj: Object,
            imgUrl: String,
            fluid: Boolean
        },
        computed: {
            postTitle() {
                if (typeof this.postObj !== 'undefined') {
                    return this.postObj.title
                }
            },
            cardClass() {
                return {
                    card: true,
                    cardfluid: this.fluid
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 5px;
    min-height: 200px;
    margin-bottom: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    cursor: pointer;

    p {
      margin: 8px 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &fluid {
      height: 100%;
      background-size: auto 100%;
    }

    .msg {
      padding: 2px 10px;
      border-radius: 4px;
      line-height: 12px;
      color: #fff;
      font-weight: 700;
      font-size: 10px;
      text-transform: uppercase;

      &-wrap {
        display: flex;

        div {
          margin: 5px 5px 5px 0;
        }
      }

      &-red {
        background-color: #f23a2e;
      }

      &-blue {
        background-color: #2f89fc;
      }
    }
  }
</style>
