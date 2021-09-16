import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  profileUpdate,
  saveToStorage,
  signOut,
} from "../store/actions/userActions";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Toast from "../Components/Toast";
import { Container } from "react-bootstrap";

export default function ProfileSettingsPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [name, setUserName] = useState(user.displayName);
  const [file, setFile] = useState();

  const handlePhotoChange = async () => {
    const url = await saveToStorage(file);
    url && profileUpdate("photoURL", url);
  };

  return (
    <Container>
      <Toast />
      <Form.Group>
        <Form.Label>UserName</Form.Label>
        <Form.Control
          onChange={(e) => setUserName(e.target.value)}
          value={name}
          placeholder="Change Username"
        />
      </Form.Group>
      <Button
        className="mt-2 d-block w-100"
        onClick={() => profileUpdate("displayName", name)}
      >
        Change Name
      </Button>

      <Form.Group>
        <Form.Label>User Photo</Form.Label>
        <Form.Control
          type="file"
          placeholder="Change Username"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>
      <Button className="mt-2 d-block w-100" onClick={handlePhotoChange}>
        Change Photo
      </Button>
      <Button className="mt-5 d-block w-100" onClick={() => dispatch(signOut())}>
        Exit
      </Button>
    </Container>
  );
}
