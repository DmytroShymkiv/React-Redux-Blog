import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/Loading";
import { fetchPostByID } from "../store/actions/postActions";
import { Container } from "react-bootstrap";
import parse from "html-react-parser";
import Comments from "../Components/Comments/Comments";

export default function PostPage() {
  const { id } = useParams();
  const { post, postLoading, postError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostByID(id));
  }, []);

  if (postLoading) return <Loading />;
  if (postError) return <h1>{postError}</h1>;

  return (
    <Container fluid="md">
      <img src={post.img} className="post-img" />
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <div>{parse(post.content)}</div>
      <p>Author: {post.authorName}</p>
      <h1>Comments</h1>
      <Comments comments={post.comments} />
    </Container>
  );
}
