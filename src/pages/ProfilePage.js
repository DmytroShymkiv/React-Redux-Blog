import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import avatar from "../images/avatar.png";
import Posts from "../Components/Posts/Posts";
import Button from "react-bootstrap/Button";

export default function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <Container fluid="md">
      <div className="d-flex align-items-center mt-5">
        <img className="user-img" src={user.photoURL || avatar} />
        <h1 className="mx-3">{user.displayName || user.email}</h1>
        <Link to={ROUTES.profileSettings}>
          <i
            style={{ fontSize: "50px" }}
            size="9px"
            className="fas fa-ellipsis-h"
          ></i>
        </Link>
      </div>

      <h1 className="mt-4">Posts</h1>
      <Link to={ROUTES.createPost}>
        <Button className="mb-3">Create Post</Button>
      </Link>
      <Posts uid={user.uid} />
    </Container>
  );
}
