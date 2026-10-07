import DashboardPreview from "../DashboardPreview";

const stats = [
  { label: "Departments", value: "-", icon: "bi-building" },
  { label: "HODs", value: "-", icon: "bi-person-badge" },
  { label: "Faculty", value: "-", icon: "bi-people" },
  { label: "Students", value: "-", icon: "bi-mortarboard" },
  { label: "Open Complaints", value: "-", icon: "bi-chat-left-text" },
  { label: "Escalated Complaints", value: "-", icon: "bi-exclamation-triangle" },
];

const PrincipalDashboard = () => {
  return (
    <DashboardPreview
      title="Principal Dashboard"
      description="Institution-level workspace preview for oversight, departments, complaints and analytics."
      stats={stats}
      actions={["Review departments", "View complaints", "Open analytics"]}
    />
  );
};

export default PrincipalDashboard;
