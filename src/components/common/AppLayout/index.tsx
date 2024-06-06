import Routes from "routes";
import { useAppSelector } from "hooks/useStore";
import DashboardLayout from "./DashboardLayout";
import PublicLayout from "./PublicLayout";

const AppLayout: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  const Layout = token ? DashboardLayout : PublicLayout;

  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default AppLayout;
