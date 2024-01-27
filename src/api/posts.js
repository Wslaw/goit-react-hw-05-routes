import axios from "axios";

// const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  // params: {
  //     key: "a5e80a241b45048d42e42bcf67dfe2f1",
  //     image_type: "photo",
  //     orientation: "horizontal"
  // }
});

export const getAllPosts = ()=> {
    return instance.get("/");
}

export const getPostsById = (id) => {
  return instance.get(`/${id}`);
};


export const searchPosts = (q, _page = 1) => {
    // return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
    return instance.get("/", {
        params: {
            q,
            _limit: 6,
            _page,
        }
    })
}

export const getComentsByPostId = id => {
  return instance.get(`/${id}/comments`);
}