import { useStore } from "../stores/store";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute() {
    const{userStore: {isLoggedIn}} = useStore();
    const location = useLocation(); // <-- get current location being accessed
  
    return isLoggedIn
      ? <Outlet />
      : (
        <Navigate
          to={'/'}
          state={{ from: location }} // <-- pass in route state
          replace
        />
      );
  };