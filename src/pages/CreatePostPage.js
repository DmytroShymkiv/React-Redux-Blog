import Button from "react-bootstrap/Button";
import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TextEditor from "../Components/TextEditor";
import { saveToStorage } from "../store/actions/userActions";
import { savePost } from "../store/actions/postActions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ROUTES } from "../routes/routes";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainImg, setMainImg] = useState();
  const editorRef = useRef();

  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  const handleClick = async () => {
    const content = editorRef.current.getHTML();
    const img = await saveToStorage(mainImg);
    const post = {
      title,
      description,
      content,
      img,
      authorID: user.uid,
      authorName: user.displayName,
    };
    await savePost(post);
    history.push(ROUTES.home);
  };

  return (
    <Container>
      <h1 className="mt-4">Create Post</h1>
      <Form>
        <Form.Group className="mt-4">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Main Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setMainImg(e.target.files[0])}
          />
        </Form.Group>
        <Form.Label className="mt-4">Post</Form.Label>
        <TextEditor ref={editorRef} />
        <Button className="mt-2 d-block w-100" onClick={handleClick}>
          Create Post
        </Button>
      </Form>
    </Container>
  );
}
