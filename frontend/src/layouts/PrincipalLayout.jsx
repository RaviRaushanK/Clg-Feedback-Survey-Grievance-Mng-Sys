import AppShell from "../components/common/AppShell";
import { principalNavItems } from "../routes/roleNavigation";

const PrincipalLayout = () => {
  return <AppShell roleName="Principal" navItems={principalNavItems} />;
};

export default PrincipalLayout;
