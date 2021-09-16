import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export default function PostCard({ post }) {
  return (
    <Link
      style={{ color: "black", textDecoration: "none" }}
      to={ROUTES.postWitOutParam + post.id}
    >
      <Card>
        <Card.Img variant="top" src={post.img} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.authorName}
          </Card.Subtitle>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
