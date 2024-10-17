import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. While loading, show a spinner
  if (isLoading) return <Spinner />;
  // 3. If there is NO authentiacted user, redirect to /login page
  // 4. If there IS a user, render the app
  return <div>{children}</div>;
};

export default ProtectedRoute;
