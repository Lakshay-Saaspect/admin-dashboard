import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { routes } from "../constants/routes";

const Routing = () => {
  let isLoggedIn = true;

  const PrivateRoute = ({ ChildComponent }) => {
    return isLoggedIn ? <ChildComponent /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          let { path, Component, isPublic, exact } = route;
          return (
            <Route
              key={index}
              exact={exact}
              path={path}
              element={
                isPublic ? (
                  <Component />
                ) : (
                  <PrivateRoute ChildComponent={Component} />
                )
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
