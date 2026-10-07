import AppShell from "../components/common/AppShell";
import { hodNavItems } from "../routes/roleNavigation";

const HodLayout = () => {
  return <AppShell roleName="HOD" navItems={hodNavItems} />;
};

export default HodLayout;
