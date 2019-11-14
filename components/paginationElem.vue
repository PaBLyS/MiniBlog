<template>
  <div class="elem">
    <div>
      <div class="elem__img-wrap">
        <img :src="imgUrl" class="elem__img">
      </div>
      <div class="elem__info">
        <p>
          <slot></slot>
        </p>
        <h2 class="elem__info-title">{{postTitle}}</h2>
        <div class="elem__info-by">
          <div class="elem__info-img-wrap">
            <img :src="imgUrl" class="elem__info-img">
          </div>
          <span class="elem__info-by-span">By </span> user id {{postId}}
        </div>
        <P class="elem__info-body">{{postBody}}</P>
      </div>
    </div>
    <a href="/" class="elem__link">Read More</a>
  </div>
</template>

<script>
    export default {
        name: "paginationElem",
        props: {
            postElem: Object,
            imgUrl: String
        },
        data() {
            return {}
        },
        computed: {
            postTitle() {
                if (typeof this.postElem !== 'undefined') {
                    let temp = this.postElem.title;
                    return temp.length > 30 ? temp.substr(0, 30) + '...' : temp
                }
            },
            postBody() {
                if (typeof this.postElem !== 'undefined') {
                    let temp = this.postElem.body;
                    return temp.length > 120 ? temp.substr(0, 120) + '...' : temp
                }
            },
            postId() {
                if (typeof this.postElem !== 'undefined') {
                    return this.postElem.id
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
  .elem {
    width: 30%;
    min-height: 600px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;

      &-wrap {
        width: 100%;
        height: 250px;
      }
    }

    &__info {
      padding: 0 20px;
      font-size: 13px;

      &-by {
        display: flex;
        align-items: center;

        &-span {
          color: #b3b3b3;
          font-size: 13px;
          font-weight: 300;
          margin: 0 5px 0 10px;
        }
      }

      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;

        &-wrap {
          width: 30px;
          height: 30px;
        }
      }

      &-title {
        color: #000;
        cursor: pointer;
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: 700;
        line-height: 1.5;
      }

      &-body {
        line-height: 1.7;
        color: gray;
        font-weight: 300;
        font-size: 16px;
        color: #666;
      }
    }

    &__link {
      margin: 0 20px;
      color: #2f89fc;
      text-decoration: none;
      font-weight: 300;
      font-size: 16px;
    }
  }
</style>
