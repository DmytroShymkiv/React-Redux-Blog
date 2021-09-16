import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../store/actions/postActions";
import { Card } from "react-bootstrap";

function CommentForm() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const post = useSelector((state) => state.posts.post);
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      postID: post.id,
      authorName: user.displayName,
      comment,
      date: new Date().toLocaleString(),
    };
    dispatch(postComment(commentToPost));
    setComment("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button className="mt-1 w-100" type="submit">
          Send
        </Button>
      </Form.Group>
    </Form>
  );
}

export default function Comments({ comments }) {
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const commentCards = comments.map((comment) => (
    <Card key={comment.id}>
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <footer className="blockquote-footer">
          {comment.authorName}, {comment.date}
        </footer>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      {user ? (
        <CommentForm />
      ) : (
        <span>
          Please
          <Link
            to={{
              pathname: ROUTES.signIN,
              state: { from: location },
            }}
          >
            sign in to leave comment
          </Link>
        </span>
      )}
      <div className="mt-3">{commentCards}</div>
    </>
  );
}
