import { useSelector } from "react-redux";

export default function UserWrapper({ children }) {
  const initialLoading = useSelector((state) => state.user.initialLoading);

  return <>{!initialLoading && children}</>;
}
