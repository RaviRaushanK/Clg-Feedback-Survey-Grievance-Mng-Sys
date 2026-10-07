import AppShell from "../components/common/AppShell";
import { studentNavItems } from "../routes/roleNavigation";

const StudentLayout = () => {
  return <AppShell roleName="Student" navItems={studentNavItems} />;
};

export default StudentLayout;
