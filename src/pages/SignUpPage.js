import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../routes/routes";
import { Link, useHistory, useLocation } from "react-router-dom";
import UserForm from "../Components/User/UserForm";
import { clearErrors, createUser } from "../store/actions/userActions";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    user && history.push(ROUTES.home);
    return () => dispatch(clearErrors());
  }, []);

  useEffect(() => {
    const { state } = location;
    const nextLocation = state && state.from ? state.from : ROUTES.home;
    user && history.push(nextLocation);
  }, [user]);

  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    dispatch(createUser(email, password));
  };

  return (
    <Container className="mt-5">
      <h1>Sign UP</h1>
      <UserForm handleSubmit={handleSubmit} />
      <Link to={ROUTES.signIN}>Already have an account?</Link>
    </Container>
  );
}
