export const state = () => ({
  posts: [],
  imgUrl: []
});

export const mutations = {
  loadPosts(state, posts) {
    posts.map((elem) => {
      state.posts.push(elem);
    })
  },
  loadImg(state, img) {
    img.forEach((elem) => {
      state.imgUrl.push(elem.url);
    });
  }
};

export const getters = {
  postsList(state) {
    return state.posts;
  },
  imgList(state) {
    return state.imgUrl;
  }
};

export const actions = {
  fetchPosts(context) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        context.commit('loadPosts', response)
      });
  },
  fetchImg(context) {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      .then((response) => {
        context.commit('loadImg', response)
      });
  }
};
