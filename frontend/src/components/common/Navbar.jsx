const Navbar = ({ title, onMenuClick }) => {
  return (
    <header className="app-navbar">
      <button className="btn btn-icon d-lg-none" type="button" onClick={onMenuClick} aria-label="Open navigation">
        <i className="bi bi-list" aria-hidden="true"></i>
      </button>
      <div>
        <p className="navbar-eyebrow mb-0">Phase 1 Preview</p>
        <h1 className="navbar-title mb-0">{title}</h1>
      </div>
    </header>
  );
};

export default Navbar;
