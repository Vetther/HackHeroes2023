import DashboardShell from "@/components/dashboard-shell";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Container } from "@/components/ui/container";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-row bg-gray-50">
            <Sidebar />
            <div className="w-full flex flex-col">
                <Navbar />
                <DashboardShell>
                    {children}
                </DashboardShell>
                </div>
        </div>
    );
};

export default DashboardLayout;
