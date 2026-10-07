import AppShell from "../components/common/AppShell";
import { facultyNavItems } from "../routes/roleNavigation";

const FacultyLayout = () => {
  return <AppShell roleName="Faculty" navItems={facultyNavItems} />;
};

export default FacultyLayout;
