import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-row">
            <Sidebar />
            <div className="bg-gray-50 w-full">{children}</div>
        </div>
    );
};

export default DashboardLayout;
