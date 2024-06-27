import { Route, Routes } from "react-router-dom";
import { routes } from "../shared/routeObject";
import Users from "../Components/Users";
import UserComponent from "../Components/Users/UserComponent";

export const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path={routes.app.home} />
        <Route path={routes.app.users} Component={Users} />
        <Route path={routes.app.user} element={<UserComponent />} />
      </Routes>
    </>
  );
};
