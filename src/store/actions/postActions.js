import { postsRef, commentsRef } from "../../firebase";
import actionTypes from "../actionTypes/postTypes";
import uniqid from "uniqid";

const fetchPosts = (docs) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SET_LOADING });
    try {
      const posts = await docs;
      const postArray = [];
      posts.forEach((post) => postArray.push({ ...post.data(), id: post.id }));
      dispatch({ type: actionTypes.SET_POSTS, payload: postArray });
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, payload: error.message });
    }
  };
};

export const fetchUserPosts = (uid) =>
  fetchPosts(postsRef.where("authorID", "==", uid).get());

export const fetchAllPosts = () => fetchPosts(postsRef.get());

export const fetchPostByID = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SET_POST_LOADING });
    try {
      const post = await postsRef.doc(id).get();
      const postData = post.data();
      postData.id = post.id;
      postData.comments = await getComments(id);

      dispatch({ type: actionTypes.SET_POST, payload: postData });
    } catch (error) {
      dispatch({ type: actionTypes.SET_POST_ERROR, payload: error.message });
    }
  };
};
const getComments = async (postID) => {
  const commentsArray = [];
  const comments = await commentsRef.where("postID", "==", postID).get();
  comments.forEach((comment) =>
    commentsArray.push({ ...comment.data(), id: comment.id })
  );
  return commentsArray;
};
export const postComment = (comment) => {
  return async (dispatch) => {
    try {
      await commentsRef.doc(uniqid()).set(comment);
      dispatch({ type: actionTypes.ADD_COMMENT, payload: comment });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const savePost = async (post) => {
  try {
    await postsRef.doc(uniqid()).set(post);
  } catch (error) {
    alert(error.message);
  }
};
