import DashboardPreview from "../DashboardPreview";

const stats = [
  { label: "Active Sessions", value: "-", icon: "bi-calendar-check" },
  { label: "Pending Responses", value: "-", icon: "bi-hourglass-split" },
  { label: "Feedback Submitted", value: "-", icon: "bi-clipboard-check" },
  { label: "Open Complaints", value: "-", icon: "bi-chat-left-text" },
  { label: "Resolved Complaints", value: "-", icon: "bi-check-circle" },
];

const StudentDashboard = () => {
  return (
    <DashboardPreview
      title="Student Dashboard"
      description="Student workspace preview for feedback sessions, suggestions and complaint tracking."
      stats={stats}
      actions={["Give feedback", "Add suggestion", "Raise complaint"]}
    />
  );
};

export default StudentDashboard;
