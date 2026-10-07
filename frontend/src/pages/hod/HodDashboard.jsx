import DashboardPreview from "../DashboardPreview";

const stats = [
  { label: "Faculty", value: "-", icon: "bi-people" },
  { label: "Students", value: "-", icon: "bi-mortarboard" },
  { label: "Subjects", value: "-", icon: "bi-book" },
  { label: "Active Sessions", value: "-", icon: "bi-calendar-check" },
  { label: "Department Complaints", value: "-", icon: "bi-chat-left-text" },
  { label: "Average Feedback", value: "-", icon: "bi-clipboard-data" },
];

const HodDashboard = () => {
  return (
    <DashboardPreview
      title="HOD Dashboard"
      description="Department workspace preview for faculty, students, academic feedback and complaints."
      stats={stats}
      actions={["Manage faculty", "Review sessions", "Track complaints"]}
    />
  );
};

export default HodDashboard;
