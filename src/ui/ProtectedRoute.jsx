import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load the authenticated user
  const { isAuthenticated, isPending, fetchStatus } = useUser();

  // 3. If there is NO authenticated user, redirect to the login page
  useEffect(() => {
    if (!isPending && !isAuthenticated && fetchStatus !== "fetching")
      navigate("/login");
  }, [isAuthenticated, isPending, navigate, fetchStatus]);

  // 2. While loading, show a spinner
  if (isPending) {
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  }

  // 4. If there is an authenticated user, show the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
