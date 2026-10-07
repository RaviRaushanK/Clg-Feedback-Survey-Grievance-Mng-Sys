import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AppShell = ({ roleName, navItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar
        brand={roleName}
        navItems={navItems}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="app-content">
        <Navbar title={`${roleName} Dashboard`} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="main-content" tabIndex="-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppShell;
