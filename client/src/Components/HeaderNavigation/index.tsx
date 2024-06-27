import { Link } from "react-router-dom";
import { routes } from "../../shared/routeObject";

const HeaderNavigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.app.home} key="home">
              Home
            </Link>
          </li>
          <li>
            <Link to={routes.app.users} key="users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavigation;
