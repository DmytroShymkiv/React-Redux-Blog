import CreatePostPage from "../pages/CreatePostPage";
import ProfilePage from "../pages/ProfilePage";
import ProfileSettingsPage from "../pages/ProfileSettingsPage";
import { ROUTES } from "./routes";

const privateRoutes = [
  { path: ROUTES.profile, exact: true, component: <ProfilePage /> },
  {
    path: ROUTES.profileSettings,
    exact: true,
    component: <ProfileSettingsPage />,
  },
  { path: ROUTES.createPost, exact: false, component: <CreatePostPage /> },
];

export default privateRoutes;
