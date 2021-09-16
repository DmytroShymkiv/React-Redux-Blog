import React from "react";
import { Container } from "react-bootstrap";
import Posts from "../Components/Posts/Posts";

export default function HomePage() {
  return (
    <Container>
      <h1>All posts</h1>
      <Posts />
    </Container>
  );
}
