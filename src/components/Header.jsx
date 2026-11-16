import { FiBell, FiSearch } from "react-icons/fi";
import { useLocation } from "react-router";

function Header() {
  const location = useLocation();

  const pageTitle =
    location.pathname === "/new-order" ? "Create New Order" : "Dashboard";

  return (
    <header className="top-header">
      <div>
        <h5 className="header-title">{pageTitle}</h5>
        <p className="header-subtitle">
          Manage and track your clothing orders
        </p>
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="header-icon-button"
          aria-label="Search"
          disabled
        >
          <FiSearch />
        </button>

        <button
          type="button"
          className="header-icon-button"
          aria-label="Notifications"
          disabled
        >
          <FiBell />
        </button>

        <div className="header-avatar">A</div>
      </div>
    </header>
  );
}

export default Header;