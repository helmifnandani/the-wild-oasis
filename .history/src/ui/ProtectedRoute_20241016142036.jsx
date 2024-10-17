const ProtectedRoute = ({ children }) => {
  // 1. Load the authenticated user
  // 2. While loading, show a spinner
  // 3. If there is NO authentiacted user, redirect to /login page
  // 4. If there IS a user, render the app
  return <div>{children}</div>;
};

export default ProtectedRoute;
