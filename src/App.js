import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initial } from "./store/actions/userActions";
import UserWrapper from "./Components/User/UserWrapper";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initial());
  }, []);

  return (
    <UserWrapper>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </UserWrapper>
  );
}

export default App;
