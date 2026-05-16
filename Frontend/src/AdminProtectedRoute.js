import {
  Navigate
} from "react-router-dom";

function AdminProtectedRoute({

  children

}) {

  const token =
    localStorage.getItem(
      "token"
    );

  const isAdmin =
    localStorage.getItem(
      "isAdmin"
    );

  if (!token) {

    return <Navigate to="/auth" />;

  }

  if (isAdmin !== "true") {

    return <Navigate to="/" />;

  }

  return children;

}

export default
 AdminProtectedRoute;