import { NavLink } from "react-router";
import {
  FiGrid,
  FiPlusCircle,
  FiShoppingBag,
  FiSettings,
  FiPackage,
} from "react-icons/fi";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <FiPackage />
        </div>
        <span>OrderGap</span>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">MENU</p>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/new-order"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FiPlusCircle />
            <span>New Order</span>
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">MANAGEMENT</p>

        <div className="sidebar-link disabled-link">
          <FiShoppingBag />
          <span>All Orders</span>
          <small>Later</small>
        </div>

        <div className="sidebar-link disabled-link">
          <FiSettings />
          <span>Settings</span>
          <small>Later</small>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="profile-avatar">A</div>
        <div>
          <p className="profile-name">Admin</p>
          <p className="profile-role">Store Manager</p>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;