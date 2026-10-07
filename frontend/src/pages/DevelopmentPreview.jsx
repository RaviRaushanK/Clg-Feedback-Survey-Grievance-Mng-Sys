import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertMessage from "../components/common/AlertMessage";
import LoadingSpinner from "../components/common/LoadingSpinner";
import EmptyState from "../components/common/EmptyState";
import { getHealthStatus } from "../services/healthService";

const previewLinks = [
  { label: "Preview Principal Dashboard", path: "/principal/dashboard", icon: "bi-person-workspace" },
  { label: "Preview HOD Dashboard", path: "/hod/dashboard", icon: "bi-person-badge" },
  { label: "Preview Faculty Dashboard", path: "/faculty/dashboard", icon: "bi-easel" },
  { label: "Preview Student Dashboard", path: "/student/dashboard", icon: "bi-mortarboard" },
];

const DevelopmentPreview = () => {
  const [healthState, setHealthState] = useState({ loading: true, message: "", error: "" });

  useEffect(() => {
    let isMounted = true;

    getHealthStatus()
      .then((data) => {
        if (isMounted) {
          setHealthState({ loading: false, message: data.message, error: "" });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setHealthState({ loading: false, message: "", error: error.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="preview-page">
      <section className="preview-hero">
        <span className="preview-kicker">Development preview</span>
        <h1>CampusVoice</h1>
        <p>Phase 1 foundation for a college feedback, survey and grievance management system.</p>
      </section>

      <section className="preview-grid" aria-label="Role dashboard previews">
        {previewLinks.map((link) => (
          <Link className="preview-link" to={link.path} key={link.path}>
            <i className={`bi ${link.icon}`} aria-hidden="true"></i>
            <span>{link.label}</span>
          </Link>
        ))}
      </section>

      <section className="preview-status" aria-label="Backend health status">
        {healthState.loading && <LoadingSpinner label="Checking API health" />}
        {healthState.message && <AlertMessage type="success" message={healthState.message} />}
        {healthState.error && (
          <EmptyState
            title="API health check unavailable"
            message="Start the backend and MongoDB to verify React to Express connectivity."
            icon="bi-plug"
          />
        )}
      </section>
    </main>
  );
};

export default DevelopmentPreview;
