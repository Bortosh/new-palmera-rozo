import { Outlet } from "react-router-dom";
import './styles.css'

function Layout() {
    return (
        <div>
          <Outlet />
        </div>
      );
}

export default Layout;
