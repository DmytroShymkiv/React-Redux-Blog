import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts, fetchUserPosts } from "../../store/actions/postActions";
import Loading from "../Loading";
import PostCard from "./PostCard";

export default function Posts({ uid }) {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(uid ? fetchUserPosts(uid) : fetchAllPosts());
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="postContainer">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
