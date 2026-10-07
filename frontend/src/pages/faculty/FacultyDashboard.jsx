import DashboardPreview from "../DashboardPreview";

const stats = [
  { label: "Assigned Subjects", value: "-", icon: "bi-book" },
  { label: "Active Sessions", value: "-", icon: "bi-calendar-check" },
  { label: "Responses", value: "-", icon: "bi-chat-dots" },
  { label: "Feedback", value: "-", icon: "bi-clipboard-check" },
  { label: "Suggestions", value: "-", icon: "bi-lightbulb" },
  { label: "Open Issues", value: "-", icon: "bi-exclamation-circle" },
];

const FacultyDashboard = () => {
  return (
    <DashboardPreview
      title="Faculty Dashboard"
      description="Faculty workspace preview for assigned subjects, feedback sessions, suggestions and issues."
      stats={stats}
      actions={["View subjects", "Open sessions", "Review issues"]}
    />
  );
};

export default FacultyDashboard;
