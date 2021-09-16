import Post from "../pages/PostPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { ROUTES } from "./routes";

const publicRoutes = [
  { path: ROUTES.home, exact: true, component: HomePage },
  { path: ROUTES.signIN, exact: false, component: SignInPage },
  { path: ROUTES.signUP, exact: false, component: SignUpPage },
  { path: ROUTES.post, exact: false, component: Post },
];

export default publicRoutes;
