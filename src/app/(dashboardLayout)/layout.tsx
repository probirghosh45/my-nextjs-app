import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full items-start justify-start self-stretch">
      <Sidebar />
      <div className="flex-grow flex items-center justify-center min-h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
