import { NavLink } from "react-router-dom";

const Sidebar = ({ brand, navItems, isOpen, onClose }) => {
  return (
    <>
      <aside className={`app-sidebar ${isOpen ? "is-open" : ""}`} aria-label={`${brand} navigation`}>
        <div className="sidebar-brand">
          <span className="brand-mark" aria-hidden="true">
            CV
          </span>
          <div>
            <p className="brand-title mb-0">CampusVoice</p>
            <span>{brand}</span>
          </div>
          <button className="btn btn-icon d-lg-none ms-auto" type="button" onClick={onClose} aria-label="Close navigation">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.path} className="sidebar-link" onClick={onClose}>
              <i className={`bi ${item.icon}`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      {isOpen && <button className="sidebar-backdrop d-lg-none" type="button" aria-label="Close navigation" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
