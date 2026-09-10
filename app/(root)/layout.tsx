import DashboardShell from "../components/Dashboard-shell";
import { defaultFakeUser } from "../config/fake-users";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <DashboardShell initialRole={defaultFakeUser.role}>
      {children}
    </DashboardShell>
  );
};

export default DashboardLayout;
