import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Container } from "@/components/ui/container";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-row bg-gray-50">
            <Sidebar />
            <Container className="inline-flex flex-col gap-6 py-5">
                <Navbar />
                {children}
            </Container>
        </div>
    );
};

export default DashboardLayout;
