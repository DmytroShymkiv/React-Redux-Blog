import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  signInWithEmail,
  signInWithGoogle,
} from "../store/actions/userActions";
import { ROUTES } from "../routes/routes";
import { Link, useHistory, useLocation } from "react-router-dom";
import UserForm from "../Components/User/UserForm";

export default function SignInPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    dispatch(signInWithEmail(email, password));
  };

  useEffect(() => {
    user && history.push(ROUTES.home);
    return () => dispatch(clearErrors());
  }, []);

  useEffect(() => {
    const { state } = location;
    const nextLocation = state && state.from ? state.from : ROUTES.home;
    user && history.push(nextLocation);
  }, [user]);


  return (
    <Container className="mt-5">
      <h1>Sign IN</h1>
      <UserForm handleSubmit={handleSubmit} />
      <Button
        className="mt-5 w-100"
        variant="outline-primary"
        onClick={() => dispatch(signInWithGoogle())}
      >
        Sign in with Google
      </Button>
      <Link to={ROUTES.signUP}>Don't have account ?</Link>
    </Container>
  );
}
